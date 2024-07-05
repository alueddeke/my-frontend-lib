// src/components/MessageBubble.tsx
import React from "react";

interface MessageBubbleProps {
  message: string;
  isUser: boolean;
}

const MessageBubble: React.FC<MessageBubbleProps> = ({ message, isUser }) => {
  const bubbleClass = isUser
    ? "bg-primary text-white self-end"
    : "bg-secondary-light text-gray-800 self-start";

  return (
    <div className={`max-w-xs rounded-lg p-sm mb-sm ${bubbleClass}`}>
      <p className="text-sm">{message}</p>
    </div>
  );
};

export default MessageBubble;
