import Image from "next/image";
import { data, DataItem } from "./constants";

interface props {
  current: number;
}

const TextSlider = ({ current }: props) => {
  if (!Array.isArray(data) || data.length <= 0) return null;

  let xlTextSize = "xl:text-4xl xl:leading-10";
  let smTextSize = "text-2xl leading-7";
  return (
    <div className="relative z-10 flex w-[500px] items-center justify-center md:w-[400px] md:min-w-[400px] xl:min-w-[500px]">
      {data.map((item: DataItem, index) => {
        if (index === current) {
          return (
            <div
              key={index}
              className="px-10 text-center md:absolute md:left-24 md:w-[450px] md:p-0 md:text-left xl:left-4 xl:w-[650px]"
            >
              <div
                className={`${smTextSize} ${xlTextSize} font-thin text-[#202046]`}
              >
                &#8220; {item.body} &rdquo;
              </div>
              <div className="mt-5 flex flex-col gap-2 md:flex-row">
                <div className="font-bold">{item.name}</div>
                <div className="text-neutral-400">{item.title}</div>
              </div>
            </div>
          );
        }
        return null;
      })}
      <Image
        src="/frontend-projects/09/pattern-quotes.svg"
        width={500}
        height={100}
        alt="quotes image"
        className="absolute -top-8 w-[80px] md:-top-[130px] md:left-[130px]  xl:-top-[195px] xl:left-[120px] xl:w-[120px]"
      />
    </div>
  );
};

export default TextSlider;
