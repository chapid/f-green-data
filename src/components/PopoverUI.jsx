//https://headlessui.com/react/menu

import { Popover, PopoverButton, PopoverPanel } from '@headlessui/react';

function PopoverUI({ buttonTitle, menuItems }) {
  return (
    <Popover className="relative">
      <PopoverButton className="p-1.5 rounded-sm inline-flex items-center text-neutral-900 focus:outline-none data-[active]:text-neutral-400 data-[hover]:text-neutral-300">
        {buttonTitle}
      </PopoverButton>
      <PopoverPanel
        transition
        anchor="bottom"
        className="p-0.2 divide-y divide-white/80 rounded-xl bg-neutral-950/80 text-sm/6 transition duration-200 ease-in-out [--anchor-gap:var(--spacing-5)] data-[closed]:-translate-y-1 data-[closed]:opacity-0"
      >
        {menuItems.map((item, index) => (
          <div key={index} className="p-3">
            <a className="block rounded-lg py-2 px-3 transition hover:bg-white/20" href={item.href}>
              <p className="font-semibold text-white">{item.title}</p>
              <p className="text-white/50">{item.description}</p>
            </a>
          </div>
        ))}
      </PopoverPanel>
    </Popover>
  );
}

export { PopoverUI };