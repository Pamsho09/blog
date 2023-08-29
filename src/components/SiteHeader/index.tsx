import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import React from "react";
import MainNav from "./MainNav";
import MobileNav from "./MobileNav";

const Index = () => {
  const routes = [
    {
      name: "Home",
      path: "/",
    },
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
    <header className="w-full flex  justify-between px-8 sm:px-0 py-4 h-16 items-center fixed md:sticky box-border bg-black/70  ">
      <p className="font-extrabold font-nunito text-3xl sm:text-5xl animate-gradient text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-500 via-red-600 to-orange-400">Pamsho_</p>
      <MainNav items={routes} />
      <MobileNav items={routes} />
    </header>
  );
};
export default Index;
