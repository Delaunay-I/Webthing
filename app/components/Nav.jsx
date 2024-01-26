import Image from "next/image";
import Link from "next/link";
import logo from "@public/logo.svg";

const Nav = () => {
  return (
    <nav className="dark:bg-slate-800">
      <div className="max-w-screen-xl flex items-center justify-between mx-auto p-4">
        <div>
          <a href="/" className="flex items-center space-x-2">
            <Image src={logo} alt="icon" width={50} />
            <span>my app</span>
          </a>
        </div>
        <div>
          <Link href="/">Home</Link>
          <Link href="/createuser">Create User</Link>
          <Link href="/clientmember">Client Member</Link>
          <Link href="/member">Member</Link>
          <Link href="/public">Public</Link>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
