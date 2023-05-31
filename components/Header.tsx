// components/Header.tsx
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Header: React.FC = () => {
  const games = [
    { title: "Animal Crossing GameCube", path: "/acgc" },
    { title: "Wild World", path: "/wild-world" },
    { title: "City Folk", path: "/city-folk" },
    { title: "New Leaf", path: "/new-leaf" },
    { title: "New Horizons", path: "/new-horizons" },
  ];

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-black shadow-md">
      <div className="container mx-auto py-4 flex justify-between items-center">
        <Link href="/">
          <div className="flex items-center cursor-pointer">
            <Image src="/leaf.svg.png" alt="Leaf Logo" width={40} height={40} />
            <span className="ml-2 text-3xl font-semibold text-white hover:text-green-500 transition-colors duration-300">
              Animal Crossing
            </span>
          </div>
        </Link>
        <nav className="hidden md:flex space-x-6">
          {games.map((game, index) => (
            <Link key={index} href={game.path}>
              <span className="text-lg font-medium cursor-pointer text-white hover:text-green-500 transition-colors duration-300">
                {game.title}
              </span>
            </Link>
          ))}
        </nav>
        <button
          className="md:hidden focus:outline-none"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <FontAwesomeIcon icon={faBars} className="w-8 h-8 text-white" />
        </button>
      </div>
      {mobileMenuOpen && (
        <nav className="flex flex-col space-y-2 md:hidden mt-4">
          {games.map((game, index) => (
            <Link key={index} href={game.path}>
              <span className="text-lg font-medium cursor-pointer text-white hover:text-green-500 transition-colors duration-300">
                {game.title}
              </span>
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
};

export default Header;
