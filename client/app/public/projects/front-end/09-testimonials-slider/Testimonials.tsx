"use client";
import { useState } from "react";

import Image from "next/image";
import TextSlider from "./TextSlider";

import { data } from "./constants";

const Testimonials = () => {
  const [current, setCurrent] = useState(0);
  const length = data.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };
  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  return (
    <div className="my-[200px] flex items-center justify-center bg-slate-200">
      <TextSlider current={current} />
      <div className="relative">
        {data.map((item, index) => {
          if (current === index) {
            return (
              <Image
                src={item.pic}
                width={400}
                height={100}
                alt="profile picture"
                className="w-[500px] h-[500px] object-cover object-top shadow-xl"
              />
            );
          }
          return null;
        })}

        <div className="absolute bottom-[-14px] left-[40px] flex justify-between gap-8 rounded-full bg-white px-4 py-3">
          <Image
            src="/frontend-projects/09/icon-prev.svg"
            width={10}
            height={10}
            alt="arrow previous"
            className=" h-3 w-[10px] cursor-pointer"
            onClick={prevSlide}
          />

          <Image
            src="/frontend-projects/09/icon-next.svg"
            width={10}
            height={10}
            alt="arrow next"
            className="h-3 w-[10px] cursor-pointer"
            onClick={nextSlide}
          />
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
