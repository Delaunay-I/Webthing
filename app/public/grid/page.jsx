import Image from "next/image";

import cat1 from "@public/cat1.png";
import cat2 from "@public/cat2.jpg";
import cat3 from "@public/cat3.jpg";

const Grid = () => {
  const range = [1, 2, 3, 4];
  return (
    <section className="mb-[400px]">
      <p>Grid practice tests:</p>

      <div className="grid grid-cols-[200px_75px] my-3">
        <div className="bg-purple-300">200px</div>
        <div className="bg-orange-400">75px</div>
      </div>

      <div className="grid grid-cols-[50px_1fr_75px]">
        <div className="bg-purple-300">50px</div>
        <div className="bg-orange-400">1fr</div>
        <div className="bg-teal-400">75px</div>
      </div>

      <div className="grid grid-cols-4 gap-x-5 gap-y-[10px] my-3">
        {range.map((num) => (
          <div className="bg-fuchsia-400">{`col ${num}`}</div>
        ))}
        {range.map((num) => (
          <div className="bg-fuchsia-400">{`col ${num}`}</div>
        ))}
      </div>

      <h1>FlexBox</h1>

      <div className="flex mb-8">
        <div className="basis-[200px] bg-blue-300">200px</div>
        <div className="basis-[75px] bg-purple-500">75px</div>
      </div>

      <div className="flex my-8">
        <div className="basis-[50px] bg-blue-300">item1</div>
        <div className="basis-full bg-purple-500">item2</div>
        <div className="basis-[75px] bg-blue-300">item3</div>
      </div>

      <div className="flex justify-between">
        <div className="bg-blue-300">item1</div>
        <div className="bg-purple-500">item2</div>
        <div className="bg-blue-300">item3</div>
        <div className="bg-purple-500">item4</div>
      </div>

      <div className="flex my-4 h-[50px] border justify-between items-center">
        <div className="bg-blue-300">item1</div>
        <div className="bg-purple-500">item2</div>
      </div>

      <h1>FlexBox Challenge exercises</h1>

      <div className="flex flex-col border rounded-lg w-[300px] justify-between px-3 py-2 gap-y-4 bg-slate-100 text-slate-900 text-lg">
        <div className="flex justify-between">
          <div>Home</div>
          <div className="bg-blue-500 rounded-xl text-center px-3 font-bold text-white">
            14
          </div>
        </div>
        <div className="flex justify-between">
          <div>Notifications</div>
          <div className="bg-blue-500 rounded-xl text-center px-3 font-bold text-white">
            3
          </div>
        </div>
        <div className="flex justify-between">
          <div>Messages</div>
          <div className="bg-blue-500 rounded-xl text-center px-3 font-bold text-white">
            5
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-y-4 pb-3 mt-8 bg-slate-100 w-[380px] text-black font-arial">
        <div className="flex items-center ml-3 pt-3">
          <Image
            src={cat1}
            className="rounded-full w-12 h-12 object-cover mr-4"
          />
          <div className="w-[200px]">
            <p className="font-bold mb-[3px]">Oliver</p>
            <p className="text-neutral-500 mb-[5px]">The Cat</p>
            <p className="text-neutral-500 text-[14px]">Popular</p>
          </div>

          <button className="bg-blue-500 px-4 py-[10px] rounded top-full text-white font-bold">
            Follow
          </button>
        </div>

        <div className="flex items-center">
          <Image
            src={cat2}
            className="rounded-full w-12 h-12 object-cover object-top ml-3 mr-4"
          />
          <div className="w-[200px]">
            <p className="font-bold mb-[3px]">Mimi</p>
            <p className="text-neutral-500 mb-[5px]">Sleepy cat</p>
            <p className="text-neutral-500 text-[14px]">Popular</p>
          </div>
          <button className="bg-blue-500 rounded px-4 py-2 text-white font-bold">Follow</button>
        </div>

        <div className="flex items-center">
          <Image
            src={cat3}
            className="rounded-full w-12 h-12 object-cover object-top ml-3 mr-4"
          />
          <div className="w-[200px]">
            <p className="font-bold mb-[3px]">Rex</p>
            <p className="text-neutral-500 mb-[5px]">Happy Cat</p>
            <p className="text-neutral-500 text-[14px]">Popular</p>
          </div>
          <button className="bg-blue-500 rounded px-4 py-2 text-white font-bold">Follow</button>
        </div>
      </div>
    </section>
  );
};

export default Grid;
