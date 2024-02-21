import Link from "next/link";

const position = () => {
  return (
    <section className="h-[3000px]">
        <p className="fixed bottom-[20px] right-[20px] bg-black dark:bg-white dark:text-black">bottom-right</p>

        <div className="bg-emerald-700 text-white w-[100px] fixed inset-y-0 right-0">right sidebar</div>

        <div className="bg-black fixed inset-0 opacity-40 text-white flex flex-col items-center justify-center">
          <p>I am covering everything. LoL!</p>
        <button className="bg-slate-500 px-3 py-3 rounded"><Link href="/public/position/pos2">Next</Link></button>
        </div>
    </section>
  )
}

export default position;