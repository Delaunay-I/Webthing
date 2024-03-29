import Image from "next/image";
import "./styles.css";
import { Outfit } from "next/font/google";

const outfit = Outfit({ subsets: ["latin"] });

const page = () => {
  return (
    <div className="mx-auto mt-20 w-fit">
      <div
        className={`rose-white flex w-[280px]  flex-col gap-4 px-6 pb-3 text-black sm:w-[450px] sm:rounded-xl sm:p-6 ${outfit.className}`}
      >
        <Image
          src="/image-omelette.jpeg"
          width={400}
          height={300}
          alt="omelette image"
          className="mx-[-24px] rounded-lg sm:mx-0"
        />
        <h1 className="brown text-3xl font-youngSerif">
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
          <h2 className="dark-rasbperry text-xl font-youngSerif">
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
          <h2 className="dark-rasbperry text-xl font-youngSerif">
            Instructions
          </h2>
        </div>
      </div>
    </div>
  );
};

export default page;
