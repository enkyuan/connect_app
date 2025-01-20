import React, { createContext, useContext } from "react";
import { useAuth } from "@/hooks/useAuth";
import { useStorageState } from "@/hooks/useStorageState";

export const AuthContext = createContext<{
  signUp: () => void;
  signIn: () => void;
  signOut: () => void;
  session?: string | null;
  isLoading: boolean;
}>({
  signUp: () => null,
  signIn: () => null,
  signOut: () => null,
  session: null,
  isLoading: false,
});

export function useSession() {
  const value = useContext(AuthContext);
  if (process.env.NODE_ENV !== "production" && !value) {
    throw new Error("useSession must be wrapped in a <SessionProvider />");
  }

  return value;
}

export function SessionProvider(props: React.PropsWithChildren) {
  const auth = useAuth();
  const [[isLoading, session], setSession] = useStorageState("session");
  const credentials = useStorageState("credentials");
  const token = useStorageState("token");

  return (
    <AuthContext.Provider
      value={{
        signUp: () => {
          auth.handleSignUp(credentials);
        },
        signIn: () => {
          auth.handleSignIn(credentials);
          setSession(token);
        },
        signOut: () => {
          auth.handleSignOut();
          setSession(null);
        },
        session,
        isLoading,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
}
