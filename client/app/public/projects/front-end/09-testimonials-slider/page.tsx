import Image from "next/image";
import Testimonials from "./Testimonials";

const page = () => {
  return (
    <div className="flex min-h-[92vh] items-center justify-center bg-white text-black">
      <div className="relative w-full min-h-[92vh]">

      <Testimonials />
      <Image
        src="/frontend-projects/09/pattern-curve.svg"
        width={500}
        height={100}
        alt="curve pattern"
        className="absolute bottom-0 left-0 xl:w-[1000px]"
      />
      </div>
    </div>
  );
};

export default page;
