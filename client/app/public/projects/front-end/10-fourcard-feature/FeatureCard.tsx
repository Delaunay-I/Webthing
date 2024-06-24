import Image from "next/image";

interface props {
  title: string;
  body: string;
  pic: string;
  classname?: string;
}

const FeatureCard = ({ title, body, pic, classname }: props) => {
  return (
    <div className={`featureCard ${classname || ""}`}>
      <h1>{title}</h1>
      <p>{body}</p>
      <Image
        src={pic}
        width={50}
        height={50}
        alt={title}
        className="cardImage"
      />
    </div>
  );
};

export default FeatureCard;
