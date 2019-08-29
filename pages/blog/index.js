import Layout from "../../components/Layout";
import "./blog.css";

export default function Blog() {
  return (
    <Layout>
      <div className="blog__container flex h-full justify-center items-center flex-col">
        <div className="article__wrap flex items-center ">
          <span className="article-date">June 30,2017</span>
          <span className="article__title">
            <p>Что поможет тебе вырасти или как найти Ментора!</p>
          </span>
        </div>
        <div className="article__wrap flex items-center ">
          <span className="article-date">June 30,2017</span>
          <span className="article__title">
            <p>Lindsay and I</p>
          </span>
        </div>
        <div className="article__wrap flex items-center ">
          <span className="article-date">June 30,2017</span>
          <span className="article__title">
            <p>I just blue myself</p>
          </span>
        </div>
        <div className="article__wrap flex items-center ">
          <span className="article-date">June 30,2017</span>
          <span className="article__title">
            <p>As you may or may not know</p>
          </span>
        </div>
      </div>
    </Layout>
  );
}
