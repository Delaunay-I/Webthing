import Image from "next/image";
import "./styles.css";

const page = () => {
  return (
    <div className="primary-yellow h-full py-24">
      <div className="box-shadow mt-24 mx-auto flex min-w-[275px] max-w-[384px] flex-col gap-6 rounded-2xl border border-black bg-white p-6 text-black ">
        <Image
          src="/illustration-article.svg"
          width={336}
          height={200}
          alt="illustration image"
          className="rounded-lg"
        />
        <div className="flex flex-col items-start gap-3">
          <button className="primary-yellow rounded px-2 py-1 font-bold text-sm">
            Learning
          </button>
          <p className="text-xs">Published 21 Dec 2023</p>
          <h1 className="text-primary-yellow cursor-pointer text-2xl font-extrabold">
            HTML & CSS foundations
          </h1>
          <p className="text-gray-500">
            These languages are the backbone of every website, defining
            structure, content, and presentation.
          </p>
        </div>
        <div className="flex items-center gap-3 cursor-pointer">
          <Image
            src="/image-avatar.webp"
            width={32}
            height={32}
            alt="avatar image"
          />
          <p className="text-xs font-bold">Greg Hooper</p>
        </div>
      </div>
    </div>
  );
};

export default page;
