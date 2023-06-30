"use client";

import { UseFormRegister, FieldValues, FieldErrors } from "react-hook-form";

interface TextareaProps {
  id: string;
  label: string;
  disabled?: boolean;
  required?: boolean;
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors;
  placeholder: string;
}

const Textarea: React.FC<TextareaProps> = ({
  id,
  label,
  disabled = false,
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
      <div>
        <textarea
          id={id}
          disabled={disabled}
          rows={4}
          {...register(id, {
            required: {
              value: required || false,
              message: "Tulis Pesan anda",
            },
            minLength: {
              value: 20,
              message: "Pesan minimal 20 Character",
            },
          })}
          className={`bg-white w-full block rounded-md py-2 px-4 text-sm font-medium border-[2px] text-biru
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
            {errors[id]?.message?.toString()}
          </p>
        )}
      </div>
    </div>
  );
};

export default Textarea;
