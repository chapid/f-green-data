import React from "react";

import { MENU_ITEMS_MESSAGES, MENU_ITEMS_NOTIFICATIONS, MENU_ITEMS_PROFILE } from "../lib/consts/menuItemsHeader";
import { GrChat, GrNotification } from "react-icons/gr";
import { PopoverUI } from "../components/PopoverUI";

function Header() {

  return (
    <div className="bg-white h-16 px-4 flex justify-between items-center border-b border-gray-200">
      <div></div>
      <div className="flex items-center gap-2 mr-2">
        <PopoverUI buttonTitle={<GrChat fontSize={24} />} menuItems={MENU_ITEMS_MESSAGES} />
        <PopoverUI buttonTitle={<GrNotification fontSize={24} />} menuItems={MENU_ITEMS_NOTIFICATIONS} />
        <PopoverUI buttonTitle={
          <div className="ml-2 inline-flex rounded-full focus:outline-none focus:ring-2 focus:ring-neutral-400">
            <div
              className="h-10 w-10 rounded-full bg-sky-500 bg-cover bg-no-repeat bg-center"
              style={{
                backgroundImage:
                  'url("https://res.cloudinary.com/stealthman22/image/upload/v1586308023/new-portfolio/hero/two-cargo-ships-sailing-near-city-2144905.jpg")',
              }}>
            </div>
          </div>
        } menuItems={MENU_ITEMS_PROFILE} />

      </div>
    </div >
  );
}

export { Header };