import fs from "fs";
import path from "path";

const componentDir = "./src/components";
const outputFile = "./src/ComponentCarousel.tsx";

function extractComponentInfo(filePath) {
  const content = fs.readFileSync(filePath, "utf8");
  const fileName = path.basename(filePath);
  const componentName = fileName.replace(".tsx", "");

  const titleMatch = content.match(/\/\*\*\s*\n\s*\*\s*(.+)\s*\n/);
  const title = titleMatch ? titleMatch[1] : componentName;

  const useCaseMatch = content.match(/\*\s*Use case:\s*(.+)\s*\n/);
  const useCase = useCaseMatch ? useCaseMatch[1] : "No use case provided";

  return { componentName, fileName, title, useCase };
}

function generateCarouselComponent(components) {
  return `
import React, { useState } from 'react';
import Button from './components/Button';
import Card from './components/Card';
import CardList from './components/CardList';
import ChatWindow from './components/ChatWindow';
import ConversationList from './components/ConversationList';
import Footer from './components/Footer';
import Hero from './components/Hero';
import InputBar from './components/InputBar';
import MessageBubble from './components/MessageBubble';
import Navbar from './components/Navbar';
import NavLink from './components/NavLink';
import { SignUpForm, TextField, TextAreaField } from './components/SignUpForm';
import UserAvatar from './components/UserAvatar';

interface ComponentInfo {
  componentName: string;
  fileName: string;
  title: string;
  useCase: string;
}

const components: ComponentInfo[] = ${JSON.stringify(components, null, 2)};

export const ComponentCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextComponent = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % components.length);
  };

  const prevComponent = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + components.length) % components.length);
  };

  const currentComponent = components[currentIndex];

  const renderComponentExample = (componentName: string) => {
    switch(componentName) {
      case 'Button':
        return <Button onClick={() => console.log('Button clicked')}>Example Button</Button>;
      case 'Card':
        return <Card title="Example Card" description="This is an example card component." />;
      case 'CardList':
        return (
          <CardList>
            <Card title="Card 1" description="Description 1" />
            <Card title="Card 2" description="Description 2" />
            <Card title="Card 3" description="Description 3" />
          </CardList>
        );
      case 'ChatWindow':
        return (
          <ChatWindow>
            <MessageBubble message="Hello!" isUser={false} />
            <MessageBubble message="Hi there!" isUser={true} />
            <InputBar onSubmit={(value) => console.log('Submitted:', value)} placeholder="Type a message..." />
          </ChatWindow>
        );
      case 'ConversationList':
        return (
          <div className="bg-white p-4 rounded-lg shadow">
            <ConversationList 
              conversations={[
                { id: '1', name: 'John Doe', lastMessage: 'Hello there!' },
                { id: '2', name: 'Jane Smith', lastMessage: 'How are you?' },
              ]}
              onSelectConversation={(id) => console.log('Selected conversation:', id)}
            />
          </div>
        );
      case 'Footer':
        return <Footer links={[{label: 'Privacy', href: '#'}, {label: 'Terms', href: '#'}]} />;
      case 'Hero':
        return (
          <Hero 
            title="Example Hero" 
            subtitle="This is an example hero component."
            imageSrc="https://via.placeholder.com/800x400"
          >
            <Button onClick={() => console.log('Hero button clicked')}>Learn More</Button>
          </Hero>
        );
      case 'InputBar':
        return <InputBar onSubmit={(value) => console.log('Submitted:', value)} placeholder="Type something..." />;
      case 'MessageBubble':
        return (
          <div>
            <MessageBubble message="This is a user message" isUser={true} />
            <MessageBubble message="This is a non-user message" isUser={false} />
          </div>
        );
      case 'Navbar':
        return (
          <Navbar className="bg-footer text-white p-4">
            <div className="text-xl font-bold">Logo</div>
            <NavLink href="#" className="text-white hover:text-gray-300">Home</NavLink>
            <NavLink href="#" className="text-white hover:text-gray-300">About</NavLink>
            <NavLink href="#" className="text-white hover:text-gray-300">Contact</NavLink>
          </Navbar>
        );
      case 'NavLink':
        return (
          <div className="bg-footer p-4">
            <NavLink href="#" className="text-white hover:text-gray-300">Home</NavLink>
            <NavLink href="#" className="text-white hover:text-gray-300 ml-4">About</NavLink>
          </div>
        );
      case 'SignUpForm':
        return (
          <SignUpForm onSubmit={() => console.log('Form submitted')}>
            <TextField name="name" label="Name" />
            <TextField name="email" label="Email" type="email" />
            <TextAreaField name="message" label="Message" />
          </SignUpForm>
        );
      case 'UserAvatar':
        return <UserAvatar src="https://via.placeholder.com/100" alt="User" />;
      default:
        return <div>No example available for {componentName}</div>;
    }
  };

  return (
    <div className="component-carousel bg-white shadow-lg rounded-lg p-6 max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold mb-4 text-footer">{currentComponent.title}</h2>
      <p className="text-neutral-700 mb-2">File: {currentComponent.fileName}</p>
      <p className="text-neutral-700 mb-4">Use case: {currentComponent.useCase}</p>
      <div className="mb-6 p-4 border rounded max-h-96 overflow-y-auto">
        {renderComponentExample(currentComponent.componentName)}
      </div>
      <div className="flex justify-between">
        <button onClick={prevComponent} className="bg-footer text-white px-4 py-2 rounded hover:bg-1f7a8c transition-colors duration-300">Previous</button>
        <button onClick={nextComponent} className="bg-footer text-white px-4 py-2 rounded hover:bg-1f7a8c transition-colors duration-300">Next</button>
      </div>
    </div>
  );
};
`;
}

// Scan the component directory
const componentFiles = fs
  .readdirSync(componentDir)
  .filter((file) => file.endsWith(".tsx"));

// Extract component information
const components = componentFiles.map((file) =>
  extractComponentInfo(path.join(componentDir, file))
);

// Generate and write the carousel component
const carouselComponent = generateCarouselComponent(components);
fs.writeFileSync(outputFile, carouselComponent);

console.log(`Component carousel generated at ${outputFile}`);
