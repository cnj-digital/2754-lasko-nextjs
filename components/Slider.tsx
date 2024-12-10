import { Children } from "react";
import { KeenSliderOptions, useKeenSlider } from "keen-slider/react";

type SliderProps = {
  children: React.ReactNode;
  options: KeenSliderOptions;
};

export default function Slider({ children, options }: SliderProps) {
  const [sliderRef, instanceRef] = useKeenSlider(options);

  return (
    <div ref={sliderRef}>
      {Children.map(children, (child) => {
        return (
          <div
            className="relative keen-slider__slide h-full"
            style={{ overflow: "visible" }}
          >
            {child}
          </div>
        );
      })}
    </div>
  );
}
