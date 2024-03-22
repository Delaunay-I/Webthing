import Link from "next/link";

const Public = () => {
  const page_nums = [1, 2, 3, 4, 5];

  return (
    <section className="text-white">
      <div className="mb-6 bg-emerald-400 w-[45em] mx-10 border-y-4 px-3 py-4">
        Hello this is my dive that I want to play with its box model.
      </div>
      <div className="bg-indigo-700 w-[34em] border-y-[32px] mt-1 px-9 py-3 mb-8">
        Here is some neighbor to it, to check a few things. Lool!
      </div>

      <button
        className="bg-black px-4 py-3
      hover:opacity-80 transition"
      >
        Request Now
      </button>
      <button
        className="bg-yellow-400 text-black mx-4 px-14 py-3 rounded-full
      hover:bg-yellow-500 transition
    "
      >
        Add to Cart
      </button>
      <button
        className="py-3 px-4 font-bold bg-emerald-600 rounded-xl
      hover:shadow-lg transition
    "
      >
        Sign up
      </button>
      <button
        className="bg-violet-700 py-3 px-5 mx-4 rounded-[5px]
      hover:opacity-80 transition font-semibold
    "
      >
        Get Started
      </button>
      <button
        className="text-gray-500 py-3 px-5 border border-slate-500 rounded mt-3
      hover:bg-gray-500 hover:text-white transition font-semibold
    "
      >
        Download
      </button>
      <br />
      <button
        className="py-3 px-4 bg-blue-700 mt-5 rounded-full font-semibold
      hover:bg-blue-900 transition
    "
      >
        Apply on company website
      </button>
      <button
        className="py-3 px-6 border border-blue-700 text-blue-700 font-bold mx-4
      rounded-full hover:border-2 hover:bg-blue-100 transition
    "
      >
        Save
      </button>

      <br />

      <button className="py-2 px-3 bg-gray-200 border border-slate-600 text-black rounded my-4 mr-3">
        Back
      </button>
      {page_nums.map((num, index) => (
        <a key={index} href="" className="text-black mx-1">
          {num}
        </a>
      ))}
      <button className="py-2 px-3 bg-gray-200 border border-slate-600 text-black rounded ml-3 mr-4">
        Next
      </button>
      <br />

      <button className="bg-emerald-600 py-3 px-4 hover:py-6 hover:px-8 transition-all duration-1000">
        Stretch
      </button>
      <button className="bg-emerald-600 py-3 px-4 shadow-lg mx-4 active:translate-x-1 active:translate-y-1 active:shadow-none">
        Shadow
      </button>

      <button className="bg-emerald-600 py-3 px-4 hover:px-5 transition-all mx-3">
        One
      </button>
      <button className="bg-emerald-600 py-3 px-4 hover:px-6 transition-all mx-3">
        Two
      </button>
      <button className="bg-emerald-600 py-3 px-4 hover:px-7 transition-all mx-3">
        Three
      </button>

      <br />
      <button className="py-3 px-4 bg-amber-700 m-4">
        <Link href="/public/text">Next practice on Text styles</Link>
      </button>
    </section>
  );
};

export default Public;
