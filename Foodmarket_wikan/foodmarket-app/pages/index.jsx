import Head from "next/head";
import Layout from "../src/components/layout";
import Content from "../src/components/content";
import { getFoods } from "./api/foods";
import Link from "next/link";

export default function Home({ foods }) {
  return (
    <Layout>
      <Head>
        <title>Food Market App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <h1 className="font-semibold text-lg text-black py-3">New Taste</h1>

          <div className="flex flex-wrap -m-4">
            {foods.map((food) => (
              <Content key={food.id} makanan={food}></Content>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}

export async function getStaticProps() {
  const foods = await getFoods();
  // console.log(foods);
  return { props: { foods }, revalidate: 10 };
}
