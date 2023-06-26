import Image from "next/image";
import Button from "../Button";

const Hero = () => {
  return (
    <div className="bg-gradient-to-tr from-biru to-pink h-fit">
      <div className="flex lg:flex-row flex-col-reverse lg:items-center h-full md:px-16 px-8 max-w-[1440px] mx-auto pb-24 md:pt-40 pt-24 gap-8">
        <div className="flex flex-col gap-4">
          <h1 className="text-white font-extrabold md:text-7xl text-5xl">
            Internet For Better Life
          </h1>
          <p className="text-white leading-relaxed md:text-lg text-base font-light">
            ADS-net merupakan perusahaan layanan internet yang didukung oleh
            personel yang berpengalaman dengan beragam pilihan paket serta
            layanan yang dapat memberikan kemudahan untuk Anda.
          </p>
          <Button label="Hubungi Kami" />
        </div>
        <div className="flex">
          <Image
            alt="Logo"
            height={570}
            width={423}
            className="min-w-[300ox] max-w-[600px] object-cover animate-wiggle -ml-4"
            src="/images/people-01.png"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
