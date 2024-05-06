import Image from "next/image";
import style from "./news.module.css";
import React, { SetStateAction, Dispatch } from "react";

interface submissionProps {
  email: string;
  setEmail: Dispatch<SetStateAction<string>>;
  setSubscribe: Dispatch<SetStateAction<boolean>>;
}

const Submission: React.FC<submissionProps> = ({
  email,
  setEmail,
  setSubscribe,
}) => {
  return (
    <div
      className={`flex flex-col justify-between bg-white font-[roboto] ${style.text_gray} h-screen w-full px-6 py-10 sm:h-fit sm:w-[400px] sm:rounded-3xl sm:px-12`}
    >
      <div className="mt-24 sm:mt-0">
        <Image
          src="/frontend-projects/07/icon-success.svg"
          width={50}
          height={50}
          alt="icon success"
          className="mb-6"
        />
        <h1 className="mb-6 text-[35px] font-bold leading-[35px] sm:text-[40px] sm:leading-[40px]">
          Thanks for subscribing!
        </h1>
        <p className="text-sm">
          A confirmation email has been sent to{" "}
          <span className="font-bold">{email}</span>. Please open it and click
          the button inside to confirm your subscripton.
        </p>
      </div>

      <button
        className="mb-2 mt-8 w-full rounded-md bg-slate-800 px-5 py-3 font-bold text-white hover:bg-gradient-to-r hover:from-rose-500 hover:to-orange-500 hover:shadow-lg hover:shadow-rose-500/45"
        onClick={() => {
          setSubscribe(false);
          setEmail("");
        }}
      >
        Dismiss message
      </button>
    </div>
  );
};

export default Submission;
