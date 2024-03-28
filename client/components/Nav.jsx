

import Image from "next/image";
import Link from "next/link";
import { getServerSession } from "next-auth";

import logo from "@public/logo.svg";
import { options } from "../app/api/auth/[...nextauth]/options";
import MyMenu from "./MyMenu";

const Nav = async () => {
  const session = await getServerSession(options);
  return (
    <nav className="dark:bg-slate-800">
      <div className="max-w-screen-xl flex items-center justify-between mx-auto p-4">
        <div>
          <a href="/" className="flex items-center space-x-2">
            <Image src={logo} alt="icon" width={50} priority/>
            <span>my app</span>
          </a>
        </div>
        <div className="flex gap-10">
          <Link href="/">Home</Link>
          <Link href="/login">Login</Link>
          <Link href="/profile">Profile</Link>
          <Link href="/ClientProfile">Client Profile</Link>
          <Link href="/public">Public</Link>
          {session ? (<Link href="/api/auth/signout?callbackUrl=/">Logout</Link>) : (<Link href="/api/auth/signin?callbackUrl=/">Login</Link>)}
        </div>
        <MyMenu/>
      </div>
    </nav>
  );
};

export default Nav;
