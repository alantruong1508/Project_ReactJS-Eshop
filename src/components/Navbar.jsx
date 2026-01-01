import { FaBars, FaCaretDown, FaCartShopping } from "react-icons/fa6";
import { IoMdSearch } from "react-icons/io";
import DarkMode from "./DarkMode";
import { useState } from "react";
import { FaTimes } from "react-icons/fa";

const MenuLinks = [
  {
    id: 1,
    name: "Home",
    link: "/#",
  },
  {
    id: 2,
    name: "Shop",
    link: "/#shop",
  },
  {
    id: 3,
    name: "About",
    link: "/#about",
  },
  {
    id: 4,
    name: "Blogs",
    link: "/#blog",
  },
];

const DropdownLinks = [
  {
    id: 1,
    name: "Trending Products",
    link: "/#",
  },
  {
    id: 2,
    name: "Best Selling",
    link: "/#",
  },
  {
    id: 3,
    name: "Top Rated",
    link: "/#",
  },
];

export default function Navbar() {
  // useState để quản lý trạng thái đóng/mở của thanh navbar trên thiết bị di động
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="dark:bg-gray-900 dark:text-white duration-200 relative z-40">
      <div className="py-4">
        <div className="container mx-auto px-4 flex justify-between items-center ">
          {/* logo và các thẻ link bên trái */}
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-4">
              {/* logo Eshop */}
              <a
                href="#"
                className="text-primary font-semibold tracking-widest text-2xl uppercase sm:text-3xl"
              >
                Eshop
              </a>

              {/* Hamburger Icon (Chỉ hiện trên mobile < sm) */}
              <div
                className="lg:hidden text-neutral-500"
                onClick={() => setMenuOpen(!menuOpen)}
              >
                {menuOpen ? <FaTimes size={25} /> : <FaBars size={25} />}
              </div>
            </div>

            {/* Mobile Dropdown Box */}
            {/* Hiển thị dựa trên trạng thái menuOpen và chỉ ở màn hình nhỏ */}
            <div
              className={`${
                menuOpen ? "block" : "hidden"
              } lg:hidden absolute top-full left-0 w-full shadow-md py-4 flex flex-col items-center gap-4 bg-white`}
            >
              <ul className="flex flex-col items-center gap-4 text-neutral-500">
                <li className="rounded-md hover:bg-primary/20 px-4 block w-[100px] text-center">
                  <a href="/" onClick={() => setMenuOpen(false)}>
                    Home
                  </a>
                </li>
                <li className="rounded-md hover:bg-primary/20 px-4 block w-[100px] text-center">
                  <a href="/shop" onClick={() => setMenuOpen(false)}>
                    Shop
                  </a>
                </li>
                <li className="rounded-md hover:bg-primary/20 px-4 block w-[100px] text-center">
                  <a href="/about" onClick={() => setMenuOpen(false)}>
                    About
                  </a>
                </li>
              </ul>
              <div className="relative group sm:hidden">
                <input
                  type="text"
                  placeholder="Search"
                  className="search-bar"
                />
                <IoMdSearch className="text-xl text-gray-600 group-hover:text-primary dark:text-gray-400 absolute top-1/2 -translate-y-1/2 right-3 duration-200" />
              </div>
            </div>

            {/* các thẻ menu link */}
            <div className="hidden lg:block">
              <ul className="flex items-center gap-4">
                {MenuLinks.map((data, index) => (
                  <li key={index}>
                    <a
                      href={data.link}
                      className="inline-block px-4 font-semibold text-gray-500 hover:text-black dark:hover:text-white duration-200"
                    >
                      {data.name}
                    </a>
                  </li>
                ))}
                {/* drop down menu */}
                <li className="relative cursor-pointer group">
                  <a
                    href="#"
                    className="flex items-center gap-[2px] font-semibold text-gray-500 dark:hover:text-white py-2"
                  >
                    {" "}
                    Quick Links{" "}
                    <span>
                      <FaCaretDown className="group-hover:rotate-180 duration-300" />
                    </span>
                  </a>

                  {/* dropdown links */}
                  <div className="absolute z-[9999] hidden group-hover:block w-[200px] rounded-md bg-white shadow-md dark:bg-gray-900 p-2 text-black dark:text-white">
                    <ul className="space-y-2">
                      {DropdownLinks.map((data) => (
                        <li key={data.id}>
                          <a
                            href={data.link}
                            className="text-gray-500 hover:text-black dark:hover:text-white duration-200 p-2 hover:bg-primary/20 inline-block w-full rounded-md font-semibold"
                          >
                            {data.name}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          {/* thanh navbar bên phải */}
          <div className="flex justify-between items-center gap-4">
            {/* thanh search bar */}
            <div className="relative group hidden sm:block">
              <input type="text" placeholder="Search" className="search-bar" />
              <IoMdSearch className="text-xl text-gray-600 group-hover:text-primary dark:text-gray-400 absolute top-1/2 -translate-y-1/2 right-3 duration-200" />
            </div>
            {/* nút shop */}
            <button className="relative p-3">
              <FaCartShopping className="text-xl text-gray-600 dark:text-gray-400 " />
              <div className="w-4 h-4 bg-red-500 text-white rounded-full absolute top-0 right-0 flex items-center justify-center text-xs">
                4
              </div>
            </button>
            {/* nút tạo dark mode */}
            <div>
              <DarkMode />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
