interface ButtonProps {
  label: string;
  outline?: boolean;
  full?: boolean;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const Button: React.FC<ButtonProps> = ({ label, outline, full, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-3 font-semibold rounded-md duration-300
      ${full ? "w-full" : "w-fit"}
      ${
        outline
          ? "border-[2px] border-oren text-oren bg-oren/10 hover:bg-oren hover:text-white "
          : "bg-gradient-to-tr from-pink to-oren text-white hover:bg-gradient-to-tr hover:from-oren hover:to-oren transition-all"
      }
      `}
    >
      {label}
    </button>
  );
};

export default Button;
