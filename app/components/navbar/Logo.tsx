"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

const Logo = () => {
  const router = useRouter();

  return (
    <Image
      onClick={() => router.push("/")}
      alt="Logo"
      className="block cursor-pointer"
      height={30}
      width={80}
      src="/images/ads-logo.png"
    />
  );
};

export default Logo;
