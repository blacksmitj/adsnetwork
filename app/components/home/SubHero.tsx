import Image from "next/image";
import React from "react";
import Heading from "../Heading";
import Container from "../Container";

const SubHero = () => {
  return (
    <Container>
      <div className="flex lg:flex-row flex-col items-start lg:items-center gap-8 w-full">
        <div className="flex items-center w-fit min-w-fit justify-center overflow-hidden md:pl-20 pl-8">
          <Image
            alt="person-02"
            height={507}
            width={266}
            className="object-contain md:w-[266px] w-[120px]"
            src="/images/people-02.png"
          />
          <div className="absolute h-[130px] md:h-[350px] mr-[10px] bg-gradient-to-tr from-biru to-pink rounded-full aspect-square -z-[1]"></div>
          <div className="absolute mb-[100px] ml-[10px] h-[130px] md:h-[350px] bg-gradient-to-tr from-oren to-kuning rounded-full aspect-square -z-[2]"></div>
        </div>
        <div className="md:px-8 lg:px-16 px-2">
          <Heading
            title="Kemudahan Untuk Aktifitas Bisnis"
            subtitle="Bergerak dibidang Teknologi Informasi dan Layanan internet, kami ingin kemudahan bagi para pelanggan dalam bekerja dan menjalankan seluruh aktifitas bisnis."
          />
        </div>
      </div>
    </Container>
  );
};

export default SubHero;
