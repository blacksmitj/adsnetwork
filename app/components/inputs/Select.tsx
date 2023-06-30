"use client";

import { UseFormRegister, FieldValues, FieldErrors } from "react-hook-form";

interface SelectProps {
  id: string;
  label: string;
  disabled?: boolean;
  required?: boolean;
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors;
  placeholder: string;
}

const Select: React.FC<SelectProps> = ({
  id,
  label,
  disabled,
  required,
  register,
  errors,
  placeholder,
}) => {
  return (
    <div className="mb-1">
      <label htmlFor={id} className="text-biru font-semibold block mb-1 ml-1">
        {label}
      </label>
      <div className="relative">
        <select
          id={id}
          disabled={disabled}
          {...register(id, {
            required: {
              value: required || false,
              message: "Pilih subject pesan",
            },
          })}
          className={`bg-white w-full block rounded-md py-2 px-4 text-sm font-medium border-[2px] text-biru disabled:bg-biru/20 disabled:text-biru/50
          ${
            errors[id]
              ? "border-oren focus:outline-oren"
              : "border-biru/20 focus:outline-birumuda"
          }
          `}
        >
          <option value="">{placeholder}</option>
          <option value="Internet Broadband">Internet Broadband</option>
          <option value="Internet Dedicated">Internet Dedicated</option>
          <option value="IP CCTV">IP CCTV</option>
          <option value="Web Development">Web Development</option>
          <option value="Data Center">Data Center</option>
          <option value="IT Konsultan">IT Konsultan</option>
        </select>
        {errors[id] && (
          <p className="text-oren text-sm py-1 ml-1">
            {errors[id]?.message?.toString()}
          </p>
        )}
      </div>
    </div>
  );
};

export default Select;
