import Image from "next/image";
import Link from "next/link";

import cat1 from "@public/cat1.png";
import cat2 from "@public/cat2.jpg";
import cat3 from "@public/cat3.jpg";

const page = () => {
  return (
    <section className="pl-[350px] pt-[80px]">
      <div className="bg-white fixed inset-x-0 top-[82px] h-[80px] flex items-center justify-between px-16">
        <div className="flex items-center">
          <Image src={cat1} className="w-12 h-12 rounded-full mr-3" />
          <p className="text-black text-lg font-bold">Oliver Cat</p>
        </div>

        <div>
          <button className="bg-blue-500 px-3 py-[6px] rounded text-white mr-2 font-bold">
            Add Friend
          </button>
          <button className="bg-gray-200 px-4 py-[6px] rounded text-black font-bold">
            Message
          </button>
        </div>
      </div>

      <div className="bg-zinc-800 fixed inset-y-0 left-0 top-[162px] w-[350px] flex">
        <div className="pt-5 px-4 flex flex-col space-y-4 bg-zinc-900 basis-1/3">
          <Image src={cat1} className="w-14 h-14 rounded-full mr-3" />
          <Image
            src={cat2}
            className="w-14 h-14 rounded-full mr-3 object-cover object-top"
          />
          <Image
            src={cat3}
            className="w-14 h-14 rounded-full mr-3 object-cover object-top"
          />
        </div>
        <div className="basis-full px-4 py-5">
          <div className="flex items-center justify-between">
            <p className="font-semibold">INFO</p>
            <p className="text-secondary font-bold text-2xl cursor-pointer">+</p>
          </div>
          <p className="text-secondary my-3 text-lg cursor-pointer"># new-videos</p>
          <p className="text-secondary mb-3 text-lg cursor-pointer"># updates</p>
          <p className="text-secondary mb-3 text-lg cursor-pointer"># faq</p>
        </div>
      </div>

      <p>Extra text comes here...</p>
      <button className="bg-amber-500 rounded px-3 py-2 text-black mt-4"><Link href="/public/position/pos1">Next and final practice tests...</Link></button>
    </section>
  );
};

export default page;
