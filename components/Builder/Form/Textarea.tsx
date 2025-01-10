import { generateAnchorLink } from "@/helpers/general";

type TextAreaProps = {
  label: string;
  required: boolean;
  errorMessage: string;
};

export default function TextArea({
  label,
  required,
  errorMessage,
}: TextAreaProps) {
  return (
    <div className="flex flex-col">
      <label
        htmlFor={generateAnchorLink(label)}
        className="text-sm font-medium px-4"
      >
        {label}
      </label>
      <textarea
        id={generateAnchorLink(label)}
        name={generateAnchorLink(label)}
        required={required}
        rows={3}
        className=" rounded-xl px-4 py-3 mt-1 text-black border border-transparent invalid:border-[#FF6161]"
        placeholder=""
      />
      <span className="mt-1 leading-snug  invisible text-sm font-medium text-[#FF6161] peer-invalid:visible">
        {errorMessage}
      </span>
    </div>
  );
}
