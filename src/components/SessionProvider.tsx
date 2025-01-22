// TODO: add promise & rejection handling in toasts

import React, { createContext, useContext } from "react";
import { useStorageState } from "@/hooks/useStorageState";
import { toast } from "sonner-native";
import axios from "axios";

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
        signUp: async (
          email: string,
          password: string,
          passwordConfirm: string,
        ) => {
          try {
            const response = await axios.post(
              `${process.env.EXPO_PUBLIC_API_BASE_URL}/signup`,
              {
                email,
                password,
                passwordConfirm,
              },
            );

            setSession(response.data.token);
          } catch (error: any) {
            console.error("Sign-up error:", error);
            throw error;
          }
        },
        signIn: async (email: string, password: string) => {
          try {
            const response = await axios.post(
              `${process.env.EXPO_PUBLIC_API_BASE_URL}/signin`,
              {
                emailOrUsername: email,
                password,
              },
            );

            setSession(response.data.token);
          } catch (error: any) {
            console.error("Sign-in error:", error);
            throw error;
          }
        },
        signOut: () => {
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
