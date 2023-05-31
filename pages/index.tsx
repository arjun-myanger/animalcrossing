import Image from "next/image";
import { Inter } from "next/font/google";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow">
        <Hero />
      </main>
      <Footer />
    </div>
  );
}
