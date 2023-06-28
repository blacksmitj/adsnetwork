import Image from "next/image";

interface PartnerProps {
  title: string;
  url: string;
  description: string;
}

const Partner: React.FC<PartnerProps> = ({ title, url, description }) => {
  return (
    <div className="relative flex flex-col w-full h-full bg-white shadow-2xl shadow-oren/20 rounded-xl overflow-hidden snap-center px-8 py-6 gap-4">
      <div className="h-[130px] flex flex-col justify-center">
        <Image
          alt={url}
          src={`/images/${url}`}
          width={250}
          height={130}
          className="grayscale-[30%]"
        />
      </div>
      <h1 className="font-bold text-2xl">{title}</h1>
      <div className="h-fit">
        <p className="text-base leading-relaxed">{description}</p>
      </div>
    </div>
  );
};

export default Partner;
