// components/Footer.tsx
import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-black py-8">
      <div className="container mx-auto text-center">
        <p className="text-white text-lg font-medium">
          &copy; {new Date().getFullYear()} Animal Crossing Central. All rights
          reserved.
        </p>
      </div>
      <style jsx>{`
        .bg-darker-green {
          background-color: #72b381;
        }
      `}</style>
    </footer>
  );
};

export default Footer;
