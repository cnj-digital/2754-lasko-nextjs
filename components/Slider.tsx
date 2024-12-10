"use client";
import React from "react";
import "keen-slider/keen-slider.min.css";
import { Children } from "react";
import { KeenSliderOptions, useKeenSlider } from "keen-slider/react";
import cx from "classnames";

type SliderProps = {
  children: React.ReactNode;
  options: KeenSliderOptions;
  className?: string;
};

export default function Slider({ children, options, className }: SliderProps) {
  const [sliderRef, instanceRef] = useKeenSlider(options);

  return (
    <div
      ref={sliderRef}
      className={cx("keen-slider", className)}
      style={{ overflow: "visible" }}
    >
      {Children.map(children, (child, i) => {
        return (
          <div
            key={i}
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
