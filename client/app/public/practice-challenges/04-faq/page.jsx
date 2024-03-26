"use client";

import Image from "next/image";
import "./styles.css";

import { Work_Sans } from "next/font/google";
import Collapsible from "./Collapsible";
import { faqData } from "./constants";

const wsans = Work_Sans({ subsets: ["latin"] });

const page = () => {
  return (
    <div className="h-lvh">
      <Image
        src="/practices/04/background-pattern-desktop.svg"
        alt="background-image"
        width={600}
        height={200}
        className="h-[305px] w-full object-cover object-center"
      />

      <div className={`flex justify-center text-black ${wsans.className}`}>
        <div className="mx-6 mt-[-100px] flex w-auto min-w-[300px] max-w-[550px] flex-col gap-4 rounded-lg bg-white p-8">
          <div className="flex items-center gap-5 mb-2 md:mb-6">
            <Image
              src="/practices/04/icon-star.svg"
              width={35}
              height={35}
              alt="star icon"
              className="size-6 md:size-9"
            />
            <h1 className="text-dark-purple text-3xl font-bold md:text-[50px]">
              FAQs
            </h1>
          </div>
          {faqData.map((qa, index) => (
            <Collapsible key={index} title={qa.question} body={qa.answer} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default page;
