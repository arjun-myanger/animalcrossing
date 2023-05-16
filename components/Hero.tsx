import React from "react";
import EventCalendar from "./EventCalendar";

const Hero: React.FC = () => {
  return (
    <section
      className="py-16 px-4 sm:px-8 lg:px-16 min-h-screen"
      style={{
        backgroundImage: "url(/leaves.png)",
        backgroundSize: "200px 200px",
        backgroundRepeat: "repeat",
      }}
    >
      <div className="container mx-auto max-w-screen-lg flex flex-col h-full">
        <div className="text-center bg-black bg-opacity-50 text-white p-6 mb-8 rounded-lg">
          <h1 className="text-4xl md:text-5xl font-semibold mb-6">
            Welcome to Animal Crossing Central
          </h1>
          <p className="text-xl">
            Your one-stop hub for all things Animal Crossing. Discover guides,
            news, and community discussions about your favorite Animal Crossing
            games.
          </p>
        </div>
        <div
          className="w-full bg-cover bg-center mb-8 rounded-lg"
          style={{ backgroundImage: "url(/acnh.jpg)", height: "400px" }}
        />
      </div>
      <div className="mt-8">
        <EventCalendar />
      </div>
    </section>
  );
};

export default Hero;
