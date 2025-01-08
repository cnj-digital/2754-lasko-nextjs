import { generateAnchorLink } from "@/helpers/general";

type MultipleChoiceProps = {
  label: string;
  required: boolean;
  options: string[];
};

export default function MultipleChoice({
  label,
  required,
  options,
}: MultipleChoiceProps) {
  return (
    <div>
      <div
        dangerouslySetInnerHTML={{ __html: label }}
        className="text-white text-sm leading-[1.4]"
      />
      <div className="flex flex-col mt-2 gap-2">
        {options.map((option, i) => (
          <div key={i} className="flex items-center gap-2">
            <input
              name={generateAnchorLink(label)}
              id={generateAnchorLink(option)}
              type="checkbox"
              required={required}
              className="rounded-sm  checked:bg-green-500 checked:hover:bg-green-500 checked:border-transparent"
            />
            <label htmlFor={generateAnchorLink(option)}>
              <div
                dangerouslySetInnerHTML={{ __html: option }}
                className="text-white text-sm leading-[1.4]"
              />
            </label>
          </div>
        ))}
      </div>
    </div>
  );
}
