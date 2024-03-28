import Image from "next/image";
import "./styles.css";
import { Young_Serif, Outfit } from "next/font/google";

const yserif = Young_Serif({ subsets: ["latin"], weight: "400" });
const outfit = Outfit({ subsets: ["latin"] });

const page = () => {
  return (
    <div className="mx-auto mt-20 w-fit">
      <div
        className={`flex w-[280px] sm:w-[450px]  flex-col gap-4 sm:rounded-xl rose-white px-6 pb-3 sm:p-6 text-black ${outfit.className}`}
      >
        <Image
          src="/image-omelette.jpeg"
          width={400}
          height={300}
          alt="omelette image"
          className="rounded-lg mx-[-24px] sm:mx-0"
        />
        <h1 className={`brown text-3xl ${yserif.className}`}>
          Simple Omelette Recipe
        </h1>
        <p className="dark-charocal text-[14px]">
          An easy and quick dish, perfect for any meal. This classic omelette
          combines beaten eggs cooked to perfection, optionally filled with your
          choice of cheese, vegetables, or meats.
        </p>
        <div className="egg-shell rounded p-3">
          <h2 className="dark-rasbperry font-bold">Preparation time</h2>
          <ul className="dark-charocal list-inside list-disc px-2 text-xs">
            <li>
              <span className="font-bold">Total</span>: Approximately 10 minutes
            </li>
            <li>
              <span className="font-bold">Preparation</span>: 5 minutes
            </li>
            <li>
              <span className="font-bold">Cooking</span>: 5 minutes
            </li>
          </ul>
        </div>
        <div>
          <h2 className={`dark-rasbperry text-xl ${yserif.className}`}>
            Ingredients
          </h2>
          <ul className="weng-brown spa list-inside list-disc space-y-2 px-2 pt-2 text-sm">
            <li>2-3 large eggs</li>
            <li>Salt, to taste</li>
            <li>Pepper, to taste</li>
            <li>1 tablespoon of butter or oil</li>
            <li>
              Optional fillings: cheese, diced vegetables, cooked meats, herbs
            </li>
          </ul>
        </div>
        <hr />
        <div>
          <h2 className={`dark-rasbperry text-xl ${yserif.className}`}>
            Instructions
          </h2>
        </div>
      </div>
    </div>
  );
};

export default page;
