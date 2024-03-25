import Image from "next/image";
import catImg from "@public/cat_img.webp";
import googleLogo from "@public/google.svg";

const img_txt = () => {
  return (
    <section>
      <Image
        src={catImg}
        className="m-4 w-[300px] h-[300px] object-cover rounded-full"
      />

      <br />
      <input
        type="text"
        placeholder="Search"
        className="rounded-lg mx-4 px-4 py-3 border"
      />
      <input
        type="text"
        placeholder="Search Google or type a URL"
        className="rounded-full shadow w-[500px] border-none py-3 px-4 mt-[20px] ml-5"
      />
      <br />
      <p className="my-[10px] font-arial">Email</p>
      <input
        type="text-box"
        className="border-2 border-slate-600 rounded-[4px] w-[400px] py-2 px-1 mb-5"
      />
      <br />
      <p className="text-secondary text-sm mb-5 font-arial">
        By clicking Agree & Join, you agree with the Privacy and Policy
      </p>
      <button className="bg-blue-600 w-[400px] py-4 rounded-[30px] text-white border-none text-[20px]">
        Agree & Join
      </button>
      <br />

      <div className="flex items-center mt-5">
        <Image
          src={catImg}
          className="my-2 w-[50px] h-[50px] object-cover rounded-full mr-2"
        />
        <input
          type="text"
          placeholder="What's happening?"
          className="ml-0 text-[18px] border-none text-slate-500 w-[300px] py-2 px-2 rounded-xl"
        />
        <button className="bg-sky-500 text-white px-4 py-2 rounded-full font-bold ml-2">
          Tweet
        </button>
      </div>

      <input
        type="text"
        placeholder="Name"
        className="block border rounded border-slate-500 my-3 px-1"
      />
      <input
        type="text"
        placeholder="Email"
        className="block border rounded border-slate-500 px-1"
      />

      <p className="mt-3 w-[240px] inline-block align-middle font-serif mr-2">
        Thanks for chatting with our customer support. Would you like to take
        our quick survey?
      </p>
      <button className="border border-slate-500 px-2 rounded mr-2 align-middle">
        Yes
      </button>
      <button className="border border-slate-500 px-2 rounded align-middle">
        No
      </button>

      <div className="my-3">
        <Image src={googleLogo} className="ml-16" />
      </div>
      <input
        type="text"
        placeholder="Search Google or type a URL"
        className="rounded-full shadow w-[500px] border-none py-3 px-4 mt-[10px] ml-5"
      />

      <br />
      <input
        type="text"
        placeholder="First Name"
        className="w-[150px] mt-5 border px-1 py-2 rounded"
      />
      <input
        type="text"
        placeholder="Last Name"
        className="w-[150px] ml-4 mt-5 border px-1 py-2 rounded"
      />
      <input
        type="text"
        placeholder="Email"
        className="w-[316px] mt-2 border px-1 py-2 rounded block"
      />
      <button className="bg-blue-500 mt-2 py-2 w-[316px] rounded-xl text-white font-semibold text-[20px]">
        Sign Up
      </button>

      <br />

      <p className="text-[25px] mt-5">Request a ride now.</p>
      <input
        type="text"
        placeholder="Enter pickup location"
        className="block w-[330px] mt-5 px-1 py-2  bg-zinc-100"
      />
      <input
        type="text"
        placeholder="Enter destination"
        className="block w-[330px] mt-5 px-1 py-2  bg-zinc-100 mb-10"
      />

      <button
        className="bg-black px-4 py-3
      hover:opacity-80 transition text-white"
      >
        Request Now
      </button>
      <button
        className="bg-zinc-100 ml-3 px-4 py-3
      hover:opacity-80 transition text-black"
      >
        Schedule for later
      </button>
    </section>
  );
};

export default img_txt;
