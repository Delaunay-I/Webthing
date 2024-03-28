import { useState } from "react";

import RateInput from "./RateInput";
import Submission from "./Submission";

const InteractiveRating = () => {
  const [rating, setRating] = useState("");
  const [submit, setSubmit] = useState(false);

  return (
    <div className="flex h-screen items-center justify-center">
      {!submit ? (
        <RateInput
          rating={rating}
          setRating={setRating}
          setSubmit={setSubmit}
        />
      ) : (
        <Submission rating={rating} />
      )}
    </div>
  );
};

export default InteractiveRating;
