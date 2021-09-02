import Link from "next/link";
function Nav() {
  return (
    <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
      <Link href="/">
        <a className="mr-5 hover:text-gray-900">Home</a>
      </Link>
      <Link href="/about">
        <a className="mr-5 hover:text-gray-900">About</a>
      </Link>
    </nav>
  );
}

export default Nav;
