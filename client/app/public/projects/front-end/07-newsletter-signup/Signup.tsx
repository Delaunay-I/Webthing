import Image from "next/image";
import { SetStateAction, Dispatch } from "react";

import style from "./news.module.css";
import { points } from "./constants";
import { useState } from "react";

type Errors = {
  email?: string | null;
};

interface SignupProps {
  email: string;
  setEmail: Dispatch<SetStateAction<string>>;
  setSubscribe: Dispatch<SetStateAction<boolean>>;
}

const validateEmail = (email: string) => {
  const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;

  if (!email || email.length === 0) {
    return "Email is required";
  }

  if (!regex.test(email)) {
    return "Valid email required";
  }

  return null;
};

const Signup: React.FC<SignupProps> = ({ email, setEmail, setSubscribe }) => {
  const [errors, setErrors] = useState<Errors>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const error = validateEmail(email);
    setErrors({ email: error });

    // If there weren't any erros from emailValidate, then set the email and submit the form
    if (!error) {
      setEmail(email);
      setSubscribe(true);
    }
  };
  return (
    <div className="flex w-full h-screen sm:h-fit flex-col-reverse items-center justify-end bg-white pb-10 sm:max-w-[650px] sm:flex-row sm:rounded-3xl sm:p-5 md:max-w-[750px] lg:max-w-[900px]">
      <div
        className={`mx-2 flex min-w-[250px] max-w-[450px] flex-col justify-center gap-3 pr-4 lg:mx-8 ${style.text_gray} font-[roboto] `}
      >
        <h1 className="text-[35px] font-bold lg:text-[50px]">Stay updated!</h1>
        <p>Join 60,000+ product managers receiving monthly updates on:</p>
        <div className="mt-2 flex flex-col gap-3">
          {points.map((point: string, index: number) => {
            return (
              <div className="flex items-center gap-4" key={index}>
                <Image
                  src="/frontend-projects/07/icon-list.svg"
                  width={20}
                  height={20}
                  alt="icon list"
                />
                <p>{point}</p>
              </div>
            );
          })}
        </div>
        <form onSubmit={handleSubmit} className="mt-7">
          <div className="flex justify-between">
            <label
              htmlFor="email"
              className={`mb-2 text-[12px] font-bold ${style.text_gray}`}
            >
              Email address
            </label>
            {errors.email ? (
              <p className="text-xs font-semibold text-rose-500">
                {errors.email}
              </p>
            ) : null}
          </div>
          <input
            type="email"
            id="email"
            placeholder="email@company.com"
            className={`mb-2 w-full rounded-md border px-5 py-3 outline-none focus:border-slate-700 ${errors.email ? "border-red-600 bg-red-100 text-rose-500" : ""}`}
            onChange={handleChange}
          />
          <button
            type="submit"
            className="mt-3 w-full rounded-md bg-slate-800 px-5 py-3 font-bold text-white hover:bg-gradient-to-r hover:from-rose-500 hover:to-orange-500 hover:shadow-lg hover:shadow-rose-500/45"
          >
            Subscribe to monthly newsletter
          </button>
        </form>
      </div>

      <Image
        src="/frontend-projects/07/illustration-sign-up-desktop.svg"
        width={400}
        height={550}
        alt="signup desktop image"
        className="hidden h-auto w-[450px] min-w-[300px] sm:block"
        priority
      />
      <Image
        src="/frontend-projects/07/illustration-sign-up-mobile.svg"
        width={400}
        height={550}
        alt="signup desktop image"
        className="mb-5 w-[500px] object-cover sm:hidden"
        priority
      />
    </div>
  );
};

export default Signup;
