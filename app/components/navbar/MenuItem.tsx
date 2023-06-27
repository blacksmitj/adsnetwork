"use client";

interface MenuItemProps {
  onClick: () => void;
  label: string;
}

const MenuItem: React.FC<MenuItemProps> = ({ onClick, label }) => {
  return (
    <div
      onClick={onClick}
      className="px-4 py-3 text-sm font-semibold text-white hover:bg-white rounded-md hover:text-oren cursor-pointer duration-300"
    >
      {label}
    </div>
  );
};

export default MenuItem;
