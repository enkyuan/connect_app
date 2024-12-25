import { create } from "zustand";

export function authState() {
  const useSignUp = create((set) => ({
    isSignUp: false,
    setIsSignUp: (value: boolean) => set({ isSignUp: value }),
  }));

  const useFormData = create((set) => ({
    formData: {},
    setFormData: (value: FormData) => set({ formData: value }),
  }));

  return {
    useSignUp,
    useFormData,
  };
}
