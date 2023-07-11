import { Card } from "../card/Card";
import { Content } from "../content/Content";

export const Home = () => {
  return (
    <div className="w-full h-full">
      <Content />
      <div className="px-10">
        <Card />
      </div>
    </div>
  );
};
