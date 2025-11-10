import { generateAnchorLink } from "@/helpers/general";

type CheckboxProps = {
  label: string;
  required: boolean;
  content: string;
  title: string;
  checked?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
  classNameInput?: string;
  errorMessage?: string;
  showError?: boolean;
};

export default function Checkbox({ label, required, title, checked, onChange, className, classNameInput, errorMessage, showError = false }: CheckboxProps) {
  const shouldShowError = showError && required && !checked;
  
  return (
    <div className="flex flex-col relative">
      <div className={`flex items-center gap-2 bg-black/30 lg:bg-transparent rounded-xl p-4 lg:p-0 ${className}`}>
        <input
          name={generateAnchorLink(title)}
          id={generateAnchorLink(title)}
          type="checkbox"
          required={required}
          checked={checked}
          onChange={onChange}
          className={`rounded  checked:bg-green-500 checked:hover:bg-green-500 checked:border-transparent ${classNameInput}`}
        />
        <label htmlFor={generateAnchorLink(title)}>
          <div
            dangerouslySetInnerHTML={{ __html: label }}
            className="text-white text-sm leading-[1.4]"
          />
        </label>
      </div>
      {shouldShowError && errorMessage && (
        <span className="absolute -bottom-[1.1rem] left-[1.6rem] leading-snug text-sm font-medium text-[#FF6161]">
          {errorMessage}
        </span>
      )}
    </div>
  );
}
