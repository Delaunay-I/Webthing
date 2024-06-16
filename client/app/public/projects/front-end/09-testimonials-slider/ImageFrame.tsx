import { data } from "./constants";
import Image from "next/image";

interface props {
  current: number;
  setCurrent: (value: number) => void;
}

const ImageFrame = ({ current, setCurrent }: props) => {
  const length = data.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };
  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  let xlImg = "xl:w-[600px] xl:h-[600px]";
  let mdImg = "md:w-[350px] md:h-[350px]";


  return (
    <div className=" bg-testemonial-image bg-no-repeat bg-contain sm:p-12 xl:p-24"> 
      <div className={`relative ${mdImg} ${xlImg}`}>
        {data.map((item, index) => {
          if (current === index) {
            return (
              <Image
                key={index}
                src={item.pic}
                width={400}
                height={100}
                alt="profile picture"
                className={`${mdImg} ${xlImg} rounded-lg object-cover object-top shadow-xl`}
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

export default ImageFrame;
