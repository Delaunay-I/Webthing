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
          <button className="bg-blue-500 rounded px-4 py-2 text-white font-bold">
            Follow
          </button>
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
          <button className="bg-blue-500 rounded px-4 py-2 text-white font-bold">
            Follow
          </button>
        </div>
      </div>

      <div className="flex my-5 justify-between bg-purple-600 p-3 items-center">
        <div className="font-bold text-[18px]">Home</div>
        <input
          type="text"
          placeholder="Search"
          className="rounded-full px-[17px] py-2 w-3/5 bg-slate-100 text-black mx-4"
        />
        <button className="border px-4 py-2 rounded">Download</button>
      </div>

      <h1 className="font-bold text-3xl my-3">Nested FlexBox exercises</h1>

      <div className="flex my-4 h-[50px]">
        <div className="bg-purple-500 basis-[100px] flex justify-center items-center">
          <div className="bg-black text-white">item1</div>
        </div>
        <div className="bg-blue-300 basis-[200px]"></div>
      </div>

      <div className="flex h-[80px]">
        <div className="bg-purple-500 basis-[100px]"></div>
        <div className="bg-blue-300 basis-[200px]">
          <div>row1</div>
          <div className="flex justify-between">
            <div className="bg-black text-white">row2</div>
            <div className="bg-black text-white">row2</div>
          </div>
        </div>
      </div>

      <h1 className="font-bold text-3xl my-3 text-red-700">
        Challenging exercises
      </h1>

      <div className="border w-[400px] pt-2 pb-2 px-4 rounded bg-slate-100 text-black shadow-lg mt-5 ml-5">
        <p className="text-slate-600 text-[14px] mb-5">ALL INBOXES</p>
        <div className="flex items-center mb-5">
          <Image src={cat1} className="w-12 h-12 rounded-full mr-2" />
          <div className="basis-full">
            <div className="flex justify-between items-center">
              <p className="font-bold text-[18px]">Chewy Promotions</p>
              <p className="text-slate-600 text-sm">4:48 pm</p>
            </div>
            <p className="font-bold">Biggest sale of the year!</p>
            <p className="text-slate-600">
              Hey there! We're writing to tell you about...
            </p>
          </div>
        </div>
      </div>

      <div className="border rounded w-[450px] bg-slate-100 shadow-lg text-black my-10 py-2 px-4">
        <p className="text-slate-600 text-[14px] mb-5">ALL INBOXES</p>
        <div className="flex mb-5">
          <Image src={cat1} className="w-[50px] h-[50px] rounded-full mr-2" />
          <div className="basis-full">
            <div className="flex justify-between items-center">
              <p className="font-bold text-[18px]">Chewy Promotions</p>
              <p className="text-slate-600">4:48 PM</p>
            </div>
            <p className="font-bold">Biggest sale of the year!</p>
            <p className="text-slate-600">
              Hey there! We're writing to tell you about...
            </p>
          </div>
        </div>

        <div className="flex mb-5">
          <Image src={cat2} className="w-[50px] h-[45px] rounded-full mr-2 object-cover object-top" />
          <div className="basis-full">
            <div className="flex justify-between items-center">
              <p className="font-bold text-[18px]">Best Buy</p>
              <p className="text-slate-600">12:32 PM</p>
            </div>
            <p className="font-bold">Your Best Buy eReceipt</p>
            <p className="text-slate-600">Thank you for shopping at Best Buy, here is...</p>
          </div>
        </div>

        <div className="flex mb-5">
          <Image src={cat3} className="w-[50px] h-[45px] rounded-full mr-2 object-cover object-top" />
          <div className="basis-full">
            <div className="flex justify-between items-center">
              <p className="font-bold text-[18px]">Netflix</p>
              <p className="text-slate-600">9:00 AM</p>
            </div>
            <p className="font-bold">Here's what's coming soon to Netflix</p>
            <p className="text-slate-600">Brand new movies and shows, old favorites...</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Grid;
