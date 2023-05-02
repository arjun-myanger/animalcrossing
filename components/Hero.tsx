// components/Hero.tsx
import React from "react";

const Hero: React.FC = () => {
  return (
    <section className="bg-white py-16 px-4 sm:px-8 lg:px-16">
      <div className="container mx-auto max-w-screen-lg">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-semibold text-darker-green mb-6">
            Welcome to Animal Crossing Central
          </h1>
          <p className="text-xl text-darker-gray mb-8">
            Your one-stop hub for all things Animal Crossing. Discover guides,
            news, and community discussions about your favorite Animal Crossing
            games.
          </p>
        </div>
      </div>
      <style jsx>{`
        .text-darker-green {
          color: #72b381;
        }
        .text-darker-gray {
          color: #5a5a5a;
        }
      `}</style>
    </section>
  );
};

export default Hero;
