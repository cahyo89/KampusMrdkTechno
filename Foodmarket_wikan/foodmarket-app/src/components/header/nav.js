import Link from "next/link";
function Nav() {
  return (
    <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
      <Link href="#">
        <a className="mr-6 hover:text-gray-900">Fresh Food</a>
      </Link>
      <Link href="#">
        <a className="mr-6 hover:text-gray-900">Frozen Food</a>
      </Link>
      <Link href="#">
        <a className="mr-6 hover:text-gray-900">Western Food</a>
      </Link>
      <Link href="#">
        <a className="mr-6 hover:text-gray-900">Italian Food</a>
      </Link>
      <Link href="#">
        <a className="mr-6 hover:text-gray-900">Indian Food</a>
      </Link>
    </nav>
  );
}

export default Nav;
