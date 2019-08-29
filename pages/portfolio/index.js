import Layout from "../../components/Layout";
import "../../styles/index.css";
import "./portfolio.css";
import Project from "./components/Project/Project";

export default function Porfolio() {
  return (
    <Layout>
      <p className="portfolio__quote">
        If you find a bug, just remember that it’s not a bug. It’s an
        undocumented feature!
      </p>
      <div className="flex flex-row justify-around items-start flex-wrap portfolio__wrap ">
        <Project img={"/static/images/ph2.png"} />
        <Project img={"/static/images/ph1.png"} />
        <Project img={"/static/images/ph3.png"} />
        <Project img={"/static/images/ph4.png"} />
        <Project img={"/static/images/ph3.png"} />
        <Project img={"/static/images/ph4.png"} />
      </div>
    </Layout>
  );
}
