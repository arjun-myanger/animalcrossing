// components/Header.tsx
import React from "react";
import Link from "next/link";

const Header: React.FC = () => {
  const games = [
    { title: "Animal Crossing", path: "/animal-crossing" },
    { title: "Wild World", path: "/wild-world" },
    { title: "City Folk", path: "/city-folk" },
    { title: "New Leaf", path: "/new-leaf" },
    { title: "New Horizons", path: "/new-horizons" },
  ];

  return (
    <header className="bg-gradient-to-r from-green-400 to-blue-500 text-white shadow-md">
      <div className="container mx-auto py-4">
        <div className="flex justify-between items-center">
          <div className="text-3xl font-semibold">
            <Link href="/">
              <span className="cursor-pointer hover:text-ac-yellow transition-colors duration-300">
                Animal Crossing
              </span>
            </Link>
          </div>
          <nav className="hidden md:flex space-x-6">
            {games.map((game, index) => (
              <Link key={index} href={game.path}>
                <span className="relative text-lg font-medium cursor-pointer group">
                  {game.title}
                  <span className="absolute h-0.5 left-0 bottom-0 bg-ac-yellow w-full transition-all duration-300 ease-in-out transform scale-x-0 group-hover:scale-x-100"></span>
                </span>
              </Link>
            ))}
          </nav>
        </div>
      </div>
      <style jsx>{`
        header {
          background-image: linear-gradient(135deg, #9dffb0 0%, #81f1f7 100%);
        }
        .hover:text-ac-yellow:hover {
          color: #fff563;
        }
      `}</style>
    </header>
  );
};

export default Header;
