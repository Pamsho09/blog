import MainNav from "./MainNav";
import MobileNav from "./MobileNav";
import { ThemeToggle } from "./ThemeToggle";

const Index = () => {
  const routes = [
    {
      name: "Blog",
      path: "/blog",
    },
    {
      name: "Projects",
      path: "/projects",
    },
    {
      name: "About",
      path: "/about",
    },
  ];

  return (
    <header className="flex sticky  top-0 z-40 w-full bg-background/50 backdrop-blur-md justify-between px-8 sm:px-0 py-14 h-16 items-center box-border">
      <p className="font-extrabold w-1/2  font-nunito text-3xl sm:text-5xl animate-gradient text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-500 via-red-600 to-orange-400">
        Pamsho_
      </p>
      <div className=" w-1/2  md:w-full flex items-center flex-row-reverse md:flex-row  justify-between md:justify-end ">
       
        <MainNav items={routes} />
        <MobileNav items={routes} />
        <ThemeToggle />
      </div>
    </header>
  );
};
export default Index;
