import { generateAnchorLink } from "@/helpers/general";
import { useEffect, useState } from "react";

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
  const [checkedCount, setCheckedCount] = useState(0);

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCheckedCount((prev) => (e.target.checked ? prev + 1 : prev - 1));
  };

  useEffect(() => {
    const inputs = document.getElementsByName(`${generateAnchorLink(label)}[]`);
    inputs.forEach((input) => {
      (input as HTMLInputElement).setCustomValidity(
        required && checkedCount === 0
          ? "Please select at least one option"
          : ""
      );
    });
  }, [checkedCount, required, label]);

  return (
    <div className="bg-black/30 lg:bg-transparent rounded-xl p-4 lg:p-0 lg:pb-4">
      <div
        dangerouslySetInnerHTML={{ __html: label }}
        className="text-white px-0 lg:px-4 text-sm leading-[1.4]"
      />
      <div className="flex flex-col mt-2 gap-2">
        {options.map((option, i) => (
          <div key={i} className="flex items-center gap-2">
            <input
              name={`${generateAnchorLink(label)}[]`}
              value={option}
              id={generateAnchorLink(option)}
              type="checkbox"
              className="rounded  checked:bg-green-500 checked:hover:bg-green-500 checked:border-transparent"
              onChange={handleCheckboxChange}
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
