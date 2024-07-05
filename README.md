# Component Library Documentation

This document outlines the usage and customization options for our React component library.

## Table of Contents

1. [Navbar](#navbar)
2. [Button](#button)
3. [Card](#card)
4. [CardList](#cardlist)
5. [Hero](#hero)
6. [Footer](#footer)

## Navbar

The Navbar component provides a responsive navigation bar for your application.

### Props

| Prop     | Type                                   | Description                      |
| -------- | -------------------------------------- | -------------------------------- |
| navItems | Array<{ label: string, href: string }> | Array of navigation items        |
| onLogin  | () => void                             | Function to handle login action  |
| onSignup | () => void                             | Function to handle signup action |

### Usage

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

## Button

The Button component is a customizable button that can be used throughout your application.

### Props

| Prop      | Type                                    | Default   | Description                    |
| --------- | --------------------------------------- | --------- | ------------------------------ |
| variant   | 'primary' \| 'secondary' \| 'outline'   | 'primary' | Button style variant           |
| size      | 'sm' \| 'md' \| 'lg' \| string          | 'md'      | Button size                    |
| className | string                                  | ''        | Additional CSS classes         |
| children  | ReactNode                               | -         | Button content                 |
| ...props  | ButtonHTMLAttributes<HTMLButtonElement> | -         | All standard button attributes |

### Usage

```tsx
<Button variant="secondary" size="lg" onClick={() => console.log("Clicked")}>
  Click Me
</Button>
```

## Card

The Card component displays content in a structured format, optionally including an image.

### Props

| Prop        | Type                           | Default | Description           |
| ----------- | ------------------------------ | ------- | --------------------- |
| title       | string                         | -       | Card title            |
| description | string                         | -       | Card description      |
| imageSrc    | string                         | -       | URL of the card image |
| size        | 'sm' \| 'md' \| 'lg' \| string | 'md'    | Card size             |
| imageSize   | string                         | 'h-48'  | Height of the image   |

### Usage

```tsx
<Card
  title="Card Title"
  description="This is a description of the card."
  imageSrc="https://example.com/image.jpg"
  size="lg"
  imageSize="h-64"
/>
```

## CardList

The CardList component provides a grid layout for multiple Card components.

### Props

| Prop     | Type      | Description                     |
| -------- | --------- | ------------------------------- |
| children | ReactNode | Card components to be displayed |

### Usage

```tsx
<CardList>
  <Card title="Card 1" description="Description 1" />
  <Card title="Card 2" description="Description 2" />
  <Card title="Card 3" description="Description 3" />
</CardList>
```

## Hero

The Hero component creates a prominent banner area, often used at the top of a page.

### Props

| Prop     | Type                                     | Default | Description                                |
| -------- | ---------------------------------------- | ------- | ------------------------------------------ |
| title    | string                                   | -       | Hero title                                 |
| subtitle | string                                   | -       | Hero subtitle                              |
| imageSrc | string                                   | -       | Background image URL                       |
| height   | 'sm' \| 'md' \| 'lg' \| 'full' \| string | 'md'    | Hero height                                |
| overlay  | boolean                                  | true    | Whether to add a dark overlay on the image |
| children | ReactNode                                | -       | Additional content (e.g., buttons)         |

### Usage

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

## Footer

The Footer component provides a customizable footer for your application.

### Props

| Prop            | Type                                               | Default   | Description             |
| --------------- | -------------------------------------------------- | --------- | ----------------------- |
| links           | Array<{ label: string, href: string }>             | -         | Footer navigation links |
| height          | 'sm' \| 'md' \| 'lg' \| string                     | 'md'      | Footer height           |
| backgroundColor | 'primary' \| 'secondary' \| 'background' \| string | 'primary' | Footer background color |

### Usage

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

## Customization

All components use Tailwind CSS classes for styling. You can further customize the appearance by:

1. Modifying the `tailwind.config.js` file to adjust the theme.
2. Passing custom classes via the `className` prop (where available).
3. Extending the components and adding your own styles.

Remember to refer to the Tailwind CSS documentation for available utility classes and customization options.

```

```
