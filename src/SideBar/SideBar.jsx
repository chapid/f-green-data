import React from "react";
import { Link, useLocation } from "react-router-dom";
import classNames from "classnames";

import { FcLandscape } from "react-icons/fc";
import { GrLogout } from "react-icons/gr";
import { DASHBOARD_SIDEBAR_FOOTER_ITEMS, DASHBOARD_SIDEBAR_ITEMS } from "../lib/consts/navigation";

const linkClasses = "flex items-center gap-2 font-light px-3 py-2 hover:bg-neutral-700 hover:no-underline active:bg-neutral-800 rounded-sm text-base";

function SideBar() {

  return (
    <div className="bg-neutral-900 w-60 p-3 flex flex-col text-white">
      <div className="flex items-center gap-2 px-1 py-3">
        <FcLandscape fontSize={30} />
        <span className="text-neutral-100 text-lg font-bold">Green Data</span>
      </div>
      <div className="flex-1 py-8 flex flex-col gap-0.5">
        {DASHBOARD_SIDEBAR_ITEMS.map((item) => (
          <SideBarLink key={item.key} item={item} />
        ))}
      </div>
      <div className="flex flex-col gap-0.5 pt-2 border-t border-neural-700">
        {DASHBOARD_SIDEBAR_FOOTER_ITEMS.map((item) => (
          <SideBarLink key={item.key} item={item} />
        ))}
      </div>
      <div className={classNames("text-red-500 cursor-pointer", linkClasses)}>
        <span className="text-xl"><GrLogout /></span>
        Logout
      </div>
    </div>
  );

};

function SideBarLink({ item }) {

  const { pathname } = useLocation();
  return (
    <Link to={item.path} className={classNames(pathname === item.path ? "bg-neutral-700 text-white" : "text-neutral-400", linkClasses)}>
      <span className="text-xl">{item.icon}</span>
      {item.label}
    </Link>
  )
}

export { SideBar };