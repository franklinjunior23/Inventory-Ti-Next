"use client";
import { IconChevronDown, IconLayoutDashboard } from "@tabler/icons-react";
import Link from "next/link";
import UserConf from "./UserConf";

import { StateMenuDash } from "@/app/States/Menu/MenState";
import { Menu_support_user } from "@/app/Data/Menu/DataMenu";

export default function Navbar() {
  const { ActiveMen, HandleActiveMenu } = StateMenuDash();
  return (
    <header className=" flex flex-col justify-between bg-black/90 rounded-xl md:rounded-RadiosMd md:px-5 md:pt-7 md:pb-6 py-5 px-1 text-white relative">
      <button
        onClick={HandleActiveMenu}
        className="absolute top-[50%] -right-3 shadow-lg px-2 py-1 text-xl rounded-full bg-white text-black"
      >
        {">"}
      </button>
      {/*Logo para la application */}
      <main>
        <Link
          href={"/dashboard"}
          className=" pb-10   border-white/30 flex justify-center items-center text-xl gap-3"
        >
          <img
            src="https://www.intiscorp.com.pe/wp-content/uploads/2022/10/1-1-1.png"
            alt=""
            className="w-10 md:w-16"
          />

          {/* <h2>INTISCORP</h2> */}
          <h2 className="hidden md:block text-2xl">Inventory It</h2>
        </Link>


        <ul className="h-[600px] overflow-y-auto ">
          {Menu_support_user.map((ItemNavigation, index) => (
            <li className="flex items-center gap-3 hover:bg-gray-600  transition-all px-3 rounded-lg py-3 my-1 relative" key={index}>
             { ItemNavigation.icon}
              <span className="text-lg hidden md:block">{ItemNavigation.label}</span>
              {ItemNavigation.more?.length !==0 && (<IconChevronDown className="absolute  right-2"/>)}
            </li>
          ))}
        </ul>


      </main>
      {/*Bottom for user */}
      <UserConf ActiveMenu={ActiveMen} />
    </header>
  );
}
