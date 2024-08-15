"use client";
import React from "react";
import Link from "next/link";
import { WavyBackground } from "@/components/wavy-background";
import { FlipWords } from "@/components/flip-words";

export default function Home() {
  return (
    <div className="relative">
      <WavyBackground className="max-w-4xl mx-auto pb-60 relative">
        <div
          className="text-3xl md:text-6xl lg:text-9xl text-white font-semibold inter-var text-center"
          style={{
            textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
          }}
        >
          <span className="inline-block">
            <FlipWords words={['CyberSage']} />
          </span>
        </div>
        <p
          className="text-base md:text-lg mt-4 text-white font-normal inter-var text-center"
          style={{
            textShadow: '1px 1px 2px rgba(0, 0, 0, 0.5)',
          }}
        >
          The New Standard For Cybersecurity Assistance
        </p>
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
          <Link href="/sign-up">
            <button className="p-[2px] relative z-50">
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg" />
              <div className="px-8 py-2 bg-black rounded-[6px] relative group transition duration-200 text-white hover:bg-transparent">
                Get Started
              </div>
            </button>
          </Link>
        </div>
      </WavyBackground>
    </div>
  );
}
