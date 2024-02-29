import React from "react";
import { NavLink } from "react-router-dom";

interface NavigationItem {
  name: string;
  to: string;
}

const navigation: NavigationItem[] = [
  { name: "Home", to: "/" },
  { name: "History", to: "/history" },
];
const Navbar: React.FC = () => {
  return (
    <>
      <nav className="w-full  flex justify-center  items-center mt-10">
        <ul>
          <li>
            {navigation.map((item) => (
              <NavLink
                key={item.name}
                to={item.to}
                className={({ isActive }) => {
                  return (
                    " p-3 h-1/2 rounded-md text-2xl " +
                    (isActive ? "  font-bold text-red-500 	 " : null)
                  );
                }}
              >
                {item.name}
              </NavLink>
            ))}
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
