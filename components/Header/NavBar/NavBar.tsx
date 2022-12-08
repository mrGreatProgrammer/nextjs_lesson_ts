import Link from "next/link";
import React from "react";
import { navPropsType } from "../../../types/nav";
import ActiveLink from "./ActiveLink";

const NavBar = ({ data, className }: navPropsType) => {
  return (
    <nav>
      <ul className="flex flex-col md:flex-row space-x-3">
        {data.map((e, id) => (
          <li key={id}>
            <ActiveLink
              activeClassName="active__link"
              className={"flex justify-center flex-col items-center mx-1"}
              href={e.link}
            >
              <>
                {e.icon}
                <span className="text-sm font-normal" >{e.title}</span>
              </>
            </ActiveLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
