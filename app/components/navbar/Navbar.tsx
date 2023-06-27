"use client";

import Container from "../Container";
import Logo from "./Logo";
import UserMenu from "./UserMenu";
import { useState } from "react";

const Navbar = () => {
  const [isChange, setIsChange] = useState(false);
  const changeColor = () => {
    if (window.scrollY >= 200) {
      setIsChange(true);
    } else {
      setIsChange(false);
    }
  };

  if (typeof window !== "undefined") {
    // Client-side-only code
    window.addEventListener("scroll", changeColor);
  }

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
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Navbar;
