import { generateAnchorLink } from "@/helpers/general";

type InputProps = {
  label: string;
  required: boolean;
  variant_input: {
    value: "text" | "email" | "tel" | "number";
  };
  errorMessage?: string;
};

export default function Input({
  label,
  required,
  variant_input,
  errorMessage,
}: InputProps) {
  return (
    <div className="flex flex-col">
      <label
        htmlFor={generateAnchorLink(label)}
        className="text-sm font-medium px-4 "
      >
        {label}
      </label>
      <input
        id={generateAnchorLink(label)}
        name={generateAnchorLink(label)}
        type={variant_input.value}
        required={required}
        placeholder=" "
        className="peer rounded-xl px-4 py-3 mt-1 text-black border border-transparent invalid:[&:not(:placeholder-shown):not(:focus)]:border-[#FF6161]"
      />
      <span className="mt-1 leading-snug invisible text-sm font-medium text-[#FF6161] peer-[&:not(:placeholder-shown):not(:focus):invalid]:visible">
        {errorMessage}
      </span>
    </div>
  );
}
