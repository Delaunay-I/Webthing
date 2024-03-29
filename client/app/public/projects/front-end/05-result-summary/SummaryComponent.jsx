import "./styles.css";
import { results } from "./index";

const SummaryComponent = () => {
  return (
    <div className="h-screen items-center justify-center sm:flex ">
      <div className="h-full sm:h-auto grid sm:rounded-[30px] bg-white text-black sm:w-[600px] sm:auto-cols-fr sm:grid-flow-col">
        <div className="text-pale-blue flex flex-col items-center justify-between gap-5 rounded-b-[30px] sm:rounded-[26px] bg-gradient-to-b from-[#7857ff] to-[#2e2be9] p-8 px-10 sm:gap-0">
          <h2 className="text-lg font-semibold">Your Result</h2>
          <div className="flex flex-col items-center justify-center rounded-full bg-gradient-to-b from-[#4e21ca] to-[#2421CA00] px-8 py-6 sm:px-12 sm:py-9">
            <p className="text-[46px] sm:text-[57px] font-semibold text-white">76</p>
            <p className="mt-[-12px] text-xs sm:text-sm font-semibold">of 100</p>
          </div>
          <h1 className="text-2xl font-semibold text-white">Great</h1>
          <p className="mt-[-11px] pb-3 text-center text-sm">
            You scored higher than 65% of the people who have taken these tests.
          </p>
        </div>
        <div className="grid gap-6 px-8 sm:py-9 py-7">
          <h2 className="text-lg font-semibold">Summary</h2>
          <div className="flex flex-col gap-3">
            {results.map((res, index) => (
              <div
                key={index}
                className={`flex justify-between ${res.theme} rounded-lg p-3 text-sm min-w-[220px]`}
              >
                <div className="flex gap-3 font-semibold">
                  <img src={res.icon} alt="" />
                  <p>{res.category}</p>
                </div>
                <div className="text-pale-blue font-semibold">
                  <span className="text-dark-gray-blue pr-2">{res.score}</span>/
                  100
                </div>
              </div>
            ))}
          </div>
          <button className="bg-button mt-2 rounded-full px-6 py-3 text-sm text-white hover:bg-gradient-to-b hover:from-[#7857ff] hover:to-[#2e2be9] ">
            Continue
          </button>
        </div>
      </div>
    </div>
  );
};

export default SummaryComponent;
