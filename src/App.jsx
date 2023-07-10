import { Card } from "./components/card/Card";
import { Content } from "./components/content/Content";
import { Header } from "./components/header/Header";

function App() {
  return (
    <div className="w-full h-full">
      <Header />
      <Content />
      <Card />
    </div>
  );
}

export default App;
