// src/components/SendButton.tsx
import React from 'react';

export const SendButton = ({ onClick }: { onClick: () => void }) => (
  <button
    onClick={onClick}
    className="ml-2 p-[3px] relative"
  >
    <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg" />
    <div className="px-4 py-2 bg-black rounded-lg relative group transition duration-200 text-white hover:bg-transparent">
      Send
    </div>
  </button>
);
