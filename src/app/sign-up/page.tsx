"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { signInWithPopup, Auth, UserCredential, GoogleAuthProvider, GithubAuthProvider } from "firebase/auth";
import { auth, googleProvider, githubProvider } from "@/app/firebase/config";

const SignUp: React.FC = () => {
  const router = useRouter();

  const handleGoogleSignUp = async (): Promise<void> => {
    try {
      const result: UserCredential = await signInWithPopup(auth, googleProvider);
      const user = result.user;
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential?.accessToken;
      console.log("User signed up with Google:", user);
      router.push("/chat");
    } catch (error) {
      console.error("Google sign-up error:", error);
    }
  };

  const handleGithubSignUp = async (): Promise<void> => {
    try {
      const result: UserCredential = await signInWithPopup(auth, githubProvider);
      const user = result.user;
      const credential = GithubAuthProvider.credentialFromResult(result);
      const token = credential?.accessToken;
      console.log("User signed up with GitHub:", user);
      router.push("/chat");
    } catch (error) {
      console.error("GitHub sign-up error:", error);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-black fade-in">
      <div className="max-w-sm w-full p-6 bg-white dark:bg-zinc-950 rounded-lg shadow-lg fade-in">
        <h1 className="text-4xl font-extrabold mb-4 text-center bg-gradient-to-r from-indigo-500 via-pink-500 to-yellow-500 bg-clip-text text-transparent fade-in">
          Sign Up
        </h1>
        <div className="flex flex-col items-center mt-4 space-y-4 fade-in">
          <p className="text-sm mb-2 text-purple-300">Sign up with</p>
          <button onClick={handleGoogleSignUp} className="p-[3px] relative fade-in">
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg" />
            <div className="px-8 py-2 bg-black rounded-[6px] relative group transition duration-200 text-white hover:bg-transparent">
              Google
            </div>
          </button>
          <button onClick={handleGithubSignUp} className="p-[3px] relative fade-in">
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg" />
            <div className="px-8 py-2 bg-black rounded-[6px] relative group transition duration-200 text-white hover:bg-transparent">
              GitHub
            </div>
          </button>
        </div>
        <div className="text-center mt-4 fade-in">
          <p className="text-base text-purple-300">Already have an account? <a href="/sign-in" className="text-blue-500 hover:underline">Sign In</a></p>
        </div>
        <div className="text-center mt-4 fade-in">
          <p className="text-xs text-purple-300">Why we only use oAuth <a href="/whyoauth" className="text-blue-500 hover:underline">Read about it here</a></p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
