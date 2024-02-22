import Image from "next/image";
import shirt from "@public/shirt.webp";

const page = () => {
  return (
    <section className="h-[3000px] bg-neutral-100 mx-[-24px]">
      <div className="w-[320px] h-[180px] bg-gray-600 fixed bottom-4 right-2">
        <button className="bg-black text-xl font-semibold px-4 py-2 rounded-full absolute top-[-15px] left-[-15px]">
          X
        </button>
        <div className="bg-black px-2 py-1 absolute bottom-2 right-2">0:29</div>
      </div>

      <div className="px-6 py-4 my-4 mx-3 rounded border-slate-500 inline-block bg-slate-300 relative">
        <div className="bg-black text-white px-2 py-1 absolute top-7 right-6">20% OFF</div>
        <Image src={shirt} className="w-[250px]"/>
        <div className="absolute bg-slate-100 bg-opacity-70 inset-x-6 bottom-4 h-[100px] flex justify-center items-center">
            <button className="px-4 py-1 bg-white text-black border border-black hover:opacity-80">Add to Cart</button>
        </div>
      </div>
    </section>
  );
};

export default page;
