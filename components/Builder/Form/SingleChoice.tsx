import { generateAnchorLink } from "@/helpers/general";

type SingleChoiceProps = {
  label: string;
  required: boolean;
  options: string[];
  variant: {
    value: "radio" | "select";
  };
};

export default function SingleChoice({
  label,
  required,
  options,
  variant,
}: SingleChoiceProps) {
  return (
    <div className="flex flex-col">
      <div
        dangerouslySetInnerHTML={{ __html: label }}
        className="text-white text-sm leading-[1.4]"
      />
      {variant.value === "radio" ? (
        <div className="flex items-center gap-2">
          {options.map((option, i) => (
            <div key={i} className="flex items-center gap-2">
              <input
                name={generateAnchorLink(label)}
                id={generateAnchorLink(option)}
                type="radio"
                required={required}
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
      ) : (
        <select
          required={required}
          className="rounded-xl px-4 py-3 mt-1 text-black border border-transparent"
        >
          {options.map((option, i) => (
            <option key={i} value={option}>
              {option}
            </option>
          ))}
        </select>
      )}
    </div>
  );
}
