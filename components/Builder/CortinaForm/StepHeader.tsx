type StepHeaderProps = {
  title: string;
  description: string;
  descriptionMargin?: string;
};

export default function StepHeader({ title, description, descriptionMargin = "mb-4" }: StepHeaderProps) {
  return (
    <>
      <div className="text-white text-center font-neutraface text-[22px] font-normal leading-[24px] uppercase mb-5">
        {title}
      </div>
      <div className={`text-white text-center font-raleway text-lg font-semibold leading-[24px] ${descriptionMargin}`}>
        {description}
      </div>
    </>
  );
}

