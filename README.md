# My Frontend Library

A comprehensive React component library with Tailwind CSS styling.

## Installation

To install this library, run one of the following commands:

```tsx
npm install https://github.com/alueddeke/my-frontend-lib.git
# or
yarn add https://github.com/alueddeke/my-frontend-lib.git
```

## Components

### Button

A customizable button component.

```tsx
<Button variant="secondary" size="lg" onClick={() => console.log("Clicked")}>
  Click Me
</Button>
```

### Card

Displays content in a structured format, optionally including an image.

```tsx
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

```tsx
<CardList>
  <Card title="Card 1" description="Description 1" />
  <Card title="Card 2" description="Description 2" />
  <Card title="Card 3" description="Description 3" />
</CardList>
```

### ChatWindow

A container for chat messages and input.

```tsx
<ChatWindow>{/* Chat messages and input go here */}</ChatWindow>
```

### ConversationList

Displays a list of conversations or chat threads.

```tsx
<ConversationList
  conversations={[
    { id: "1", name: "John Doe", lastMessage: "Hello!" },
    { id: "2", name: "Jane Smith", lastMessage: "How are you?" },
  ]}
  onSelectConversation={(id) => console.log(`Selected conversation: ${id}`)}
/>
```

### Footer

A customizable footer component.

```tsx
<Footer
  links={[
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Service", href: "/terms" },
  ]}
  height="lg"
  backgroundColor="secondary"
/>
```

### Hero

Creates a prominent banner area, often used at the top of a page.

```tsx
<Hero
  title="Welcome to Our Site"
  subtitle="Discover amazing things"
  imageSrc="https://example.com/hero-image.jpg"
  height="lg"
>
  <Button size="lg">Get Started</Button>
</Hero>
```

### InputBar

An input component for chat or search functionality.

```tsx
<InputBar onSendMessage={(message) => console.log(`Sending: ${message}`)} />
```

### MessageBubble

Displays individual chat messages.

```tsx
<MessageBubble message="Hello, how are you?" isUser={false} />
```

### Navbar

A responsive navigation bar for your application.

```tsx
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

```tsx
<NavLink href="/about">About Us</NavLink>
```

### UserAvatar

Displays a user's avatar image.

```tsx
<UserAvatar src="https://example.com/avatar.jpg" alt="User Name" />
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

```ts
module.exports = {
  presets: [require("my-frontend-lib/tailwind.config.js")],
  // Your project-specific configurations...
};
```

3. Import the library's CSS file in your main CSS file:

```tsx
@import 'my-frontend-lib/dist/styles.css';
```
