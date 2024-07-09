// src/App.tsx
import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import CardList from "./components/CardList";
import Card from "./components/Card";
import Footer from "./components/Footer";
import Button from "./components/Button";
import { SignUpForm, TextAreaField, TextField } from "./components/SignUpForm";

const App: React.FC = () => {
  const navItems = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Contact", href: "/contact" },
  ];

  const footerLinks = [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Service", href: "/terms" },
    { label: "Contact Us", href: "/contact" },
  ];

  const handleSignUp = (formData: Record<string, string>) => {
    console.log("Sign up data:", formData);
    // Here you would typically send the data to your backend
  };

  return (
    <div className="flex flex-col min-h-screen bg-background-light">
      <Navbar
        navItems={navItems}
        onLogin={() => console.log("Login clicked")}
        onSignup={() => console.log("Signup clicked")}
      />
      <Hero
        title="Welcome to Our World"
        subtitle="Discover amazing experiences and unforgettable adventures"
        imageSrc="https://source.unsplash.com/random/1600x900?landscape"
        height="lg"
      >
        <Button size="lg" onClick={() => console.log("Explore clicked")}>
          Explore Now
        </Button>
      </Hero>
      <main className="flex-grow">
        <div className="container mx-auto px-md py-lg">
          <h2 className="text-3xl font-bold mb-lg text-center">
            Featured Destinations
          </h2>
          <CardList>
            <Card
              title="Exploring Nature"
              description="Discover the beauty of untouched landscapes and wildlife."
              imageSrc="https://source.unsplash.com/random/300x200?nature"
              size="md"
            />
            <Card
              title="Urban Adventures"
              description="Experience the vibrant life of bustling city centers."
              imageSrc="https://source.unsplash.com/random/300x200?city"
              size="md"
            />
            <Card
              title="Culinary Journeys"
              description="Taste the world through its diverse cuisines and flavors."
              imageSrc="https://source.unsplash.com/random/300x200?food"
              size="md"
            />
          </CardList>

          {/* New SignUpForm section */}
          <section className="mt-lg">
            <h2 className="text-3xl font-bold mb-md text-center">
              Sign Up for Updates
            </h2>
            <div className="max-w-md mx-auto">
              <SignUpForm
                onSubmit={handleSignUp}
                submitButtonText="Join Our Community"
              >
                <TextField
                  name="name"
                  label="Full Name"
                  required
                  placeholder="John Doe"
                  inputClassName="p-2"
                  inputStyle={{ backgroundColor: "#f0f0f0" }}
                />
                <TextField
                  name="email"
                  label="Email Address"
                  type="email"
                  required
                  placeholder="john@example.com"
                  inputClassName="p-3"
                />
                <TextAreaField
                  name="interests"
                  label="Travel Interests"
                  placeholder="Tell us about your travel preferences"
                  className="mt-4"
                  inputClassName="p-4"
                  inputStyle={{ minHeight: "200px" }}
                />
              </SignUpForm>
            </div>
          </section>
        </div>
      </main>
      <Footer links={footerLinks} height="md" backgroundColor="primary" />
    </div>
  );
};

export default App;
