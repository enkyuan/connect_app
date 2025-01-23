// TODO: fill in the sign-up and sign-in logic using pocketbase sdk in ts

import React, { createContext, useContext } from "react";
import { useStorageState } from "@/hooks/useStorageState";
import { pb } from "@/lib/pb.config";

import * as WebBrowser from "expo-web-browser";
import EventSource from "react-native-sse";
import "react-native-url-polyfill";

global.EventSource = EventSource;

interface AuthContextType {
  signUp: (
    email: string,
    password: string,
    passwordConfirm: string,
  ) => Promise<void>;
  signIn: (email: string, password: string) => Promise<void>;
  oauth: (provider: string) => Promise<void>;
  signOut: () => void;
  session: any;
  isLoading: boolean;
}

const AuthContext = createContext<AuthContextType>({
  signUp: async () => {},
  signIn: async () => {},
  oauth: async () => {},
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
        oauth: async (provider: string) => {
          try {
            const authData = await pb.collection("users").authWithOAuth2({
              provider: provider,
              urlCallback: (url) => {
                console.log("Opening URL: ", url);
                WebBrowser.openAuthSessionAsync(url).catch((err) => {
                  console.log("failed to open url", err);
                });
              },
            });
      
            const credentials = {
              name: authData.meta?.name,
              email: authData.meta?.email,
              avatarURL: authData.meta?.avatarURL,
            };
      
            await pb.collection("users").update(authData.record.id, credentials);

            setSession(authData);
          } catch (error: any) {
            console.error('OAuth error:', error);
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