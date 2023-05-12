// components/Header.tsx
import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Header: React.FC = () => {
  const games = [
    { title: "Animal Crossing GameCube", path: "/animal-crossing" },
    { title: "Wild World", path: "/wild-world" },
    { title: "City Folk", path: "/city-folk" },
    { title: "New Leaf", path: "/new-leaf" },
    { title: "New Horizons", path: "/new-horizons" },
  ];

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto py-4 flex justify-between items-center">
        <Link href="/">
          <div className="flex items-center cursor-pointer">
            <Image src="/leaf.svg.png" alt="Leaf Logo" width={40} height={40} />
            <span className="ml-2 text-3xl font-semibold text-darker-green hover:text-darker-blue transition-colors duration-300 link-underline-animation">
              Animal Crossing
            </span>
          </div>
        </Link>
        <nav className="hidden md:flex space-x-6">
          {games.map((game, index) => (
            <Link key={index} href={game.path}>
              <span className="text-lg font-medium cursor-pointer text-darker-green hover:text-darker-blue transition-colors duration-300 link-underline-animation">
                {game.title}
              </span>
            </Link>
          ))}
        </nav>
        <button
          className="md:hidden focus:outline-none"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <FontAwesomeIcon
            icon={faBars}
            className="w-8 h-8 text-darker-green"
          />
        </button>
      </div>
      {mobileMenuOpen && (
        <nav className="flex flex-col space-y-2 md:hidden mt-4">
          {games.map((game, index) => (
            <Link key={index} href={game.path}>
              <span className="text-lg font-medium cursor-pointer text-darker-green hover:text-darker-blue transition-colors duration-300 link-underline-animation">
                {game.title}
              </span>
            </Link>
          ))}
        </nav>
      )}
      <style jsx>{`
        .text-darker-green {
          color: #72b381;
        }
        .hover:text-darker-blue:hover {
          color: #51a5 5c0;
        }
        .link-underline-animation {
          position: relative;
        }
        .link-underline-animation::before {
          content: "";
          position: absolute;
          bottom: -2px;
          left: 0;
          width: 100%;
          height: 2px;
          background-color: currentColor;
          transform: scaleX(0);
          transition: transform 0.3s ease-in-out;
        }
        .link-underline-animation:hover::before {
          transform: scaleX(1);
        }
      `}</style>
    </header>
  );
};

export default Header;
