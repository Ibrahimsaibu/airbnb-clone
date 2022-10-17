/* eslint-disable jsx-a11y/alt-text */
import Image from "next/image";

function SmallCard({ img, location, distance }) {
  return (
    <div className="flex items-center  cursor-pointer hover:bg-gray-100 hover:scale-105  transition transform duration-200 rounded-xl  space-x-4 m-2 mt-5">
      <div className="relative h-16 w-16 ">
        <Image src={img} layout="fill" className="rounded-lg" />
      </div>
      <div>
        <h2>{location}</h2>
        <h2 className="text-gray-500">{distance}</h2>
      </div>
    </div>
  );
}

export default SmallCard;
