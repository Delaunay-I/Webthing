"use client";

import { Menu, MenuItem, MenuButton, SubMenu } from "@szhsin/react-menu";
import "@szhsin/react-menu/dist/index.css";
import "@szhsin/react-menu/dist/transitions/slide.css";

// NextAuth
// import { getServerSession } from "next-auth";
// import { options } from "../app/api/auth/[...nextauth]/options";

import { publicProjects } from "./index.js";

const MyMenu = () => {
  // const session = await getServerSession(options);

  return (
    <Menu menuButton={<MenuButton>Menu</MenuButton>}>
      <SubMenu label="login">
        <MenuItem href="/login">Express</MenuItem>
        {/* {session ? (
          <MenuItem href="/api/auth/signout?callbackUrl=/">
            nextAuth Logout
          </MenuItem>
        ) : (
          <MenuItem href="/api/auth/signin?callbackUrl=/">
            nextAuth Login
          </MenuItem>
        )} */}
      </SubMenu>

      <MenuItem href="/profile">Profile</MenuItem>
      <MenuItem href="/ClientProfile">Client Profile</MenuItem>
      <MenuItem href="/public">Public</MenuItem>

      <SubMenu label="Projects">
        <SubMenu label="Front-end" overflow="auto">
          {publicProjects.map((item, index) => (
            <MenuItem
              key={index}
              href={item.path}
            >{`${index + 1}. ${item.title}`}</MenuItem>
          ))}
        </SubMenu>
      </SubMenu>
    </Menu>
  );
};

export default MyMenu;
