import Link from "next/link";
import "../../styles/index.css";

export default function Header() {
  return (
    <header className="w-full h-20 flex justify-end">
      <nav className="flex justify-center items-end px-3 font-hairline">
        <Link href="/">
          <a>
            <p className=" mx-2 p-4 ">About</p>
          </a>
        </Link>
        <Link href="/portfolio">
          <a>
            <p className=" mx-2 p-4 ">Portfolio</p>
          </a>
        </Link>
        <Link href="/books-notes">
          <a>
            <p className=" mx-2 p-4 ">Books notes</p>
          </a>
        </Link>
      </nav>
    </header>
  );
}
