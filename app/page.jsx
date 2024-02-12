import Link from "next/link";

const Home = () => {
  return <section>
    <p className="mb-4 text-3xl font-semibold">Sections of this website:</p>

<div className="grid grid-cols-[150px_150px] gap-2">
    <button className="bg-amber-600 px-3 py-3 rounded-2xl shadow-lg
      hover:opacity-80  text-white font-bold
      transition active:translate-x-[2px] active:translate-y-[2px]
    "><Link href="/public/layouts">Layouts</Link></button>
    <button className="bg-amber-600 px-3 py-3 rounded-2xl shadow-lg
      hover:opacity-80  text-white font-bold 
      transition active:translate-x-[2px] active:translate-y-[2px]
    "><Link href="/public/grid">Grid</Link></button>
</div>
  </section>
}


export default Home; 