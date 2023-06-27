import { IconType } from "react-icons";

interface ServicerProps {
  title: string;
  color: string;
  icon: IconType;
  description: string;
}

const Service: React.FC<ServicerProps> = ({
  title,
  color,
  icon: Icon,
  description,
}) => {
  return (
    <div className="relative flex-none w-[300px] h-full bg-white shadow-2xl shadow-oren/20 rounded-xl overflow-hidden mb-12 snap-center">
      <div
        className={`h-[200px] flex flex-col justify-end bg-gradient-to-tr from-pink to-${color} p-8`}
      >
        <Icon
          size={160}
          className="text-white absolute -right-10 -top-10 opacity-20"
        ></Icon>
        <h1 className="font-bold text-2xl text-white ">{title}</h1>
      </div>
      <div className="h-[180px] px-8 py-6">
        <p className="text-sm leading-relaxed">{description}</p>
      </div>
    </div>
  );
};

export default Service;
