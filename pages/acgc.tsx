/* eslint-disable react/no-unescaped-entities */
import React from "react";
import Image from "next/image";

// Defining the card component
const CharacterCard: React.FC<{
  name: string;
  description: string;
  imgSrc: string;
}> = ({ name, description, imgSrc }) => (
  <a
    href="#"
    className="flex flex-col items-center bg-gray-800 border border-gray-700 rounded-lg shadow hover:bg-gray-700 p-4"
  >
    <div className="w-full h-72 relative">
      <Image
        className="rounded-t-lg object-cover"
        layout="fill"
        src={imgSrc}
        alt={name}
      />
    </div>
    <div className="flex flex-col justify-between leading-normal mt-4">
      <h5 className="mb-2 text-2xl font-bold tracking-tight text-white">
        {name}
      </h5>
      <p className="font-normal text-gray-400">{description}</p>
    </div>
  </a>
);

const ACGC: React.FC = () => {
  return (
    <div className="bg-black min-h-screen text-white px-8 py-12">
      <h1 className="text-5xl font-bold mb-8 text-center">
        Welcome to Animal Crossing: GameCube
      </h1>
      <p className="text-xl mb-6 text-center">
        Released in 2002, Animal Crossing for the GameCube became an instant
        classic. It is renowned for introducing players to a charming world
        where life unfolds in real-time, brimming with colorful characters and
        engaging events.
      </p>
      <p className="text-xl mb-6 text-center">
        With its innovative gameplay, the GameCube version laid the foundation
        for what has become one of Nintendo's most beloved franchises. From Tom
        Nook's shop, the museum run by Blathers, to KK Slider's live
        performances, this game introduced iconic characters and activities that
        have become staples in the series.
      </p>
      <p className="text-xl mb-8 text-center">
        Dive in and explore more about the game that started it all!
      </p>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3 md:max-w-4xl md:mx-auto">
        <CharacterCard
          name="Tom Nook"
          imgSrc="/tn.jpg"
          description="Tom Nook is a raccoon character who runs the local store. He is a staple in the series, appearing in every Animal Crossing game."
        />
        <CharacterCard
          name="Blathers"
          imgSrc="/blathers.jpg"
          description="Blathers is an owl character who runs the local museum. He is passionate about collecting and educating players about various specimens."
        />
        <CharacterCard
          name="KK Slider"
          imgSrc="/kks.jpg"
          description="KK Slider is a dog character who is a traveling musician. He plays music in town every Saturday night."
        />
      </div>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg mt-12">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Check
              </th>
              <th scope="col" className="px-6 py-3">
                Name
              </th>
              <th scope="col" className="px-6 py-3">
                Image
              </th>
              <th scope="col" className="px-6 py-3">
                Type
              </th>
              <th scope="col" className="px-6 py-3">
                Location
              </th>
              <th scope="col" className="px-6 py-3">
                Selling Price
              </th>
              <th scope="col" className="px-6 py-3">
                Active Hours
              </th>
              <th scope="col" className="px-6 py-3">
                Seasonality
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
              <td className="px-6 py-4">
                <input type="checkbox" />
              </td>
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                Critter/Fossil Name
              </th>
              <td className="px-6 py-4">Image Here</td>
              <td className="px-6 py-4">Type Here</td>
              <td className="px-6 py-4">Location Here</td>
              <td className="px-6 py-4">Selling Price Here</td>
              <td className="px-6 py-4">Active Hours Here</td>
              <td className="px-6 py-4">Seasonality Here</td>
            </tr>
            {/* Repeat <tr> for each critter/fossil */}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ACGC;
