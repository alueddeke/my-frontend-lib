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
   - [SignUpForm](#signupform)
   - [InputBar](#inputbar)
   - [Hero](#hero)
   - [Navbar](#navbar)
   - [NavLink](#navlink)
   - [UserAvatar](#useravatar)
   - [Footer](#footer)

## Installation

To install this library, run one of the following commands:

```bash
npm install https://github.com/alueddeke/my-frontend-lib.git
# or
yarn add https://github.com/alueddeke/my-frontend-lib.git
```

## Customization

All components use Tailwind CSS classes for styling. You can further customize the appearance by:

1. Modifying the `tailwind.config.js` file to adjust the theme.
2. Passing custom classes via the `className` prop (where available).
3. Extending the components and adding your own styles.

## Usage with Tailwind CSS

To use this library with Tailwind CSS in your project:

1. Install Tailwind CSS in your project if you haven't already.

```bash
 npm install tailwindcss postcss autoprefixer
  npx tailwindcss init -p
```

2. Configure your `tailwind.config.js` to include your library's content:

   ```javascript
   import { themes.ts } from "my-frontend-lib";

   export default {
     content: [
       "./src/**/*.{js,jsx,ts,tsx}",
       "./node_modules/your-library-name/**/*.js",
     ],
     theme: {
        extend: {
        colors: theme.colors,
        fontSize: theme.fontSizes,
        fontFamily: theme.fontFamily,
        spacing: theme.spacing,
    },
     },
     plugins: [],
   };
   ```

3. Import the library's CSS file, along with Tailwind directives in your main CSS file:

```css
@import "my-frontend-lib/dist/styles.css";
@tailwind base;
@tailwind components;
@tailwind utilities;
```

4. Import and use components in your React components:

   ```jsx
   import React from "react";
   import { Navbar, NavLink, Button } from "my-frontend-lib";

   function App() {
     return (
       <div>
         <Navbar className="bg-blue-500 text-white">
           <div className="flex-shrink-0">
             <span className="text-xl font-bold">My App</span>
           </div>
           <div className="flex space-x-4">
             <NavLink href="/" className="text-white hover:text-blue-200">
               Home
             </NavLink>
             <NavLink href="/about" className="text-white hover:text-blue-200">
               About
             </NavLink>
           </div>
           <div className="flex items-center space-x-2">
             <Button onClick={() => console.log("Login clicked")}>Login</Button>
             <Button onClick={() => console.log("Sign up clicked")}>
               Sign Up
             </Button>
           </div>
         </Navbar>
         {/* Rest of your app */}
       </div>
     );
   }

   export default App;
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

### SignUpForm

A customizable sign-up form component that allows for flexible field configuration.

#### Props

| Prop             | Type                                       | Default   | Description                                         |
| ---------------- | ------------------------------------------ | --------- | --------------------------------------------------- |
| onSubmit         | (formData: Record<string, string>) => void | -         | Function called with form data when submitted       |
| submitButtonText | string                                     | "Sign Up" | Text for the submit button                          |
| className        | string                                     | ""        | Additional classes for the form element             |
| children         | React.ReactNode                            | -         | Form fields (TextField or TextAreaField components) |

#### Usage

```jsx
<SignUpForm
  onSubmit={handleSignUp}
  submitButtonText="Join Now"
  className="max-w-md mx-auto"
>
  <TextField
    name="username"
    label="Username"
    required
    inputClassName="p-2 border rounded"
  />
  <TextField
    name="email"
    label="Email"
    type="email"
    required
    inputClassName="p-2 border rounded"
  />
  <TextAreaField
    name="bio"
    label="Bio"
    inputClassName="p-2 border rounded"
    inputStyle={{ minHeight: "100px" }}
  />
</SignUpForm>
```

#### TextField

A component for rendering text input fields within the SignUpForm.

##### Props

| Prop           | Type                | Default | Description                                          |
| -------------- | ------------------- | ------- | ---------------------------------------------------- |
| name           | string              | -       | Name attribute for the input                         |
| label          | string              | -       | Label text for the input                             |
| required       | boolean             | false   | Whether the field is required                        |
| className      | string              | ""      | Additional classes for the field container           |
| inputClassName | string              | ""      | Additional classes for the input element             |
| inputStyle     | React.CSSProperties | {}      | Inline styles for the input element                  |
| [key: string]  | any                 | -       | Any additional props are passed to the input element |

#### TextAreaField

A component for rendering textarea fields within the SignUpForm.

##### Props

| Prop           | Type                | Default | Description                                             |
| -------------- | ------------------- | ------- | ------------------------------------------------------- |
| name           | string              | -       | Name attribute for the textarea                         |
| label          | string              | -       | Label text for the textarea                             |
| required       | boolean             | false   | Whether the field is required                           |
| className      | string              | ""      | Additional classes for the field container              |
| inputClassName | string              | ""      | Additional classes for the textarea element             |
| inputStyle     | React.CSSProperties | {}      | Inline styles for the textarea element                  |
| [key: string]  | any                 | -       | Any additional props are passed to the textarea element |

##### Customization

Both TextField and TextAreaField components are a part of SignUpForm and allow for extensive customization:

- Use `className` to style the container div (includes label and input)
- Use `inputClassName` to add classes specifically to the input/textarea element
- Use `inputStyle` to add inline styles to the input/textarea element

Example of a custom styled field:

```jsx
<TextField
  name="custom"
  label="Custom Field"
  className="mb-4"
  inputClassName="p-3 bg-gray-100 rounded-lg"
  inputStyle={{ border: "2px solid #4a5568" }}
  placeholder="Enter custom data"
/>
```

### InputBar

A flexible input component that can be used for various purposes such as search bars or form inputs.

#### Props

| Prop            | Type                    | Default         | Description                                 |
| --------------- | ----------------------- | --------------- | ------------------------------------------- |
| onSubmit        | (value: string) => void | -               | Function called when the input is submitted |
| placeholder     | string                  | "Enter text..." | Placeholder text for the input              |
| initialValue    | string                  | ""              | Initial value of the input                  |
| className       | string                  | ""              | Additional classes for the container div    |
| inputClassName  | string                  | ""              | Additional classes for the input element    |
| buttonClassName | string                  | ""              | Additional classes for the submit button    |
| inputStyle      | React.CSSProperties     | {}              | Inline styles for the input element         |

#### Usage

```jsx
<InputBar
  onSubmit={(value) => console.log(value)}
  placeholder="Search..."
  inputClassName="p-2 border rounded"
  buttonClassName="bg-blue-500 text-white p-2 rounded"
  inputStyle={{ fontSize: "16px" }}
/>
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

A flexible container for creating navigation bars.

Props:

- `children`: ReactNode - The content of the navbar
- `className`: string (optional) - Additional CSS classes

Usage:

```jsx
<Navbar className="bg-blue-500 text-white">
  <div className="flex-shrink-0">
    <img src="/logo.png" alt="Logo" className="h-8 w-auto" />
    <span className="ml-2 text-xl font-bold">My Company</span>
  </div>
  <div className="flex space-x-4">
    <NavLink href="/" className="text-white hover:text-blue-200">
      Home
    </NavLink>
    <NavLink href="/about" className="text-white hover:text-blue-200">
      About
    </NavLink>
  </div>
  <div className="flex items-center space-x-2">
    <Button onClick={() => console.log("Login clicked")}>Login</Button>
    <Button onClick={() => console.log("Sign up clicked")}>Sign Up</Button>
  </div>
</Navbar>
```

### NavLink

A component for rendering navigation links.

Props:

- `href`: string - The URL the link points to
- `children`: ReactNode - The content of the link
- `className`: string (optional) - Additional CSS classes

Usage:

```jsx
<NavLink href="/about" className="text-white hover:text-blue-200">
  About
</NavLink>
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
