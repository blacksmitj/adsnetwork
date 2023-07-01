"use client";

import Button from "../Button";
import Container from "../Container";
import Logo from "./Logo";
import UserMenu from "./UserMenu";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [isChange, setIsChange] = useState(false);

  const changeColor = () => {
    if (window.scrollY >= 200) {
      setIsChange(true);
    } else {
      setIsChange(false);
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      // Client-side-only code
      window.addEventListener("scroll", changeColor);
    }
  }, [isChange]);

  const onSubmit = () => {
    window.open("https://wa.me/" + process.env.NEXT_PUBLIC_WA, "_blank");
  };

  return (
    <div
      className={`w-full z-10 top-0 fixed backdrop-blur-lg border-b-[1px] border-white/10 transition-colors duration-300
    ${isChange ? "bg-biru/80" : "bg-white/5"}
    `}
    >
      <div className="md:py-8 py-4">
        <Container>
          <div className="flex flex-row items-center md:justify-start justify-between gap-3 md:gap-8">
            <Logo />
            <UserMenu />
            <div className="flex-1 hidden lg:flex items-end justify-end">
              <Button
                onClick={onSubmit}
                label="Hubungi Sekarang"
                outline
                white
              />
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Navbar;
