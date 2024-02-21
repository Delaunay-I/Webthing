import Link from "next/link";

const page = () => {
  return (
    <section>
        <div className="fixed inset-y-0 right-0 w-[100px] top-[82px] bg-emerald-500">right sidebar</div>

        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-80">
            <div className="bg-white rounded w-[400px] text-black px-4 py-4">
                <p className="text-3xl font-bold">Modal Title</p>
                <p className="text-lg font-semibold mt-4">This is a modal</p>
                <button className="border border-slate-500 bg-gray-100 px-2 py-1 rounded mt-2">Close</button>
                <button className="block bg-sky-200 rounded px-2 py-1 mt-2"><Link href="/public/position/pos3">Next practice</Link></button>
            </div>
        </div>
    </section>
  )
}

export default page;