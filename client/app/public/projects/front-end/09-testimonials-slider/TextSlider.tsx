import { data, DataItem } from "./constants";

interface props {
  current: number;
}

const TextSlider = ({ current }: props) => {

  if (!Array.isArray(data) || data.length <= 0) return null;

  return (
    <div className="relative flex w-[400px] items-center justify-center">
      {data.map((item: DataItem, index) => {
        if (index === current) {
          return (
            <div key={index}>
              <div className="text-xl">&#8220; {item.body} &rdquo;</div>
              <div className="mt-5 flex gap-2">
                <div className="font-bold">{item.name}</div>
                <div className="text-neutral-400">{item.title}</div>
              </div>
            </div>
          );
        }
        return null;
      })}
    </div>
  );
};

export default TextSlider;
