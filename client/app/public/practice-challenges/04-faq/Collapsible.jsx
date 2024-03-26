"use client";
import { useState } from "react";
import Image from "next/image";

const Collapsible = ({ title, body }) => {
  const [isOpen, setIsOpen] = useState(false);
  const handleOpen = () => {
    setIsOpen((prev) => !prev);
  };
  return (
    <div>
      <button
        onClick={handleOpen}
        className="mb-4 flex w-full justify-between hover:opacity-90"
      >
        <p className="text-dark-purple cursor-pointer text-left font-bold hover:text-fuchsia-700">
          {title}
        </p>
        {isOpen ? (
          <Image
            src="/practices/04/icon-minus.svg"
            width={25}
            height={25}
            alt="minus icon to close the bullet point"
            className="cursor-pointer"
          />
        ) : (
          <Image
            src="/practices/04/icon-plus.svg"
            width={25}
            height={25}
            alt="minus icon to close the bullet point"
            className="cursor-pointer"
          />
        )}
      </button>

      <div
        className={`grid ${isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"} transition-all duration-300`}
      >
        <p className="text-grayish-purple overflow-hidden text-sm">{body}</p>
      </div>
    </div>
  );
};

export default Collapsible;
