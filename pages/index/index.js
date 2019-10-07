import Layout from "../../components/Layout";
import HelloSection from "../index/components/HelloSection";
import AboutSection from "../index/components/AboutSection";
import AffairsSection from "./components/AffairsSection/AffairsSection";
import ContactSection from "./components/ContactSection/ContactSection";
import Spinner from "../../components/Spinner";
import "../../styles/index.css";
import { useEffect, useState } from "react";

const client = require("contentful").createClient({
  space: "sc9ok02q0vxo",
  accessToken: "wWLPUyf9LFpFrck9Ke7ZBcZj5g2OvicRPB7ET3VyROQ"
});

export default () => {
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
      const about = await fetchEntriesForContentType("about");
      const whatIDo = await fetchEntriesForContentType("whatIDo");
      const contact = await fetchEntriesForContentType("contact");
      setData([...about, ...whatIDo, ...contact]);
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
        <HelloSection />
        <AboutSection
          title={data[0].fields.title}
          intro={data[0].fields.intro.content[0].content[0].value}
          info={data[0].fields.info.content[0].content[0].value}
        />
        <span className="main__dash w-full block" />
        <AffairsSection
          title={data[1].fields.title}
          dev={data[1].fields.development}
          devText={data[1].fields.developmentText.content[0].content[0].value}
        />
        <span className="main__dash w-full block" />
        <ContactSection
          title={data[2].fields.title}
          email={data[2].fields.email.content[0].content}
          otherContacts={data[2].fields.otherContacts.content[0].content}
        />
      </Layout>
    );
  }
};
