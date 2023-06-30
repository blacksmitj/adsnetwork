"use client";

interface HeadingProps {
  title: string;
  subtitle?: string;
}

const Heading: React.FC<HeadingProps> = ({ title, subtitle }) => {
  return (
    <div className="flex flex-col w-full gap-6">
      <div className="flex flex-col w-fit gap-4">
        <h1 className="md:text-6xl text-3xl font-black bg-gradient-to-tr from-biru to-pink bg-clip-text text-transparent">
          {title}
        </h1>
        <span
          className={`h-2 bg-gradient-to-tr from-oren to-kuning rounded-full w-full`}
        ></span>
      </div>
      {subtitle && (
        <p className="text-hitam leading-relaxed md:text-xl font-light">
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default Heading;
