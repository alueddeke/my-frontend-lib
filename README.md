# My Frontend Library

A comprehensive React component library with Tailwind CSS styling.

## Table of Contents

1. [Installation](#installation)
2. [Components](#components)
   - [Button](#button)
   - [Card](#card)
   - [CardList](#cardlist)
   - [ChatWindow](#chatwindow)
   - [MessageBubble](#messagebubble)
   - [ConversationList](#conversationlist)
   - [InputBar](#inputbar)
   - [Hero](#hero)
   - [Navbar](#navbar)
   - [NavLink](#navlink)
   - [UserAvatar](#useravatar)
   - [Footer](#footer)
3. [Customization](#customization)
4. [Usage with Tailwind CSS](#usage-with-tailwind-css)
5. [Contributing](#contributing)
6. [License](#license)

## Installation

To install this library, run one of the following commands:

```bash
npm install https://github.com/alueddeke/my-frontend-lib.git
# or
yarn add https://github.com/alueddeke/my-frontend-lib.git
```

## Components

### Button

A customizable button component.  
 Props:

- `variant`: 'primary' | 'secondary' | 'outline' (default: 'primary')
- `size`: 'sm' | 'md' | 'lg' | string (default: 'md')
- `onClick`: () => void
- `children`: ReactNode
- `className`: string (optional)

```jsx
<Button variant="secondary" size="lg" onClick={() => console.log("Clicked")>
  Click Me
</Button>
```

### Card

Displays content in a structured format, optionally including an image.  
 Props:

- `title`: string
- `description`: string
- `imageSrc`: string (optional)
- `size`: 'sm' | 'md' | 'lg' | string (default: 'md')
- `imageSize`: string (default: 'h-48')
- `className`: string (optional)

```jsx
<Card
  title="Card Title"
  description="This is a description of the card."
  imageSrc="https://example.com/image.jpg"
  size="lg"
  imageSize="h-64"
/>
```

### CardList

Provides a grid layout for multiple Card components.  
 Props:

- `children`: ReactNode (Card components)
- `className`: string (optional)

```jsx
<CardList>
  <Card title="Card 1" description="Description 1" />
  <Card title="Card 2" description="Description 2" />
  <Card title="Card 3" description="Description 3" />
</CardList>
```

### ChatWindow

A container for chat messages and input.  
 Props:

- `children`: ReactNode
- `className`: string (optional)

```jsx
<ChatWindow>{/* Chat messages and input go here */}</ChatWindow>
```

### MessageBubble

Displays individual chat messages.  
 Props:

- `message`: string
- `isUser`: boolean
- `className`: string (optional)

```jsx
<MessageBubble message="Hello, how are you?" isUser={false} />
```

### ConversationList

Displays a list of conversations or chat threads.  
 Props:

- `conversations`: Array<{ id: string, name: string, lastMessage: string }>
- `onSelectConversation`: (id: string) => void
- `className`: string (optional)

```jsx
<ConversationList
  conversations={[
    { id: "1", name: "John Doe", lastMessage: "Hello!" },
    { id: "2", name: "Jane Smith", lastMessage: "How are you?" },
  ]}
  onSelectConversation={(id) => console.log(`Selected conversation: ${id}`)}
/>
```

### InputBar

An input component for chat or search functionality.  
 Props:

- `onSendMessage`: (message: string) => void
- `placeholder`: string (optional)
- `className`: string (optional)

```jsx
<InputBar onSendMessage={(message) => console.log(`Sending: ${message}`)} />
```

### Hero

Creates a prominent banner area, often used at the top of a page.  
 Props:

- `title`: string
- `subtitle`: string (optional)
- `imageSrc`: string
- `height`: 'sm' | 'md' | 'lg' | 'full' | string (default: 'md')
- `overlay`: boolean (default: true)
- `children`: ReactNode (optional)
- `className`: string (optional)

```jsx
<Hero
  title="Welcome to Our Site"
  subtitle="Discover amazing things"
  imageSrc="https://example.com/hero-image.jpg"
  height="lg"
>
  <Button size="lg">Get Started</Button>
</Hero>
```

### Navbar

A responsive navigation bar for your application.  
 Props:

- `navItems`: Array<{ label: string, href: string }>
- `onLogin`: () => void (optional)
- `onSignup`: () => void (optional)
- `className`: string (optional)

```jsx
<Navbar
  navItems={[
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
  ]}
  onLogin={() => console.log("Login clicked")}
  onSignup={() => console.log("Signup clicked")}
/>
```

### NavLink

A styled navigation link, typically used within the Navbar.  
 Props:

- `href`: string
- `children`: ReactNode
- `className`: string (optional)

```jsx
<NavLink href="/about">About Us</NavLink>
```

### UserAvatar

Displays a user's avatar image.  
 Props:

- `src`: string
- `alt`: string
- `size`: 'sm' | 'md' | 'lg' | string (default: 'md')
- `className`: string (optional)

```jsx
<UserAvatar src="https://example.com/avatar.jpg" alt="User Name" size="lg" />
```

### Footer

A customizable footer component.  
 Props:

- `links`: Array<{ label: string, href: string }>
- `height`: 'sm' | 'md' | 'lg' | string (default: 'md')
- `backgroundColor`: 'primary' | 'secondary' | 'background' | string (default: 'primary')
- `className`: string (optional)

```jsx
<Footer
  links={[
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Service", href: "/terms" },
  ]}
  height="lg"
  backgroundColor="secondary"
/>
```

## Customization

All components use Tailwind CSS classes for styling. You can further customize the appearance by:

1. Modifying the `tailwind.config.js` file to adjust the theme.
2. Passing custom classes via the `className` prop (where available).
3. Extending the components and adding your own styles.

## Usage with Tailwind CSS

To use this library with Tailwind CSS in your project:

1. Install Tailwind CSS in your project if you haven't already.
2. Extend your `tailwind.config.js`:

```javascript
module.exports = {
  presets: [require("my-frontend-lib/tailwind.config.js")],
  // Your project-specific configurations...
};
```

3. Import the library's CSS file in your main CSS file:

```css
@import "my-frontend-lib/dist/styles.css";
```
