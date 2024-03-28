import Link from "next/link";

const Home = () => {
  return (
    <section>
      <p className="mb-4 text-3xl font-semibold">Sections of this website:</p>

      <div className="grid grid-cols-4 gap-2">
        <Link
          href="/public/layouts"
          className="rounded-2xl bg-amber-600 px-3 py-3 font-bold
        text-white  shadow-lg transition
        hover:opacity-80"
        >
          Layouts
        </Link>

        <Link
          href="/public/grid"
          className="rounded-2xl bg-amber-600 px-3 py-3 font-bold
      text-white  shadow-lg transition 
      hover:opacity-80"
        >
          Grid
        </Link>

        <Link
          href="/public/position"
          className="rounded-2xl bg-amber-600 px-3 py-3 font-bold
      text-white  shadow-lg transition 
      hover:opacity-80"
        >
          Position
        </Link>

        <Link
          href="/ecom"
          className="rounded-2xl bg-amber-600 px-3 py-3 font-bold
      text-white  shadow-lg transition 
      hover:opacity-80"
        >
          <button>Ecom page</button>
        </Link>
      </div>

    </section>
  );
};

export default Home;
