import Layout from "../../components/Layout";
import Head from "next/head";

export default function BooksNotes() {
  return (
    <Layout>
      <Head>
        <link rel="shortcut icon" href="/static/favicon.ico" />
        <title>Frontend Developer</title>
      </Head>
      <div
        className="books-notes__wrap w-full h-full flex justify-center items-center "
        style={{ height: "60vh" }}
      >
        <h1 className="text-4xl">Coming soon...</h1>
      </div>
    </Layout>
  );
}
