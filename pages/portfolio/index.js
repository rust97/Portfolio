import { useEffect, useState } from "react";
import Layout from "../../components/Layout";
import Project from "./components/Project/Project";
import Spinner from "../../components/Spinner";
import "../../styles/index.css";
import "./portfolio.css";

const client = require("contentful").createClient({
  space: "sc9ok02q0vxo",
  accessToken: "wWLPUyf9LFpFrck9Ke7ZBcZj5g2OvicRPB7ET3VyROQ"
});

export default function Porfolio() {
  async function fetchEntriesForContentType(contentType) {
    const entries = await client.getEntries({
      content_type: contentType
    });
    if (entries.items) return entries.items;
    console.log(`Error getting Entries for ${contentType.name}.`);
  }

  const [data, setData] = useState([]);

  useEffect(() => {
    async function getdata() {
      const portfolio = await fetchEntriesForContentType("portfolio");
      setData([...portfolio]);
    }
    getdata();
  }, []);

  if (data.length === 0) {
    return (
      <Layout>
        <Spinner />
      </Layout>
    );
  } else {
    return (
      <Layout>
        <p className="portfolio__quote">
          If you find a bug, just remember that it’s not a bug. It’s an
          undocumented feature!
        </p>
        <div className="flex flex-row justify-around items-start flex-wrap portfolio__wrap ">
          {data.map(item => {
            return <Project key={item.sys.id} item={item.fields} />;
          })}
        </div>
      </Layout>
    );
  }
}
