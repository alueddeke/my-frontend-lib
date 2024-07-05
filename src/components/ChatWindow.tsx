// src/components/ChatWindow.tsx
import React, { ReactNode } from "react";

interface ChatWindowProps {
  children: ReactNode;
}

const ChatWindow: React.FC<ChatWindowProps> = ({ children }) => {
  return (
    <div className="flex flex-col h-screen bg-background-light">
      <div className="flex-1 overflow-y-auto p-md">{children}</div>
    </div>
  );
};

export default ChatWindow;
