import { generateAnchorLink } from "@/helpers/general";

type InputProps = {
  label: string;
  required: boolean;
  variant_input: {
    value: "text" | "email" | "tel" | "number" | "password";
  };
  errorMessage?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  showError?: boolean;
  className?: string;
  classNameContainer?: string;
};

export default function Input({
  label,
  required,
  variant_input,
  errorMessage,
  value,
  onChange,
  showError = false,
  className,
  classNameContainer,
}: InputProps) {
  const isInvalid = required && (!value || value.trim() === "");
  const isEmailInvalid = variant_input.value === "email" && value && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
  const shouldShowError = showError && (isInvalid || isEmailInvalid);

  return (
    <div className={`flex flex-col ${classNameContainer}`}>
      <label
        htmlFor={generateAnchorLink(label)}
        className="text-sm font-medium text-white px-4 "
      >
        {label} <span className={`ml-2 mt-1 leading-snug text-sm font-medium text-[#FF6161] ${shouldShowError ? "visible" : "invisible"} peer-[&:not(:placeholder-shown):not(:focus):invalid]:visible`}>
        {errorMessage}
      </span>
      </label>
      <input
        id={generateAnchorLink(label)}
        name={generateAnchorLink(label)}
        type={variant_input.value}
        required={required}
        placeholder=" "
        value={value}
        onChange={onChange}
        className={`peer rounded-xl px-4 py-3 mt-1 text-black border ${className} ${
          shouldShowError ? "border-[#FF6161]" : "border-transparent"
        } font-semibold text-lg invalid:[&:not(:placeholder-shown):not(:focus)]:border-[#FF6161] focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent autofill:!bg-white autofill:!shadow-[inset_0_0_0px_1000px_rgb(255,255,255)] autofill:!text-black`}
      />
    </div>
  );
}
