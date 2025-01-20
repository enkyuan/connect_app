import pb from "./pb.config.ts";

// Email validation regex
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/**
 * Validate an email address using a regex.
 */
function isValidEmail(email: string): boolean {
  return emailRegex.test(email);
}

/**
 * Check if a username is valid (not already taken).
 */
async function isValidUsername(username: string): Promise<boolean> {
  try {
    const result = await pb.collection("users").getList(1, 1, {
      filter: `username = "${username}"`,
    });
    return result.totalItems === 0;
  } catch (error: any) {
    console.error("Error checking username:", error);
    throw new Error("Failed to check if username is valid");
  }
}

/**
 * Check if an email already exists in the database.
 */
async function isExistingEmail(email: string): Promise<boolean> {
  try {
    const result = await pb.collection("users").getList(1, 1, {
      filter: `email = "${email}"`,
    });
    return result.totalItems > 0;
  } catch (error: any) {
    console.error("Error checking email:", error);
    throw new Error("Failed to check if email exists");
  }
}

export { isExistingEmail, isValidUsername, isValidEmail };
