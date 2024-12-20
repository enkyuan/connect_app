// TODO: add useState for token validation, etc.

import { create } from "zustand";

export function useAuthState() {
  const useSignUp = create((set) => ({
    isSignUp: false,
    setIsSignUp: (value: boolean) => set({ isSignUp: value }),
  }));

  return {
    useSignUp,
  };
}
