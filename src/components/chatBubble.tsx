import React from "react";
import { cn } from "@/lib/utils";

export const ChatBubble = ({ text, isUser }: { text: string; isUser: boolean }) => {
  return (
    <div
      className={cn(
        "max-w-xs p-3 mb-2 rounded-lg relative",
        "text-white font-bold",
        isUser
          ? "bg-gradient-to-r from-indigo-500 to-purple-500"
          : "bg-gradient-to-r from-green-400 to-blue-500",
        "text-sm"
      )}
    >
      <span>{text}</span>
    </div>
  );
};
