import { Menu, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { GoThreeBars } from "react-icons/go";

type Props = {};

const navBarTitle = [
  "Home",
  "Services",
  "Download eBook",
  "About us",
  "Contact",
];

function Mobile() {
  return (
    <div className=" w-56 text-right">
      <Menu as="div" className="relative inline-block text-left">
        <div>
          <Menu.Button className="inline-flex w-full justify-center rounded-md bg-gray-800 bg-opacity-20 px-4 py-2 text-xl font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
            <GoThreeBars />
          </Menu.Button>
        </div>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div className="px-1 py-1 ">
              {navBarTitle.map((name: string) => (
                <Menu.Item>
                  {({ active }) => (
                    <button
                      className={`${
                        active ? "bg-violet-500 text-white" : "text-gray-900"
                      } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                    >
                      {name}
                    </button>
                  )}
                </Menu.Item>
              ))}
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
}

function Navbar({}: Props) {
  return (
    <div className="sticky top-0 z-10 flex gap-8 w-full bg-purple-900 shadow-lg p-4">
      <div className="text-xl text-gray-300 drop-shadow-[1px_1px_2px_white] cursor-pointer">
        UHRSF
      </div>
      <ul className="hidden md:flex flex-1 gap-4">
        {navBarTitle.map((title) => {
          return (
            <li
              key={title}
              className="text-white text-lg hover:text-gray-400 cursor-pointer"
            >
              {title}
            </li>
          );
        })}
      </ul>
      <div className="md:hidden ml-auto text-white">
        <Mobile />
      </div>
    </div>
  );
}

export default Navbar;
