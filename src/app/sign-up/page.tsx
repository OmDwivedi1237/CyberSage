"use client";
import React from "react";
import { useRouter } from "next/navigation"; // Adjust import if using Next.js routing
import { signInWithPopup, Auth, UserCredential } from "firebase/auth";
import { auth, googleProvider, githubProvider } from "@/app/firebase/config"; // Adjust the path as needed
import { Input } from "@/components/form/input"; // Adjust the path as needed
import { Label } from "@/components/form/label"; // Adjust the path as needed

const SignUp: React.FC = () => {
  const router = useRouter();

  const handleGoogleSignUp = async (): Promise<void> => {
    try {
      const result: UserCredential = await signInWithPopup(auth, googleProvider);
      const user = result.user;
      const credential = googleProvider.credentialFromResult(result);
      const token = credential?.accessToken; // `credential` might be null
      console.log("User signed in with Google:", user);
      router.push("/dashboard");
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
      console.log("User signed in with GitHub:", user);
      router.push("/dashboard");
    } catch (error) {
      console.error("GitHub sign-up error:", error);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-zinc-950">
      <div className="max-w-sm w-full p-6 bg-white dark:bg-zinc-800 rounded-lg shadow-lg">
        <div className="flex justify-center mb-4">
          <img src="/logo.png" alt="Logo" className="h-12" /> {/* Replace with your logo */}
        </div>
        <h1 className="text-2xl font-bold mb-4 text-center text-purple-500">Sign Up</h1>
        <div className="flex flex-col items-center mt-4">
          <p className="text-sm mb-2 text-purple-300">Sign up with</p>
          <Input
            type="button"
            value="    Google    "
            onClick={handleGoogleSignUp}
            className="w-full py-2 px-4 bg-red-500 text-white rounded-md transition cursor-pointer mb-2"
          />
          <Input
            type="button"
            value="    GitHub    "
            onClick={handleGithubSignUp}
            className="w-full py-2 px-4 bg-gray-700 text-white rounded-md transition cursor-pointer"
          />
        </div>
        <div className="text-center mt-4">
          <p className="text-sm text-purple-300">Already have an account? <a href="/sign-in" className="text-purple-500 hover:underline">Sign In</a></p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
