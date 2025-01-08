import { generateAnchorLink } from "@/helpers/general";

type CheckboxProps = {
  label: string;
  required: boolean;
  content: string;
  title: string;
};

export default function Checkbox({ label, required }: CheckboxProps) {
  return (
    <div className="flex items-center gap-2">
      <input
        name={generateAnchorLink(label)}
        id={generateAnchorLink(label)}
        type="checkbox"
        required={required}
        className=" rounded-sm"
      />
      <label htmlFor={generateAnchorLink(label)}>
        <div
          dangerouslySetInnerHTML={{ __html: label }}
          className="text-white text-sm leading-[1.4]"
        />
      </label>
    </div>
  );
}