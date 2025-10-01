type SelectedInfoBoxProps = {
  label: string;
  selectedDay: string | null;
  selectedHour?: string | null;
  className?: string;
};

export default function SelectedInfoBox({
  label,
  selectedDay,
  selectedHour,
  className = "mb-4",
}: SelectedInfoBoxProps) {
  return (
    <div className={`bg-[rgba(0,0,0,0.33)] px-6 py-3 rounded-xl text-white text-center font-raleway text-base leading-[24px] ${className}`}>
      <div className="font-semibold">{label}</div>
      <div className="font-extrabold">
        {selectedDay &&
          (() => {
            const [day, month, year] = selectedDay.split(".");
            const date = new Date(
              parseInt(year),
              parseInt(month) - 1,
              parseInt(day)
            );
            const dayName = date.toLocaleDateString("sl-SI", {
              weekday: "long",
            });
            return `${dayName.charAt(0).toUpperCase() + dayName.slice(1)}, ${selectedDay}`;
          })()}
        {selectedHour && ` ob ${selectedHour}`}
      </div>
    </div>
  );
}

