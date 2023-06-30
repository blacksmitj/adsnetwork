"use client";

import { BsCheck2Square } from "react-icons/bs";
import Button from "./Button";
import Image from "next/image";

interface ProductProps {
  featured?: boolean;
  title: string;
  price: string;
  speed: string;
  points: string[];
}

const Product: React.FC<ProductProps> = ({
  featured,
  title,
  price,
  speed,
  points,
}) => {
  const onSubmit = () => {
    window.open("https://wa.me/" + process.env.NEXT_PUBLIC_WA, "_blank");
  };
  return (
    <div
      className={`flex flex-col relative bg-white min-w-[320px] shadow-2xl shadow-oren/20 rounded-xl overflow-hidden mb-12 snap-center
        ${
          featured
            ? "bg-gradient-to-tr from-biru from-40% to-pink"
            : "bg-white scale-90"
        }
      `}
    >
      <div
        className={`absolute -right-9 rounded-t-lg top-1/2 items-center -rotate-90
          ${featured ? "bg-white" : "bg-gradient-to-tr from-oren to-kuning"}
        `}
      >
        <p
          className={`font-extrabold px-4 py-2 text-xl
            ${featured ? "text-biru" : "text-white"}
         `}
        >
          {speed}
        </p>
      </div>
      <div
        className={`h-[150px] justify-end relative overflow-hidden
      `}
      >
        <h1 className="absolute bottom-0 font-bold text-2xl p-6 text-white">
          {title}
        </h1>
        <Image
          height={160}
          width={320}
          src={`/images/foto${title}.png`}
          alt={title}
          style={{ height: "auto" }}
          className="bg-cover"
        />
      </div>
      <div className="p-6 flex-col gap-8 flex">
        <ul
          className={`flex flex-col gap-8 text-sm
            ${featured ? "text-white" : "text-hitam"}
        
        `}
        >
          {points.map((point, index) => (
            <li key={index} className="flex gap-2">
              <BsCheck2Square size={20} className="text-oren" />
              {point}
            </li>
          ))}
        </ul>
        <p
          className={`font-extrabold text-2xl
            ${featured ? "text-white" : "text-oren"}
          `}
        >
          {price} <span className="text-xs font-normal">/bulan</span>
        </p>
        <Button
          label="Pilih Produk"
          onClick={onSubmit}
          full
          outline={!featured}
        />
      </div>
    </div>
  );
};

export default Product;
