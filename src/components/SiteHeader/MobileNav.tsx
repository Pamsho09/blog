import React from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

function MobileNav({
  items: routes,
}: {
  items: {
    name: string;
    path: string;
  }[];
}) {
  return (
    <Sheet>
      <SheetTrigger className="sm:hidden font-bold underline">Menu</SheetTrigger>
      <SheetContent className="grid place-items-start">
        <nav className="flex-col">
          <ul className="flex-1 flex-col flex space-y-8">
            {routes.map((route, index) => (
              <li key={index} className="font-bold text-4xl">{route.name}</li>
            ))}
          </ul>
        </nav>
      </SheetContent>
    </Sheet>
  );
}

export default MobileNav;
