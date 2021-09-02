import Head from "next/head";
import Layout from "../src/components/layout";
import Link from "next/link";

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Food Market App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      Our Content
    </Layout>
  );
}
