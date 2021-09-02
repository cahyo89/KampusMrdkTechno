import Head from "next/head";
import Layout from "../src/components/layout";

export default function About() {
  return (
    <Layout>
      <Head>
        <title>About | Food Market App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      About Us
    </Layout>
  );
}
