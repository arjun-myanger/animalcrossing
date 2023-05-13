// components/Hero.tsx
import React from "react";
import Link from "next/link";
import EventCalendar from "./EventCalendar";

const Hero: React.FC = () => {
  const games = [
    { title: "Animal Crossing GameCube", path: "/animal-crossing" },
    { title: "Wild World", path: "/wild-world" },
    { title: "City Folk", path: "/city-folk" },
    { title: "New Leaf", path: "/new-leaf" },
    { title: "New Horizons", path: "/new-horizons" },
  ];

  return (
    <section className="bg-white py-16 px-4 sm:px-8 lg:px-16 min-h-screen">
      <div className="container mx-auto max-w-screen-lg flex flex-col h-full">
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-semibold text-darker-green mb-6">
            Welcome to Animal Crossing Central
          </h1>
          <p className="text-xl text-darker-green">
            Your one-stop hub for all things Animal Crossing. Discover guides,
            news, and community discussions about your favorite Animal Crossing
            games.
          </p>
        </div>
        <div className="flex flex-wrap justify-center items-center flex-grow mt-64">
          {games.slice(0, 3).map((game, index) => (
            <Link key={index} href={game.path}>
              <div className="bg-darker-green px-12 py-8 text-white text-center font-semibold text-2xl rounded-lg cursor-pointer transition-all duration-300 m-4 shadow-lg transform hover:scale-105 hover:shadow-xl">
                {game.title}
              </div>
            </Link>
          ))}
          <div className="w-full flex justify-center">
            {games.slice(3).map((game, index) => (
              <Link key={index + 3} href={game.path}>
                <div className="bg-darker-green px-12 py-8 text-white text-center font-semibold text-2xl rounded-lg cursor-pointer transition-all duration-300 m-4 shadow-lg transform hover:scale-105 hover:shadow-xl">
                  {game.title}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
      <style jsx>{`
        .text-darker-green {
          color: #72b381;
        }
        .text-darker-gray {
          color: #5a5a5a;
        }
        .bg-darker-green {
          background-color: #72b381;
        }
      `}</style>
      <div className="mt-16">
        <EventCalendar />
      </div>
    </section>
  );
};

export default Hero;
