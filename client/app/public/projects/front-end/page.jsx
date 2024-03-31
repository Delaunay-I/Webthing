import React from "react";
import PreviewCard from "@components/PreviewCard";

const frontEnd = () => {
  return <div className="h-screen px-3 pt-2 text-neutral-200 flex flex-col gap-6">
    <h1 className="text-3xl">My front-end components</h1>
    <h2>Starter</h2>
    <div className="flex p-3 gap-4">
    <PreviewCard desc="A component with a qr code" link="/public/projects/front-end/01-qrcode"/>
    <PreviewCard desc="blog preview card" link="/public/projects/front-end/02-blogpreviewcard"/>
    </div>
    <h2>Junior</h2>
    <h2>Intermediate</h2>
  </div>;
};

export default frontEnd;
