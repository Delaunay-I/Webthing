import Image from "next/image";
import mkbhd1 from "@public/mkbhd1.jpg";
import mkbhd2 from "@public/mkbhd2.jpg";
import cat from "@public/cat_img.webp";

const Layouts = () => {
  return (
    <section>
      <div className="font-arial w-[400px] inline-block">
        <Image src={mkbhd1} className="object-cover h-[225px] rounded-lg"/>
        <p className="text-xl leading-6 font-bold my-2">Using Apple Vision Pro: What It’s Actually Like!</p>
        <p className="font-semibold">Marques Brownlee &#10003;</p>
        <p className="text-sm text-gray-600">18.4M subscribers</p>
      </div>

      <div className="font-arial mx-2 w-[400px] inline-block">
        <Image src={mkbhd2} className="object-cover h-[225px] rounded-lg"/>
        <p className="text-xl leading-6 font-bold my-2">Using Apple Vision Pro: What It’s Actually Like!</p>
        <p className="font-semibold">Marques Brownlee &#10003;</p>
        <p className="text-sm text-gray-600">18.4M subscribers</p>
      </div>

      <div className="bg-red-700 w-16 h-16 m-3"></div>
      <div className="bg-green-600 w-16 h-16 rounded-full m-3"></div>

      <div className="border border-slate-400 p-3">
        <p>Satisfied with our service?</p>
        <button className="px-2 rounded border border-slate-600 bg-slate-200 mr-2 mt-3">Yes</button>
        <button className="px-2 rounded border border-slate-600 bg-slate-200 mr-2 mt-2">No</button>
      </div>


      <div className="mt-5 bg-neutral-800 text-white p-4 w-[400px]">
        <p className="font-semibold text-[25px] mb-2">Install YouTube Music</p>
        <p className="text-gray-400">Add YouTube Music to your desktop for quick and easy access</p>
      </div>

      <div className="w-[200px] shadow-xl border pb-3 rounded mt-4">
        <Image src={cat} className="rounded-t"/>
        <div className="px-2">
        <p className="font-bold text-lg mt-2">Oliver</p>
        <p className="text-slate-500">2 mutual friends</p>
        <button className="bg-blue-600 text-white px-4 py-2 mt-2 rounded">Add Friend</button>
        </div>
      </div>
    </section>
  );
};

export default Layouts;
