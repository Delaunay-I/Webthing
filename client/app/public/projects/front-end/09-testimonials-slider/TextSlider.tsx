import Image from "next/image";
import { data, DataItem } from "./constants";

interface props {
  current: number;
}

const TextSlider = ({ current }: props) => {

  if (!Array.isArray(data) || data.length <= 0) return null;

  let xlTextSize = "xl:text-4xl xl:leading-10";
  let smTextSize = "sm:text-2xl sm:leading-7";
  return (
    <div className="relative z-10 md:min-w-[400px] xl:min-w-[500px] flex items-center justify-center">
      {data.map((item: DataItem, index) => {
        if (index === current) {
          return (
            <div key={index} className="absolute sm:w-[450px] sm:left-12 xl:w-[650px] xl:left-4">
              <div className={`${smTextSize} ${xlTextSize} font-thin text-[#202046]`}>&#8220; {item.body} &rdquo;</div>
              <div className="mt-5 flex gap-2">
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
        alt="curve pattern"
        className="absolute -top-[195px] left-[120px] xl:w-[120px]"
      />
    </div>
  );
};

export default TextSlider;
