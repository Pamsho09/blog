import React from "react";

function MainNav({
  items: routes,
}: {
  items: {
    name: string;
    path: string;
  }[];
}) {
  return (
    <nav className=" hidden sm:flex sm:w-[50%] md:w-[30%] justify-end">
      <ul className="flex-1 gap-4 grid grid-cols-3 justify-center items-end">
        {routes.map((route, index) => (
          <li
            className="box-border  hover:font-extrabold  cursor-pointer   text-sm md:text-lg lg:text-xl  hover:bg-clip-text  hover:text-transparent  animate-gradient text-right
          hover:bg-gradient-to-tr  hover:from-violet-500  hover:to-orange-300 rounded" key={index}
          >
            {route.name}
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default MainNav;
