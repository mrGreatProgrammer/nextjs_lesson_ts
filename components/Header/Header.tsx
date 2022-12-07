import Image from "next/image";
import React from "react";
import { SearchIcon, 
    FlagIcon,
    PlayIcon,
    ShoppingCartIcon
} from "@heroicons/react/outline";
import { HomeIcon, UserGroupIcon } from "@heroicons/react/solid";
import HeaderIcon from "./HeaderIcon";

const Header = () => {
  return (
    <div className="sticky top-0 z-50 bg-white flex items-center p-2 lg:px-5 shadow-md" >
        {/* Left */}
      <div className="left flex items-center">
        <div className="logo__container">
          <Image
            src="https://links.papareact.com/5me"
            width={40}
            height={40}
            layout={"fixed"}
            alt="logo_fb"
          />
        </div>
        <div className="input__container flex ml-2 items-center rounded-full bg-gray-100 p-2">
          <SearchIcon className="h6 text-gray-600"  width={"20"} />
          <input
            className="flex ml-2 items-center bg-transparent outline-none placeholder-gray-500"
            type="text"
            placeholder="Search Facebook"
          />
        </div>
      </div>
      {/* Center */}
        <div className="flex justify-center flex-grow">
            <div className="flex space-x-6 md:space-x-2">
                <HeaderIcon Icon={HomeIcon} />
                <HeaderIcon Icon={FlagIcon} />
                <HeaderIcon Icon={PlayIcon} />
                <HeaderIcon Icon={ShoppingCartIcon} />
                <HeaderIcon Icon={UserGroupIcon} />
            </div>
        </div>
      {/* Right */}
    </div>
  );
};

export default Header;
