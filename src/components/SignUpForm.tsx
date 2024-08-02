// src/components/SignUpForm.tsx
import React from "react";
import InputBar from "./InputBar";
import Button, { ButtonProps } from "./Button";

/**
 * SignUpForm Component
 * Use case: Creates a customizable sign-up form with various input fields and a submit button
 */

/**
 * TextField Component
 * Use case: Renders a single-line text input field with a label, for use within the SignUpForm
 */

interface FieldProps {
  name: string;
  label: string;
  required?: boolean;
  className?: string;
  inputClassName?: string;
  inputStyle?: React.CSSProperties;
  [key: string]: any;
}

const TextField: React.FC<FieldProps> = ({
  name,
  label,
  required,
  className,
  inputClassName,
  inputStyle,
  ...props
}) => (
  <div className={className}>
    <label htmlFor={name} className="block text-sm font-medium text-gray-700">
      {label}
    </label>
    <InputBar
      onSubmit={() => {}}
      placeholder={props.placeholder}
      initialValue={props.value as string}
      className={`mt-1 ${inputClassName || ""}`}
      inputClassName={`w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 ${
        inputClassName || ""
      }`}
      inputStyle={inputStyle}
      buttonClassName="hidden"
      {...props}
    />
  </div>
);

const TextAreaField: React.FC<FieldProps> = ({
  name,
  label,
  required,
  className,
  inputClassName,
  inputStyle,
  ...props
}) => (
  <div className={className}>
    <label htmlFor={name} className="block text-sm font-medium text-gray-700">
      {label}
    </label>
    <textarea
      id={name}
      name={name}
      required={required}
      className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 ${
        inputClassName || ""
      }`}
      style={inputStyle}
      rows={4}
      {...props}
    />
  </div>
);
interface SignUpFormProps {
  onSubmit: (formData: Record<string, string>) => void;
  submitButtonText?: string;
  className?: string;
  children: React.ReactNode;
  buttonProps?: Partial<ButtonProps>;
  buttonClassName?: string;
  CustomButton?: React.ComponentType<ButtonProps>;
}

const SignUpForm: React.FC<SignUpFormProps> = ({
  onSubmit,
  submitButtonText = "Sign Up",
  className = "",
  children,
  buttonProps = {},
  buttonClassName = "",
  CustomButton,
}) => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data: Record<string, string> = {};
    formData.forEach((value, key) => {
      data[key] = value.toString();
    });
    onSubmit(data);
  };

  const ButtonComponent = CustomButton || Button;

  return (
    <form onSubmit={handleSubmit} className={`space-y-4 ${className}`}>
      {children}
      <ButtonComponent
        type="submit"
        className={buttonClassName}
        {...buttonProps}
      >
        {submitButtonText}
      </ButtonComponent>
    </form>
  );
};

export { SignUpForm, TextField, TextAreaField };
