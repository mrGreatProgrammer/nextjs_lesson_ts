import Image from "next/image";
import React from "react";
import { SearchIcon, 
    FlagIcon,
    PlayIcon,
    ShoppingCartIcon,
} from "@heroicons/react/outline";
import { HomeIcon, UserGroupIcon, ChatIcon, UserIcon, LogoutIcon, LoginIcon } from "@heroicons/react/solid";
import NavBar from "./NavBar/NavBar";
import { INavLink } from "../../types/nav";

const navBarData: INavLink[] = [
  {
    id: 1,
    icon: <HomeIcon className="h-6 " />,
    link: '/',
    title: "HOME"
  },
  {
    id: 2,
    icon: <UserGroupIcon className="h-6 " />,
    link: '/friends',
    title: "FRIENDS"
  },
  {
    id: 3,
    icon: <ChatIcon className="h-6 " />,
    link: '/messages',
    title: "MESSAGES"
  },
];

const Header = () => {
  return (
    <header className="sticky top-0 z-50 bg-white flex items-center p-2 lg:px-5 shadow-md" >
      <div className="header__leaft">
          <div className="logo__container">

          </div>
      </div>
     <NavBar data={navBarData} />
     <div className="header__right">

     </div>
    </header>
  );
};

export default Header;
