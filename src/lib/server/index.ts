import express from "express";
import dotenv from "dotenv";
import cors from "cors";

import pb from "./pb.config.ts";
import { isExistingEmail, isValidUsername, isValidEmail } from "./helpers.ts";

dotenv.config();

const app = express();
const port = process.env.PORT;

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send(`Server running on port ${port}`);
});

/**
 * Handle user sign-up.
 */
app.post("/signup", async (req, res) => {
  const { email, username, password, passwordConfirm } = req.body;

  if (!isValidEmail(email)) {
    return res.status(400).json({ error: "Invalid email address" });
  }

  if (await isExistingEmail(email)) {
    return res.status(400).json({ error: "Email already exists" });
  }

  if (!(await isValidUsername(username))) {
    return res.status(400).json({ error: "Username already taken" });
  }

  try {
    const authData = await pb.collection("users").create({
      email,
      username,
      password,
      passwordConfirm,
    });

    res.status(201).json({ token: authData.token, user: authData.record });
  } catch (error: any) {
    console.error("Sign-up error:", error);
    res.status(500).json({ error: error.message });
  }
});

/**
 * Handle user sign-in.
 */
app.post("/signin", async (req, res) => {
  const { emailOrUsername, password } = req.body;

  try {
    let authData;

    if (isValidEmail(emailOrUsername)) {
      // Sign in with email
      authData = await pb
        .collection("users")
        .authWithPassword(emailOrUsername, password);
    } else {
      // Sign in with username
      const result = await pb.collection("users").getList(1, 1, {
        filter: `username = "${emailOrUsername}"`,
      });

      if (result.totalItems === 0) {
        return res.status(400).json({ error: "Username or email is invalid" });
      }

      const user = result.items[0];
      authData = await pb
        .collection("users")
        .authWithPassword(user.email, password);
    }

    res.status(200).json({ token: authData.token, user: authData.record });
  } catch (error: any) {
    console.error("Sign-in error:", error);
    res.status(500).json({ error: error.message });
  }
});

/**
 * Handle OAuth authentication.
 */
app.post("/oauth", async (req, res) => {
  const { provider } = req.body;

  try {
    const authData = await pb.collection("users").authWithOAuth2({
      provider,
      urlCallback: (url) => {
        console.log("Opening URL: ", url);
      },
    });

    const { meta } = authData;
    const OAuthData = {
      name: meta?.name,
      email: meta?.email,
      avatarURL: meta?.avatarURL,
    };

    await pb.collection("users").update(authData.record.id, OAuthData);
    res.status(200).json({ token: authData.token, user: authData.record });
  } catch (error: any) {
    console.error("OAuth error:", error);
    res.status(500).json({ error: error.message });
  }
});

/**
 * Handle user sign-out.
 */
app.post("/signout", (req, res) => {
  pb.authStore.clear();
  res.status(200).json({ message: "Signed out successfully" });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
