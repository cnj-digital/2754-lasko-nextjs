type TextAreaProps = {
  label: string;
  required: boolean;
};

export default function TextArea({ label, required }: TextAreaProps) {
  return (
    <div className="flex flex-col">
      <label className="text-sm font-medium px-4">{label}</label>
      <textarea
        id="about"
        name="about"
        required={required}
        rows={3}
        className=" rounded-xl px-4 py-3 mt-1 text-black border border-transparent"
        placeholder=""
      />
    </div>
  );
}
