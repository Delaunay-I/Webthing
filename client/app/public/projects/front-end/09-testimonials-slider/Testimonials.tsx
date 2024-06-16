"use client";
import { useState } from "react";

import TextSlider from "./TextSlider";
import ImageFrame from "./ImageFrame";

const Testimonials = () => {
  const [current, setCurrent] = useState(0);

  return (
    <div
      className={`flex h-full flex-col-reverse items-center gap-10 overflow-hidden py-12 md:flex-row md:items-center md:justify-center md:gap-0 md:p-4 xl:p-12`}
    >
      <TextSlider current={current} />
      <ImageFrame current={current} setCurrent={setCurrent} />
    </div>
  );
};

export default Testimonials;
