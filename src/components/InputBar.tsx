// src/components/InputBar.tsx
import React, { useState } from "react";

interface InputBarProps {
  onSendMessage: (message: string) => void;
}

const InputBar: React.FC<InputBarProps> = ({ onSendMessage }) => {
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (message.trim()) {
      onSendMessage(message);
      setMessage("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex p-md bg-white border-t">
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        className="flex-1 px-sm py-xs border rounded-l-lg focus:outline-none focus:ring-2 focus:ring-primary"
        placeholder="Type a message..."
      />
      <button
        type="submit"
        className="px-md py-xs bg-primary text-white rounded-r-lg hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-primary"
      >
        Send
      </button>
    </form>
  );
};

export default InputBar;
