import Layout from "../../components/Layout";
import HelloSection from "../index/components/HelloSection";
import "../../styles/index.css";
import Head from "next/head";

function Index({ about, whatIDo, contact }) {
  return (
    <Layout>
      <Head>
        <link rel="shortcut icon" href="/static/favicon.ico" />
        <title>Frontend Developer</title>
      </Head>
      <HelloSection />
      <section className="flex flex-col justify-center items-center about__container">
        <article className="about__me flex items-start w-11/12">
          <div className="about__me-title w-3/12">
            <h1 className="uppercase">{about.title}</h1>
          </div>
          <div className="about__me-text w-9/12">
            <p className="mb-5">{about.intro.content[0].content[0].value}</p>
            <p className="mb-5">{about.info.content[0].content[0].value}</p>
          </div>
        </article>
      </section>
      <span className="main__dash w-full block" />
      <section className="flex flex-col justify-center items-center affairs__container">
        <article className="affairs__me flex items-start w-11/12">
          <div className="affairs__me-title w-3/12">
            <h1 className="uppercase">{whatIDo.title}</h1>
          </div>
          <div className="affairs__me-text w-9/12">
            <h3>{whatIDo.development}</h3>
            <p className="mb-5">
              {whatIDo.developmentText.content[0].content[0].value}
            </p>
          </div>
        </article>
      </section>
      <span className="main__dash w-full block" />
      <section className="flex flex-col justify-center items-center about__container">
        <article className="about__me flex items-start w-11/12">
          <div className="about__me-title w-3/12">
            <h1 className="uppercase">{contact.title}</h1>
          </div>
          <div className="about__me-text w-9/12">
            <p className="mb-5">
              {contact.email.content[0].content[0].value}
              <a href={contact.email.content[0].content[1].data.uri}>
                {contact.email.content[0].content[1].content[0].value}
              </a>
              .
            </p>
            <p className="mb-5">
              {contact.otherContacts.content[0].content[0].value}{" "}
              <a href={contact.otherContacts.content[0].content[1].data.uri}>
                {contact.otherContacts.content[0].content[1].content[0].value}
              </a>{" "}
              {contact.otherContacts.content[0].content[2].value}{" "}
              <a href={contact.otherContacts.content[0].content[3].data.uri}>
                {contact.otherContacts.content[0].content[3].content[0].value}
              </a>
              .
            </p>
          </div>
        </article>
      </section>
    </Layout>
  );
}

Index.getInitialProps = async ({ req }) => {
  const about = await import("../../static/about.json");
  const whatIDo = await import("../../static/whatIDo.json");
  const contact = await import("../../static/contact.json");

  return { about, whatIDo, contact };
};

export default Index;

// <Layout>
//       <HelloSection />
//       <AboutSection

//         title={about.title}
//         intro={about.intro.content[0].content[0].value}
//         info={about.info.content[0].content[0].value}
//       />
//       <span className="main__dash w-full block" />
//       <AffairsSection
//         title={whatIDo.title}
//         dev={whatIDo.development}
//         devText={whatIDo.developmentText.content[0].content[0].value}
//       />
//       <span className="main__dash w-full block" />
//       <ContactSection
//         title={contact.title}
//         email={contact.email.content[0].content}
//         otherContacts={contact.otherContacts.content[0].content}
//       />
//     </Layout>
