import Head from "next/head";
import Image from "next/image";
import Layout from "../../src/components/layout";
import Counter from "../../src/components/counter";
import productPict from "../../src/components/gambar/ayamlimau.png";
import { getDetailFood } from "../api/foods/[detail]";

export default function Ayamlimau({ foods }) {
  return (
    <Layout>
      <Head>
        <title>{foods.name} Detail | Food Market App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="container px-5 py-20 mx-auto flex flex-wrap">
        <div className="flex flex-wrap sm:flex-row flex-col pb-6 mb-12">
          <div className="sm:mb-0 mb-6">
            <div className="rounded-lg h-32 w-32 overflow-hidden">
              <img
                src="https://www.indonesia.travel/content/dam/indtravelrevamp/en/trip-ideas/don-t-leave-indonesia-before-you-get-a-taste-of-these-12-favorite-local-foods/batagor.jpg"
                alt=""
                srcSet=""
                className="object-cover object-center h-full w-full pb-2 pr-3"
              />
            </div>
            <div className="rounded-lg h-32 w-32 overflow-hidden">
              <img
                src="https://www.indonesia.travel/content/dam/indtravelrevamp/en/trip-ideas/don-t-leave-indonesia-before-you-get-a-taste-of-these-12-favorite-local-foods/batagor.jpg"
                alt=""
                srcSet=""
                className="object-cover object-center h-full w-full pb-2 pr-3"
              />
            </div>
            <div className="rounded-lg h-32 w-32 overflow-hidden">
              <img
                src="https://www.indonesia.travel/content/dam/indtravelrevamp/en/trip-ideas/don-t-leave-indonesia-before-you-get-a-taste-of-these-12-favorite-local-foods/batagor.jpg"
                alt=""
                srcSet=""
                className="object-cover object-center h-full w-full pb-2 pr-3"
              />
            </div>
          </div>
          <div className="rounded-lg h-80 overflow-hidden ">
            <img
              src={foods.image}
              alt=""
              srcSet=""
              className="object-cover object-center h-full w-full"
            />
          </div>
          <div className="flex mb-10 text-left ml-4">
            <div className="flex-grow text-2xl">
              <h1>{foods.name}</h1>
              <h2 className="text-gray-400 text-sm my-auto">
                Rating: {foods.rating}
              </h2>
              <p className=" max-w-md py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
                incidunt esse nulla numquam sapiente unde consectetur at
                expedita vitae cum quis, ipsam repudiandae minima autem enim
                inventore quae rem fuga.
              </p>
              <p className="leading-relaxed mb-3 text-lg">Rp. {foods.price}</p>
              <div className="flex custom-number-input h-10">
                <Counter />
                <button className="bg-yellow-500 border-0 py-2 px-8 mr-10 focus:outline-none hover:bg-yellow-600 rounded text-lg text-lg">
                  add to cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export async function getServerSideProps(ctx) {
  const id = ctx.query.id;
  const foods = await getDetailFood(id);
  // console.log(foods);
  return { props: { foods } };
}
