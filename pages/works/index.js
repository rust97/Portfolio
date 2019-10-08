import Layout from "../../components/Layout";
import Link from "next/link";
import "../../styles/index.css";
import "./portfolio.css";

function Porfolio({ portfolio }) {
  return (
    <Layout>
      <p className="portfolio__quote">
        If you find a bug, just remember that it’s not a bug. It’s an
        undocumented feature!
      </p>
      <div className="flex flex-row justify-around items-start flex-wrap portfolio__wrap ">
        {portfolio.default.map(item => {
          return (
            <div className="project__wrap mb-5" key={item.sys.id}>
              <img src={item.fields.preview.fields.file.url} />
              <div className="project__hidden">
                <a
                  href={item.fields.link.content[0].content[1].data.uri}
                  className="project__open-btn"
                >
                  {item.fields.link.content[0].content[1].content[0].value}
                </a>
                {item.fields.link.content.length > 1 ? (
                  <a
                    href={item.fields.link.content[1].content[1].data.uri}
                    className="project__open-btn"
                  >
                    {item.fields.link.content[1].content[1].content[0].value}
                  </a>
                ) : (
                  ""
                )}
              </div>
            </div>
          );
        })}
      </div>
    </Layout>
  );
}

Porfolio.getInitialProps = async ({ req }) => {
  const portfolio = await import("../../static/portfolio.json");

  return { portfolio };
};

export default Porfolio;
