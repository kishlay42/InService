import { NavLink } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };
  

  const getNavLinkClass = ({ isActive }) => {
    return isActive
      ? "text-blue-500 underline md:p-4 px-0 block"
      : "text-gray-900 hover:text-blue-400 md:p-4 px-0 block";
  };
 
  return (
    <div className="fixed top-0 left-0 right-0 md:px-24 px-4 md:pt-10 flex flex-wrap items-center py-2  bg-transparent z-50 font-semibold animate-y">
      <div >
        <div className="flex flex-row">
          <NavLink className="flex-1 flex justify-between items-center" to="/"
          exact
          >
            <img src="/logo3.png" alt="logo" className="md:w-56 md:h-20 max-md:w-44 max-md:mt-2" />
          </NavLink>
          <button
            htmlFor="menu-toggle"
            className="pointer-cursor md:hidden block absolute right-4 top-8"
            onClick={toggle}
          >
            {isOpen ? (
              <svg
                className="fill-current text-gray-900"
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
              >
                <title>close</title>
                <path d="M10 8.586L15.293 3.293l1.414 1.414L11.414 10l5.293 5.293-1.414 1.414L10 11.414l-5.293 5.293-1.414-1.414L8.586 10 3.293 4.707l1.414-1.414L10 8.586z"></path>
              </svg>
            ) : (
              <svg
                className="fill-current text-gray-900"
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
              >
                <title>menu</title>
                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
              </svg>
            )}
          </button>{" "}
        </div>

        <div>
          {isOpen && (
            <div className="right-2 absolute rounded-md w-[30%] px-4 top-[10%] bg-slate-300 flex-col flex  ">
              <nav>
                <ul className="md:flex items-center justify-between text-xl font-sans  text-gray-700 pt-4 md:pt-0 md:gap-10 md:pr-10 ">
                  <li>
                    <NavLink
                    
                      className="md:p-4 px-0 block "
                      to="/about"
                    >
                      About us
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      className="md:p-4 px-0 block  "
                      to="/services"
                    >
                      Service
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      className="md:p-4 px-0 block  "
                      to="/contact"
                    >
                      Contact us
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      className="md:p-4 px-0 block  md:mb-0 mb-2"
                      to="/JoinUs"
                    >
                      JoinUs
                    </NavLink>
                  </li>
                </ul>
              </nav>
            </div>
          )}
        </div>
      </div>

      {/* desktop navbar */}
      <div
        className="hidden md:flex md:ml-[680px] md:w-auto w-full"
        id="menu"
      >
        <nav>
          <ul className="md:flex  text-xl font-sans  text-gray-700 pt-4 md:pt-0 md:gap-10 md:pr-10 ">
            <li>
              <NavLink
            className={getNavLinkClass}
            to="/about"

              >
                About us
              </NavLink>
            </li>
            <li>
              <NavLink
            className={getNavLinkClass}
            to="/services"
              >
                Service
              </NavLink>
            </li>
            <li>
              <NavLink
            className={getNavLinkClass}
            to="/contact"
              >
                Contact us
              </NavLink>
            </li>
            <li>
              <NavLink
            className={getNavLinkClass}
            to="/JoinUs"
              >
                JoinUs
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
