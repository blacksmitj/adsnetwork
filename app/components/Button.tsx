"use client";

import { BeatLoader } from "react-spinners";

interface ButtonProps {
  label: string;
  outline?: boolean;
  full?: boolean;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  label,
  outline,
  full,
  onClick,
  disabled,
}) => {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className={`px-4 py-3 font-semibold rounded-md duration-300 min-w-[150px]
      ${full ? "w-full" : "w-fit"}
      ${
        outline
          ? "border-[2px] border-oren text-oren bg-oren/10 hover:bg-oren hover:text-white "
          : "bg-gradient-to-tr from-pink to-oren text-white hover:bg-gradient-to-tr hover:from-oren hover:to-oren transition-all"
      }
      `}
    >
      {disabled ? <BeatLoader size={8} color="white" /> : label}
    </button>
  );
};

export default Button;
