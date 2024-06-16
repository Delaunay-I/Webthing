"use client";
import { useState } from "react";

import TextSlider from "./TextSlider";
import ImageFrame from "./ImageFrame";

const Testimonials = () => {
  const [current, setCurrent] = useState(0);

  return (
    <div
      className={`flex h-full items-center justify-center overflow-hidden sm:p-4 xl:p-12`}
    >
      <TextSlider current={current} />
      <ImageFrame current={current} setCurrent={setCurrent} />
    </div>
  );
};

export default Testimonials;
