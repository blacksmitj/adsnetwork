"use client";

import { UseFormRegister, FieldValues, FieldErrors } from "react-hook-form";

interface InputProps {
  id: string;
  label: string;
  type?: string;
  disabled?: boolean;
  required?: boolean;
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors;
  placeholder: string;
}

const Input: React.FC<InputProps> = ({
  id,
  label,
  type = "text",
  disabled,
  required,
  register,
  errors,
  placeholder,
}) => {
  const validationProps =
    type === "email"
      ? {
          pattern: {
            value:
              /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            message: "Format email salah",
          },
          required: {
            value: required || false,
            message: id + " dibutuhkan!",
          },
        }
      : {
          required: {
            value: required || false,
            message: id + " dibutuhkan!",
          },
        };

  return (
    <div className="mb-1">
      <label htmlFor={id} className="text-biru font-semibold block mb-1 ml-1">
        {label}
      </label>
      <div>
        <input
          id={id}
          disabled={disabled}
          {...register(id, validationProps)}
          type={type}
          className={`bg-white w-full block rounded-md py-2 px-4 text-sm font-medium border-[2px] text-biru disabled:bg-biru/20 disabled:text-biru/50
          ${
            errors[id]
              ? "border-oren focus:outline-oren"
              : "border-biru/20 focus:outline-birumuda"
          }
          `}
          placeholder={placeholder}
        />
        {errors[id] && (
          <p className="text-oren text-sm py-1 ml-1">
            {errors[id]?.message?.toString().charAt(0).toUpperCase() +
              "" +
              errors[id]?.message?.toString().slice(1)}
          </p>
        )}
      </div>
    </div>
  );
};

export default Input;
