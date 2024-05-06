"use client";

import { useState } from "react";
import Signup from "./Signup";
import Submission from "./Submission";

const page = () => {
  const [email, setEmail] = useState<string>("");
  const [subscribe, setSubscribe] = useState(false);
  return (
    <div className="flex items-center justify-center sm:h-screen">
      {!subscribe ? (
        <Signup email={email} setEmail={setEmail} setSubscribe={setSubscribe}/>
      ) : (
        <Submission email={email} setEmail={setEmail} setSubscribe={setSubscribe}/>
      )}
    </div>
  );
};

export default page;
