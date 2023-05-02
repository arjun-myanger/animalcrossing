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
    <header className="bg-white shadow-md">
      <div className="container mx-auto py-4">
        <div className="flex justify-between items-center">
          <div className="text-3xl font-semibold">
            <Link href="/">
              <span className="cursor-pointer text-darker-green hover:text-darker-blue transition-colors duration-300">
                Animal Crossing
              </span>
            </Link>
          </div>
          <nav className="hidden md:flex space-x-6">
            {games.map((game, index) => (
              <Link key={index} href={game.path}>
                <span className="text-lg font-medium cursor-pointer text-darker-green hover:text-darker-blue transition-colors duration-300">
                  {game.title}
                </span>
              </Link>
            ))}
          </nav>
        </div>
      </div>
      <style jsx>{`
        .text-darker-green {
          color: #72b381;
        }
        .hover:text-darker-blue:hover {
          color: #51a5c0;
        }
      `}</style>
    </header>
  );
};

export default Header;
