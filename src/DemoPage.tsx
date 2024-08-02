import React, { useState } from "react";
import Navbar from "./components/Navbar";
import NavLink from "./components/NavLink";
import Hero from "./components/Hero";
import CardList from "./components/CardList";
import Card from "./components/Card";
import Footer from "./components/Footer";
import Button from "./components/Button";
import { SignUpForm, TextField, TextAreaField } from "./components/SignUpForm";
import { ComponentCarousel } from "./ComponentCarousel";
import nature from "./images/nature.jpg";
import urban from "./images/urban.jpg";
import culinary from "./images/culinary.jpg";
import travel from "./images/travel2.jpg";

const DemoPage: React.FC = () => {
  const [activeSection, setActiveSection] = useState<"showcase" | "demo">(
    "showcase"
  );

  const navItems = [
    { label: "Component Showcase", href: "#showcase" },
    { label: "Live Demo", href: "#demo" },
  ];

  const footerLinks = [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Service", href: "/terms" },
    { label: "Contact Us", href: "/contact" },
  ];

  const handleSignUp = (formData: Record<string, string>) => {
    console.log("Sign up data:", formData);
  };

  return (
    <div className="flex flex-col min-h-screen bg-e1e5f2">
      <Navbar className="bg-footer text-white">
        <div className="flex-shrink-0">
          <span className="ml-2 text-xl font-bold">My Frontend Lib</span>
        </div>
        <div className="flex space-x-4">
          {navItems.map((item) => (
            <NavLink
              key={item.href}
              href={item.href}
              className="text-white hover:bg-secondary-dark px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300"
              onClick={() =>
                setActiveSection(item.href.slice(1) as "showcase" | "demo")
              }
            >
              {item.label}
            </NavLink>
          ))}
        </div>
      </Navbar>

      <main className="flex-grow text-neutral-700">
        {activeSection === "showcase" && (
          <section id="showcase" className="container mx-auto px-4 py-12">
            <h2 className="text-3xl font-bold mb-8 text-center text-footer">
              Component Showcase
            </h2>
            <ComponentCarousel />
          </section>
        )}

        {activeSection === "demo" && (
          <section id="demo" className="container mx-auto px-4 py-12">
            <h2 className="text-3xl font-bold mb-8 text-center text-footer">
              Live Demo
            </h2>

            <Hero
              title="Welcome to Our World"
              subtitle="Discover amazing experiences and unforgettable adventures"
              height="lg"
              imageSrc={travel}
              className="mb-12 rounded-lg overflow-hidden shadow-lg p-10 text-white"
            >
              <Button
                size="lg"
                onClick={() => console.log("Explore clicked")}
                className="bg-1f7a8c hover:bg-footer text-white font-bold py-3 px-6 rounded-full transition duration-300"
              >
                Explore Now
              </Button>
            </Hero>

            <div className="mb-16">
              <h3 className="text-2xl font-bold mb-6 text-footer">
                Featured Destinations
              </h3>
              <CardList
                layout="horizontal"
                gap="gap-28"
                itemWidth="72"
                className="pb-4"
                containerClassName="overflow-hidden"
              >
                <Card
                  title="Exploring Nature"
                  description="Discover the beauty of untouched landscapes and wildlife."
                  imageSrc={nature}
                  size="lg"
                  className="shadow-lg rounded-lg overflow-hidden transition duration-300 hover:shadow-xl"
                />
                <Card
                  title="Urban Adventures"
                  description="Experience the vibrant life of bustling city centers."
                  imageSrc={urban}
                  size="lg"
                  className="shadow-lg rounded-lg overflow-hidden transition duration-300 hover:shadow-xl"
                />
                <Card
                  title="Culinary Journeys"
                  description="Taste the world through its diverse cuisines and flavors."
                  imageSrc={culinary}
                  size="lg"
                  className="shadow-lg rounded-lg overflow-hidden transition duration-300 hover:shadow-xl"
                />
              </CardList>
            </div>

            <div className="mt-16">
              <h3 className="text-2xl font-bold mb-6 text-footer">
                Sign Up for Updates
              </h3>
              <div className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-lg">
                <SignUpForm
                  onSubmit={handleSignUp}
                  submitButtonText="Join Our Community"
                  className="space-y-4"
                  buttonProps={{
                    size: "md",
                  }}
                  buttonClassName="w-full bg-1f7a8c hover:bg-footer text-white font-bold py-3 px-6 rounded-full transition duration-300"
                >
                  <TextField
                    name="name"
                    label="Full Name"
                    required
                    placeholder="John Doe"
                    inputClassName="w-full p-2 rounded-md focus:ring-2 focus:ring-1f7a8c focus:border-transparent"
                  />
                  <TextField
                    name="email"
                    label="Email Address"
                    type="email"
                    required
                    placeholder="john@example.com"
                    inputClassName="w-full p-2 rounded-md focus:ring-2 focus:ring-1f7a8c focus:border-transparent"
                  />
                  <TextAreaField
                    name="interests"
                    label="Travel Interests"
                    placeholder="Tell us about your travel preferences"
                    className="mt-4"
                    inputClassName="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-1f7a8c focus:border-transparent"
                    inputStyle={{ minHeight: "150px" }}
                  />
                </SignUpForm>
              </div>
            </div>
          </section>
        )}
      </main>

      <Footer
        links={footerLinks}
        height="md"
        backgroundColor="bg-footer"
        className="mt-16"
      />
    </div>
  );
};

export default DemoPage;
