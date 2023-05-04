// components/Hero.tsx
import React from "react";
import Link from "next/link";

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
          <p className="text-xl text-darker-gray">
            Your one-stop hub for all things Animal Crossing. Discover guides,
            news, and community discussions about your favorite Animal Crossing
            games.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-64">
          {games.map((game, index) => (
            <Link key={index} href={game.path}>
              <div className="relative bg-darker-green rounded-lg overflow-hidden shadow-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl cursor-pointer">
                <div
                  className="absolute inset-0 bg-cover bg-center opacity-50"
                  style={{
                    backgroundImage: `url(/path/to/your/image${index + 1}.jpg)`,
                  }}
                ></div>
                <div className="bg-gradient-to-b from-transparent to-darker-green opacity-75 absolute inset-0"></div>
                <div className="px-8 py-6 relative z-10">
                  <h3 className="text-2xl font-semibold text-white mb-4">
                    {game.title}
                  </h3>
                  <p className="text-white">
                    Explore guides, news, and more about {game.title}.
                  </p>
                </div>
              </div>
            </Link>
          ))}
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
    </section>
  );
};

export default Hero;
