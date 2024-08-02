import React, { useState } from "react";
import Button from "./components/Button";
import Card from "./components/Card";
import CardList from "./components/CardList";
import ChatWindow from "./components/ChatWindow";
import ConversationList from "./components/ConversationList";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import InputBar from "./components/InputBar";
import MessageBubble from "./components/MessageBubble";
import Navbar from "./components/Navbar";
import NavLink from "./components/NavLink";
import { SignUpForm, TextField, TextAreaField } from "./components/SignUpForm";
import UserAvatar from "./components/UserAvatar";

/**
 * @typedef {Object} ComponentInfo
 * @property {string} componentName
 * @property {string} fileName
 * @property {string} title
 * @property {string} useCase
 */

/** @type {ComponentInfo[]} */
const components = [
  {
    componentName: "Button",
    fileName: "Button.tsx",
    title: "Button Component",
    useCase: "A highly customizable button for various actions and styles",
  },
  {
    componentName: "Card",
    fileName: "Card.tsx",
    title: "Card Component",
    useCase:
      "Displays content in a structured format, optionally including an image",
  },
  {
    componentName: "CardList",
    fileName: "CardList.tsx",
    title: "CardList Component",
    useCase:
      "Provides a responsive grid layout for displaying multiple Card components",
  },
  {
    componentName: "ChatWindow",
    fileName: "ChatWindow.tsx",
    title: "ChatWindow Component",
    useCase:
      "Provides a scrollable container for chat messages and input, typically used in messaging interfaces",
  },
  {
    componentName: "ConversationList",
    fileName: "ConversationList.tsx",
    title: "ConversationList Component",
    useCase:
      "Displays a list of conversations or chat threads, allowing users to select and switch between different conversations",
  },
  {
    componentName: "Footer",
    fileName: "Footer.tsx",
    title: "Footer",
    useCase: "No use case provided",
  },
  {
    componentName: "Hero",
    fileName: "Hero.tsx",
    title: "Hero Component",
    useCase:
      "Creates a prominent banner or header section for web pages, often used at the top of landing pages or key sections",
  },
  {
    componentName: "InputBar",
    fileName: "InputBar.tsx",
    title: "InputBar Component",
    useCase:
      "Provides a flexible input field with a submit button, commonly used for search bars, chat inputs, or form submissions",
  },
  {
    componentName: "MessageBubble",
    fileName: "MessageBubble.tsx",
    title: "MessageBubble Component",
    useCase:
      "Displays individual chat messages in a visually distinct bubble, differentiating between user and non-user messages",
  },
  {
    componentName: "NavLink",
    fileName: "NavLink.tsx",
    title: "NavLink Component",
    useCase:
      "Creates a customizable navigation link for use in navigation menus, with support for active state styling",
  },
  {
    componentName: "Navbar",
    fileName: "Navbar.tsx",
    title: "Navbar Component",
    useCase:
      "Creates a flexible navigation bar container for website headers, allowing for custom content and styling",
  },
  {
    componentName: "SignUpForm",
    fileName: "SignUpForm.tsx",
    title: "SignUpForm Component",
    useCase:
      "Creates a customizable sign-up form with various input fields and a submit button",
  },
  {
    componentName: "UserAvatar",
    fileName: "UserAvatar.tsx",
    title: "UserAvatar Component",
    useCase:
      "Displays a user's avatar image in a circular format, typically used in user interfaces for profile pictures or user representations",
  },
];

