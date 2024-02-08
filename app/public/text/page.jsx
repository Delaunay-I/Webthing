import React from "react";

const Text = () => {
  return (
    <section className="ml-3">
      <h1 className="m-3 text-center">Practice on text styles</h1>
      <br />
      <p className="font-arial text-lg leading-6 font-bold w-[280px] mb-2">
        Talking Tech and AI with Google CEO Sundar Pichai!
      </p>

      <p className="font-arial text-sm text-secondary">
        3.4M views &#xB7; 6 months ago
      </p>
      <p className="font-arial text-sm text-secondary my-4">
        Marques Brownlee &#10003;
      </p>

      <p className="font-arial text-sm text-secondary w-[270px] leading-5">
        Talking tech and AI on the heels of Google I/O. Also a daily driver
        phone reveal from Google's CEO. Shoutout to Sundar!
      </p>

      <p className="mt-10 text-center bg-red-700 py-4 mx-6 text-[16px]">
        Shop early for the best selection of holiday favourites.{" "}
        <span className="hover:underline cursor-pointer">Shop now &gt;</span>
      </p>

      <p className="font-tahoma mb-8">This is Tahoma Font</p>
      <p className="font-arial text-xl font-bold">Biggest Deals of the Year!</p>
      <p className="font-arial text-red-600 italic mb-8">Sales end Tuesday</p>

      <p className="font-verdana text-xl font-bold">HTML CSS Course</p>
      <p className="font-verdana text-secondary mb-4">Beginner to Pro</p>
      <p className="font-verdana w-[290px]">In this course, we'll learn the skills you need to become a developer.</p>

      <button className="bg-emerald-700 py-3 px-3.5 font-verdana mt-5 mb-10 rounded-xl">Get Started</button>


      <p className="font-arial font-bold text-3xl text-center mb-4">Shopping for your business?</p>
      <p className="font-arial text-center mb-4">See how Apple at Work can help</p>
      <p className="font-arial text-center text-blue-300 cursor-pointer hover:underline mb-10">Learn more &gt;</p>

    <div className="font-arial text-center">
      <p className="text-sm text-orange-400">New</p>
      <p className="text-xl font-semibold">MacBook Pro</p>
      <p className="text-4xl font-bold">Supercharged for pros.</p>
      <p className="my-3">From $1999</p>
      <button className="bg-blue-500 py-1 px-4 rounded-3xl mb-10 text-[14px]">Buy</button>
    </div>
    </section>
  );
};

export default Text;
