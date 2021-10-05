import Image from "next/image";
import Link from "next/link";
import productPict from "../gambar/ayamlimau.png";

function Content({ makanan }) {
  return (
    <Link href={"produk_details/" + makanan.id}>
      <a className="p-2 md:w-1/3">
        <div className="h-120 border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
          <img
            className="lg:h-48 md:h-36 w-full object-cover object-center"
            src={makanan.image}
            alt="Ayam Limau.png"
          ></img>
          <div className="p-6">
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
              {makanan.name}
            </h1>
            <div className="flex justify-between items-center">
              <p className="leading-relaxed mb-3">
                Rp.{" "}
                {makanan.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
              </p>
              <svg
                width="19"
                height="19"
                viewBox="0 0 19 19"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="-mr-35"
              >
                <path
                  d="M19 7.27241H11.7483L9.5 0L7.25167 7.27241H0L5.85833 11.7603L3.64167 19L9.5 14.5121L15.3583 19L13.11 11.7276L19 7.27241Z"
                  fill="#FFCE31"
                />
              </svg>
              <p className="leading-relaxed text-yellow-500 -ml-40">
                {" "}
                {makanan.rating}
              </p>
            </div>
          </div>
        </div>
      </a>
    </Link>
  );
}

export default Content;
