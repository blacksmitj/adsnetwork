"use client";

import { useRouter } from "next/navigation";
import { useCallback, useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import MenuItem from "./MenuItem";

const UserMenu = () => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = useCallback(() => {
    setIsOpen((value) => !value);
  }, []);

  return (
    <>
      <div
        onClick={() => setIsOpen(false)}
        className={`h-screen fixed bg-black/20 inset-0 max-h-screen z-[0] transition-opacity duration-300
          ${isOpen ? "block" : "hidden"}
        `}
      ></div>
      <div className="relative">
        <div className="flex flex-row items-center gap-6">
          <button
            onClick={() => router.push("/services")}
            className="hidden md:block text-xs font-semibold text-white hover:text-oren cursor-pointer transition border-b-[2px] border-oren py-1"
          >
            PRODUK & LAYANAN
          </button>
          <button className="hidden md:block text-xs font-semibold text-white hover:text-oren cursor-pointer transition py-1">
            PARTNER & CLIENT
          </button>
          <button className="hidden md:block text-xs font-semibold text-white hover:text-oren cursor-pointer transition">
            KONTAK
          </button>
          <button
            onClick={toggleOpen}
            className="text-white bg-gradient-to-tr from-pink to-oren py-1 px-2 rounded-md block md:hidden"
          >
            <AiOutlineMenu size={24} />
          </button>
        </div>

        {/* {isOpen && ( */}

        <div
          className={`absolute rounded-md shadow-2xl shadow-oren/20 bg-gradient-to-tr from-pink to-oren w-[90vw] text-sm right-0 top-14 overflow-hidden border-[1px] border-oren/20 translate transition duration-300
        ${isOpen ? "translate-y-0" : "-translate-y-80"}
        ${isOpen ? "opacity-100" : "opacity-0"}
        `}
        >
          <div className="flex flex-col p-4 w-full">
            <MenuItem
              onClick={() => router.push("/services")}
              label="PRODUK & LAYANAN"
            />
            <MenuItem onClick={() => {}} label="PARTNER & CLIENT" />
            <MenuItem onClick={() => {}} label="KONTAK" />
          </div>
        </div>
        {/* )} */}
      </div>
    </>
  );
};

export default UserMenu;
