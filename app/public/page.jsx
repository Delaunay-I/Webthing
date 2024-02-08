const Public = () => {
  return <section className="bg-gray-100 p-12">
    <div className="mb-6 bg-emerald-400 w-[45em] mx-10 border-y-4 px-3 py-4">Hello this is my dive that I want to play with its box model.</div>
    <div className="bg-indigo-700 w-[34em] border-y-[32px] mt-1 px-9 py-3 mb-8">Here is some neighbor to it, to check a few things. Lool!</div>


    <button className="bg-black w-[130px] h-[50px]
      hover:opacity-80 transition
    ">Request Now</button>
    <button className="bg-yellow-400 text-black mx-4 w-[200px] h-[50px] rounded-full
      hover:bg-yellow-500 transition
    ">Add to Cart</button>
    <button className="w-[100px] h-[50px] font-bold bg-emerald-600 rounded-xl
      hover:shadow-lg transition
    ">Sign up</button>
    <button className="bg-violet-700 w-[8rem] h-[3rem] mx-4 rounded-[5px]
      hover:opacity-80 transition font-semibold
    ">Get Started</button>
    <button className="text-gray-500 w-[8rem] h-[3rem] border border-slate-500 rounded mt-3
      hover:bg-gray-500 hover:text-white transition font-semibold
    ">Download</button>
    <br/>
    <button className="bg-blue-700 w-[230px] h-[40px] mt-5 rounded-full font-semibold
      hover:bg-blue-900 transition
    ">
      Apply on company website
    </button>
    <button className="w-[90px] h-[50px] border border-blue-700 text-blue-700 font-bold mx-4
      rounded-full hover:border-2 hover:bg-blue-100 transition
    ">
      Save
    </button>
  </section>
};

export default Public;
