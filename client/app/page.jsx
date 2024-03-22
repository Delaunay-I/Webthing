import Link from "next/link";

const Home = () => {
  return (
    <section>
      <p className="mb-4 text-3xl font-semibold">Sections of this website:</p>

      <div className="grid grid-cols-4 gap-2">
        <Link
          href="/public/layouts"
          className="bg-amber-600 px-3 py-3 rounded-2xl shadow-lg
        hover:opacity-80  text-white font-bold
        transition"
        >
          Layouts
        </Link>

        <Link
          href="/public/grid"
          className="bg-amber-600 px-3 py-3 rounded-2xl shadow-lg
      hover:opacity-80  text-white font-bold 
      transition"
        >
          Grid
        </Link>

        <Link
          href="/public/position"
          className="bg-amber-600 px-3 py-3 rounded-2xl shadow-lg
      hover:opacity-80  text-white font-bold 
      transition"
        >
          Position
        </Link>

        <Link href="/ecom" className="bg-amber-600 px-3 py-3 rounded-2xl shadow-lg
      hover:opacity-80  text-white font-bold 
      transition">
        <button>Ecom page</button>
        </Link>
      </div>


    </section>
  );
};

export default Home;
