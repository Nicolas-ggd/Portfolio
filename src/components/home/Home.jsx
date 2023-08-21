import { Content } from "../content/Content";
import { Guide } from "../guide/Guide";
import { GuideSkills } from "../guide/GuideSkills";

export const Home = () => {
  return (
    <div className="w-full h-full">
      <Content />
      <Guide />
      <GuideSkills />
    </div>
  );
};
