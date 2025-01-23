// TODO: fill in the sign-up and sign-in logic using pocketbase sdk in ts

import React, { createContext, useContext } from "react";
import { useStorageState } from "@/hooks/useStorageState";
import { pb } from "@/lib/pb.config";

interface AuthContextType {
  signUp: (
    email: string,
    password: string,
    passwordConfirm: string,
  ) => Promise<void>;
  signIn: (email: string, password: string) => Promise<void>;
  signOut: () => void;
  session: any;
  isLoading: boolean;
}

const AuthContext = createContext<AuthContextType>({
  signUp: async () => {},
  signIn: async () => {},
  signOut: () => {},
  session: null,
  isLoading: false,
});

export const useAuth = () => useContext(AuthContext);

export function useSession() {
  const value = useContext(AuthContext);
  if (process.env.NODE_ENV !== "production" && !value) {
    throw new Error("useSession must be wrapped in a <SessionProvider />");
  }

  return value;
}

export function SessionProvider(props: React.PropsWithChildren) {
  const [[isLoading, session], setSession] = useStorageState("session");

  return (
    <AuthContext.Provider
      value={{
        signUp: async (email: string, password: string, passwordConfirm: string) => {
          try {
            await pb.collection('users').create({
              email,
              password,
              passwordConfirm,
            });
            const authData = await pb.collection('users').authWithPassword(email, password);
            setSession(authData);
          } catch (error) {
            console.error('Sign up error:', error);
            throw error;
          }
        },
        signIn: async (email: string, password: string) => {
          try {
            const authData = await pb.collection('users').authWithPassword(email, password);
            setSession(authData);
          } catch (error) {
            console.error('Sign in error:', error);
            throw error;
          }
        },
        signOut: () => {
          pb.authStore.clear();
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