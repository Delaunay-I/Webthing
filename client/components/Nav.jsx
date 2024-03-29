import Image from "next/image";

import logo from "@public/logo.svg";
import MyMenu from "./MyMenu";

const Nav = () => {
  return (
    <nav className="dark:bg-slate-800">
      <div className="mx-auto flex max-w-screen-xl items-center justify-between p-4">
        <div>
          <a href="/" className="flex items-center space-x-2">
            <Image src={logo} alt="icon" width={50} priority />
            <span>my app</span>
          </a>
        </div>
        
        <MyMenu />
      </div>
    </nav>
  );
};

export default Nav;
