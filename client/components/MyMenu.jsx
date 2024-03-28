"use client";

import { Menu, MenuItem, MenuButton, SubMenu } from "@szhsin/react-menu";
import "@szhsin/react-menu/dist/index.css";
import "@szhsin/react-menu/dist/transitions/slide.css";
import Link from "next/link";

const MyMenuItem = ({ link, title }) => {
  return (
    <Link href={`/public/projects/front-end/${link}`}>
      <MenuItem>{title}</MenuItem>
    </Link>
  );
};

const MyMenu = () => {
  return (
    <Menu menuButton={<MenuButton>Menu</MenuButton>}>
      <MenuItem>New File</MenuItem>
      <MenuItem>Save</MenuItem>
      <SubMenu label="Projects">
        <SubMenu label="Front-end">
          <MyMenuItem link="01-qrcode" title="01. QR Code" />
          <MyMenuItem link="02-blogpreviewcard" title="02. Blog Preview Card" />
          <MyMenuItem link="03-recipe-page" title="03. Recipe Page" />
          <MyMenuItem link="04-faq" title="04. FAQ" />
          <MyMenuItem link="05-result-summary" title="05. Result Summary" />
          <MyMenuItem link="06-interactive-rating" title="06. Interactive Rating" />
        </SubMenu>
      </SubMenu>
    </Menu>
  );
};

export default MyMenu;
