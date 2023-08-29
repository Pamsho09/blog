import dayjs from "dayjs";
import React from "react";

function SiteFooter() {
  return (
    <footer className="w-full h-16 grid md:flex md:justify-between md:items-center place-items-center md:pl-0 md:pr-0 md:pt-12 md:pb-12">
      <span className="w-full text-center md:text-left text-sm">
        <b>Pamsho_</b> {dayjs().get("years")} copyright all rights reserved
      </span>
    </footer>
  );
}

export default SiteFooter;
