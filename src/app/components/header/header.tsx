"use client";

import Link from "next/link";
import HeaderScrollHandler from "./header_scroll_handler";
import { useState } from "react";
import { primary_menu } from "@/config/config";

function Header() {
  const [scrolled, setScroll] = useState(0);
  return (
    <div
      className={`md:p-4 px-2 py-4 w-full fixed top-0 left-0 z-50 transition-all translate-0.5 ${
        scrolled > 100
          ? "bg-white text-black shadow-[0_4px_6px_-1px_rgba(0,0,0,0.3)]"
          : "text-white"
      }`}
    >
      <HeaderScrollHandler dispatch={setScroll} />

      <div className="max-w-7xl mx-auto">
        <header className="flex justify-between items-center">
          <h1 className="text-2xl font-semibold">Prep Ecom Solutions</h1>
          {/* Desktop */}
          <DesktopNav />
        </header>
      </div>
    </div>
  );
}

function DesktopNav() {
  return (
    <nav className="flex gap-4">
      {primary_menu.map((each) => (
        <Link
          key={each.link}
          href={each.link}
          className="p-2 capitalize font-semibold hover:text-primary transition-all translate-0.5"
        >
          {each.name}
        </Link>
      ))}
    </nav>
  );
}

export default Header;
