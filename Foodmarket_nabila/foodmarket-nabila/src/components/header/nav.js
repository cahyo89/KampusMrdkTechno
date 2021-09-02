import Link from 'next/link'

function Nav(){
    return(
        <nav className="flex lg:w-2/5 flex-wrap items-center text-base md:ml-auto">
          <Link href="/">
            <a className="mr-5 hover:text-gray-900">Home</a>
            </Link>
            <Link href="/about">
            <a className="mr-5 hover:text-gray-900">About</a>
            </Link>
            <Link href="/contact-us">
            <a className="mr-5 hover:text-gray-900">Contact Us</a>
            </Link>
            <a className="hover:text-gray-900">Fourth Link</a>
        </nav>

    )
}
export default Nav;