import React, { useState } from "react";

interface InputBarProps {
  onSubmit: (value: string) => void;
  placeholder?: string;
  buttonText?: string;
  initialValue?: string;
  className?: string;
  inputClassName?: string;
  buttonClassName?: string;
  inputStyle?: React.CSSProperties;
}

const InputBar: React.FC<InputBarProps> = ({
  onSubmit,
  placeholder = "Enter text...",
  buttonText = "Submit",
  initialValue = "",
  className = "",
  inputClassName = "",
  buttonClassName = "",
}) => {
  const [value, setValue] = useState(initialValue);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (value.trim()) {
      onSubmit(value);
      setValue("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className={`flex ${className}`}>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className={`flex-1 px-sm py-xs border rounded-l-lg focus:outline-none focus:ring-2 focus:ring-primary ${inputClassName}`}
        placeholder={placeholder}
      />
      <button
        type="submit"
        className={`px-md py-xs bg-primary text-white rounded-r-lg hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-primary ${buttonClassName}`}
      >
        {buttonText}
      </button>
    </form>
  );
};

export default InputBar;
