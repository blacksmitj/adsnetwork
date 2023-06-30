"use client";

interface MenuItemProps {
  onClick: () => void;
  label: string;
  active: boolean;
}

const MenuItem: React.FC<MenuItemProps> = ({ onClick, label, active }) => {
  return (
    <div
      onClick={onClick}
      className={`px-4 py-3 text-sm font-semibold text-white hover:bg-white rounded-md hover:text-oren cursor-pointer duration-300
      ${active ? "bg-biru" : ""}
      `}
    >
      {label}
    </div>
  );
};

export default MenuItem;
