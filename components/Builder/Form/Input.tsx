import { generateAnchorLink } from "@/helpers/general";

type InputProps = {
  label: string;
  required: boolean;
  variant_input: {
    value: "text" | "email" | "tel" | "number";
  };
};

export default function Input({ label, required, variant_input }: InputProps) {
  return (
    <div className="flex flex-col">
      <label
        htmlFor={generateAnchorLink(label)}
        className="text-sm font-medium px-4"
      >
        {label}
      </label>
      <input
        id={generateAnchorLink(label)}
        name={generateAnchorLink(label)}
        type={variant_input.value}
        required={required}
        className=" rounded-xl px-4 py-3 mt-1 text-black border border-transparent"
      />
    </div>
  );
}
