import React from "react";

interface NavLink {
  name: string;
  href: string;
  isActive?: boolean;
}

const navLinks: NavLink[] = [
  { name: "USD", href: "#", isActive: true },
  { name: "UK", href: "#" },
  { name: "Canada", href: "#" },
  { name: "India", href: "#" },
  { name: "Australia", href: "#" },
  { name: "DeFi Crypto", href: "#" },
];

const Navbar: React.FC = () => {
  return (
    <nav className=" border-gray-200 py-3 bg-[#111133]">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <span className="self-center text-3xl font-bold whitespace-nowrap text-white">
            Ethereum Price
          </span>
        </a>
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm  rounded-lg md:hidden  focus:outline-none focus:ring-2  text-gray-400 hover:bg-gray-700 focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul className="font-medium text-base flex flex-col p-4 md:p-0 mt-4 border  rounded-lg  md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0  bg-gray-800 md:bg-transparent border-gray-700">
            {navLinks.map((link) => (
              <li className="px-3" key={link.name}>
                <a
                  href={link.href}
                  className={`block py-2  md:border-0  text-white md:hover:text-blue-500 hover:bg-gray-700 hover:text-white md:hover:bg-transparent rounded md:p-0 
                    ${link.isActive ? " underline" : " "}`}
                  aria-current={link.isActive ? "page" : undefined}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
