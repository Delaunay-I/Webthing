import FeatureCard from "./FeatureCard";
import {data} from "./index";

const FeatureSec = () => {
  return (
    <div className="sectionComp ">
      <h1 className="header-1">Reliable, efficient delivery</h1>
      <h2 className="header-2">Powered by Technology</h2>
      <p className="body">Our Artificial Intelligence powered tools use millions of project data points to ensure that your project is successful</p>

      <div className="cardFeatSection">
        <FeatureCard title={data[0].title} body={data[0].body} pic={data[0].pic} classname="supervisor"/>
        <div>
          <FeatureCard title={data[1].title} body={data[1].body} pic={data[1].pic} classname="team-builder"/>
          <FeatureCard title={data[2].title} body={data[2].body} pic={data[2].pic} classname="karma"/>
        </div>
        <FeatureCard title={data[3].title} body={data[3].body} pic={data[3].pic} classname="calculator"/>
      </div>
    </div>
  );
};

export default FeatureSec;
