import styles from "./irc.module.css";

const Submission = ({ rating }) => {
  return (
    <div className={`${styles.bg_card} h-full sm:h-auto  flex flex-col items-center gap-5 sm:rounded-3xl p-8 sm:w-[430px]`}>
      <img
        src="/frontend-projects/06/illustration-thank-you.svg"
        alt="submission image"
        className="w-[170px] mb-3 pt-4"
      />
      <div className={`${styles.bg_secondary} rounded-full px-6 py-2 mb-3 ${styles.text_secondary}`}>
        You selected {!rating ? 1 : rating} out of 5
      </div>
      <p className="text-[25px] font-[500]">Thank you!</p>
      <p className={`text-center text-[14px] leading-6 ${styles.text_primary} mt-[-10px] pb-4`}>
        We appereciate you taking the time to give a rating. If you ever need
        more support, don't hesitate to get in touch!
      </p>
    </div>
  );
};

export default Submission;
