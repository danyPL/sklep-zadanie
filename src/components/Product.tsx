"use client"
import type { ProductT } from "@/lib/types";
import Image from "next/image";

export const Product = ({ id, name, src, price }: ProductT) => {
  return (
    <div className="Card border flex flex-col justify-around gap-2 text-center p-3 rounded-lg shadow-md">
      <h4 className="font-bold text-lg">{name}</h4>
      <p className="text-gray-700">{price} zł</p>
      <div className="flex justify-center align-middle">
              <Image width={150} height={230} src={src} alt={`${name}-${id}`} />
      </div>
      <a
        href={src.toString()}
        download
        className="bg-blue-600 text-white font-bold px-3 py-1 rounded-md hover:bg-blue-700"
      >
        Kup
      </a>
    </div>
  );
};