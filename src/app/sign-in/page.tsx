"use client";
import React from "react";
import { useRouter } from "next/navigation"; // Adjust import if using Next.js routing
import { signInWithPopup, Auth, UserCredential } from "firebase/auth";
import { auth, googleProvider, githubProvider } from "@/app/firebase/config"; // Adjust the path as needed
import { Input } from "@/components/form/input"; // Adjust the path as needed
import { Label } from "@/components/form/label"; // Adjust the path as needed

const SignIn: React.FC = () => {
  const router = useRouter();

  const handleGoogleSignIn = async (): Promise<void> => {
    try {
      const result: UserCredential = await signInWithPopup(auth, googleProvider);
      const user = result.user;
      const credential = googleProvider.credentialFromResult(result);
      const token = credential?.accessToken; // `credential` might be null
      console.log("User signed in with Google:", user);
      router.push("/dashboard");
    } catch (error) {
      console.error("Google sign-in error:", error);
    }
  };

  const handleGithubSignIn = async (): Promise<void> => {
    try {
      const result: UserCredential = await signInWithPopup(auth, githubProvider);
      const user = result.user;
      const credential = githubProvider.credentialFromResult(result);
      const token = credential?.accessToken; // `credential` might be null
      console.log("User signed in with GitHub:", user);
      router.push("/dashboard");
    } catch (error) {
      console.error("GitHub sign-in error:", error);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-zinc-950">
      <div className="max-w-sm w-full p-6 bg-white dark:bg-zinc-800 rounded-lg shadow-lg">
        <h1 className="text-4xl font-extrabold mb-4 text-center text-blue-500">Sign In</h1>
        <div className="flex flex-col items-center mt-4 space-y-4"> {/* Added space-y-4 for vertical spacing */}
          <p className="text-sm mb-2 text-purple-300">Sign in with</p>
          <Input
            type="button"
            value="    Google    "
            onClick={handleGoogleSignIn}
            className="shadow-[0_0_0_3px_#000000_inset] px-6 py-2  border-black dark:border-white dark:text-white text-black rounded-lg font-bold transform hover:-translate-y-1 transition duration-400"
          />
          <Input
            type="button"
            value="    GitHub    "
            onClick={handleGithubSignIn}
            className="shadow-[0_0_0_3px_#000000_inset] px-6 py-2 bg-gradient-to-r border-black dark:border-white dark:text-white text-black rounded-lg font-bold transform hover:-translate-y-1 transition duration-400"
          />
        </div>
        <div className="text-center mt-4">
          <p className="text-base text-purple-300">Don't have an account? <a href="/sign-up" className="text-blue-500 hover:underline">Sign Up</a></p>
        </div>
        <div className="text-center mt-4">
          <p className="text-xs text-purple-300">Why we only use oAuth <a href="/whyoauth" className="text-blue-500 hover:underline">Read about it here</a></p>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
