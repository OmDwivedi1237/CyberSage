"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { signInWithPopup, Auth, UserCredential } from "firebase/auth";
import { auth, googleProvider, githubProvider } from "@/app/firebase/config";
import { Input } from "@/components/form/input";

const SignUp: React.FC = () => {
  const router = useRouter();

  const handleGoogleSignUp = async (): Promise<void> => {
    try {
      const result: UserCredential = await signInWithPopup(auth, googleProvider);
      const user = result.user;
      const credential = googleProvider.credentialFromResult(result);
      const token = credential?.accessToken; // `credential` might be null
      console.log("User signed up with Google:", user);
      router.push("/welcome"); // Redirect to a welcome page or similar after sign-up
    } catch (error) {
      console.error("Google sign-up error:", error);
    }
  };

  const handleGithubSignUp = async (): Promise<void> => {
    try {
      const result: UserCredential = await signInWithPopup(auth, githubProvider);
      const user = result.user;
      const credential = githubProvider.credentialFromResult(result);
      const token = credential?.accessToken; // `credential` might be null
      console.log("User signed up with GitHub:", user);
      router.push("/welcome"); // Redirect to a welcome page or similar after sign-up
    } catch (error) {
      console.error("GitHub sign-up error:", error);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-zinc-950">
      <div className="max-w-sm w-full p-6 bg-white dark:bg-zinc-800 rounded-lg shadow-lg">
        <h1 className="text-4xl font-bold mb-4 text-center text-blue-500">Sign Up</h1>
        <div className="flex flex-col items-center mt-4 space-y-4">
          <p className="text-sm mb-2 text-purple-300">Sign up with</p>
          <Input
            type="button"
            value="    Google    "
            onClick={handleGoogleSignUp}
            className="shadow-[0_0_0_3px_#000000_inset] px-6 py-2  border-black dark:border-white dark:text-white text-black rounded-lg font-bold transform hover:-translate-y-1 transition duration-400"
          />
          <Input
            type="button"
            value="    GitHub    "
            onClick={handleGithubSignUp}
            className="shadow-[0_0_0_3px_#000000_inset] px-6 py-2 bg-gradient-to-r border-black dark:border-white dark:text-white text-black rounded-lg font-bold transform hover:-translate-y-1 transition duration-400"
          />
        </div>
        <div className="text-center mt-4">
          <p className="text-base text-purple-300">Already have an account? <a href="/sign-in" className="text-blue-500 hover:underline">Sign In</a></p>
        </div>
        <div className="text-center mt-4">
          <p className="text-xs text-purple-300">Why we only use oAuth <a href="/whyoauth" className="text-blue-500 hover:underline">Read about it here</a></p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
