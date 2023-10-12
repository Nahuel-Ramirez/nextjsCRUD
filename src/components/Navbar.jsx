import Link from "next/link";
import React from "react";

function Navbar() {
  return (
    <nav className="bg-slate-900">
      <div className="container mx-auto flex justify-between items-center py-3">
        <h3 className="font-bold text-3xl text-slate-300 hover:text-slate-200 cursor-pointer transition-all">
          <Link href="/">NextCRUD</Link>
        </h3>

        <ul className="flex gap-x-5 font-bold text-lg px-2">
          <li className="text-slate-300 hover:text-slate-200 transition-all">
            <Link href="/new">New task</Link>
          </li>
          <li className="text-slate-300 hover:text-slate-200 transition-all">
            <Link href="/about">About</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
