type StepIndicatorProps = {
  currentStep: number;
};

export default function StepIndicator({ currentStep }: StepIndicatorProps) {
  return (
    <>
      <div
        className={`w-2.5 h-2.5 rounded-full ${
          currentStep >= 1 ? "bg-green-500" : "bg-[rgba(0,0,0,0.33)]"
        }`}
      ></div>
      <div
        className={`w-2.5 h-2.5 rounded-full ${
          currentStep >= 2 ? "bg-green-500" : "bg-[rgba(0,0,0,0.33)]"
        }`}
      ></div>
      <div
        className={`w-2.5 h-2.5 rounded-full ${
          currentStep >= 3 ? "bg-green-500" : "bg-[rgba(0,0,0,0.33)]"
        }`}
      ></div>
    </>
  );
}

