import Image from "next/image";
import Testimonials from "./Testimonials";

const page = () => {
  return (
    <div className=" min-h-[92vh]  bg-white text-black">
      <div className="relative min-h-[92vh] w-full items-center justify-center md:flex">
        <Testimonials />
        <Image
          src="/frontend-projects/09/pattern-curve.svg"
          width={500}
          height={100}
          alt="curve pattern"
          className="absolute bottom-0 left-0 md:w-[800px] xl:w-[1000px]"
        />
      </div>
    </div>
  );
};

export default page;