export const ComponentCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextComponent = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % components.length);
  };

  const prevComponent = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + components.length) % components.length
    );
  };

  const currentComponent = components[currentIndex];

  const renderComponentExample = (componentName) => {
    switch (componentName) {
      case "Button":
        return (
          <Button onClick={() => console.log("Button clicked")}>
            Example Button
          </Button>
        );
      case "Card":
        return (
          <Card
            title="Example Card"
            description="This is an example card component."
          />
        );
      case "CardList":
        return (
          <CardList>
            <Card title="Card 1" description="Description 1" />
            <Card title="Card 2" description="Description 2" />
            <Card title="Card 3" description="Description 3" />
          </CardList>
        );
      case "ChatWindow":
        return (
          <ChatWindow>
            <MessageBubble message="Hello!" isUser={false} />
            <MessageBubble message="Hi there!" isUser={true} />
            <InputBar
              onSubmit={(value) => console.log("Submitted:", value)}
              placeholder="Type a message..."
            />
          </ChatWindow>
        );
      case "ConversationList":
        return (
          <div className="bg-white p-4 rounded-lg shadow">
            <ConversationList
              conversations={[
                { id: "1", name: "John Doe", lastMessage: "Hello there!" },
                { id: "2", name: "Jane Smith", lastMessage: "How are you?" },
              ]}
              onSelectConversation={(id) =>
                console.log("Selected conversation:", id)
              }
            />
          </div>
        );
      case "Footer":
        return (
          <Footer
            links={[
              { label: "Privacy", href: "#" },
              { label: "Terms", href: "#" },
            ]}
          />
        );
      case "Hero":
        return (
          <Hero
            title="Example Hero"
            subtitle="This is an example hero component."
            imageSrc="https://via.placeholder.com/800x400"
          >
            <Button onClick={() => console.log("Hero button clicked")}>
              Learn More
            </Button>
          </Hero>
        );
      case "InputBar":
        return (
          <InputBar
            onSubmit={(value) => console.log("Submitted:", value)}
            placeholder="Type something..."
          />
        );
      case "MessageBubble":
        return (
          <div>
            <MessageBubble message="This is a user message" isUser={true} />
            <MessageBubble
              message="This is a non-user message"
              isUser={false}
            />
          </div>
        );
      case "Navbar":
        return (
          <Navbar className="bg-footer text-white p-4">
            <div className="text-xl font-bold">Logo</div>
            <NavLink href="#" className="text-white hover:text-gray-300">
              Home
            </NavLink>
            <NavLink href="#" className="text-white hover:text-gray-300">
              About
            </NavLink>
            <NavLink href="#" className="text-white hover:text-gray-300">
              Contact
            </NavLink>
          </Navbar>
        );
      case "NavLink":
        return (
          <div className="bg-footer p-4">
            <NavLink href="#" className="text-white hover:text-gray-300">
              Home
            </NavLink>
            <NavLink href="#" className="text-white hover:text-gray-300 ml-4">
              About
            </NavLink>
          </div>
        );
      case "SignUpForm":
        return (
          <SignUpForm onSubmit={() => console.log("Form submitted")}>
            <TextField name="name" label="Name" />
            <TextField name="email" label="Email" type="email" />
            <TextAreaField name="message" label="Message" />
          </SignUpForm>
        );
      case "UserAvatar":
        return <UserAvatar src="https://via.placeholder.com/100" alt="User" />;
      default:
        return <div>No example available for {componentName}</div>;
    }
  };

  return (
    <div className="component-carousel bg-white shadow-lg rounded-lg p-6 max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold mb-4 text-footer">
        {currentComponent.title}
      </h2>
      <p className="text-neutral-700 mb-2">File: {currentComponent.fileName}</p>
      <p className="text-neutral-700 mb-4">
        Use case: {currentComponent.useCase}
      </p>
      <div className="mb-6 p-4 border rounded max-h-96 overflow-y-auto">
        {renderComponentExample(currentComponent.componentName)}
      </div>
      <div className="flex justify-between">
        <button
          onClick={prevComponent}
          className="bg-footer text-white px-4 py-2 rounded hover:bg-1f7a8c transition-colors duration-300"
        >
          Previous
        </button>
        <button
          onClick={nextComponent}
          className="bg-footer text-white px-4 py-2 rounded hover:bg-1f7a8c transition-colors duration-300"
        >
          Next
        </button>
      </div>
    </div>
  );
};
