import React from "react";
import Link from "next/link";
export default function Header() {
  return (
    <div className="shadow-md flex items-center p-6  md:gap-[100px]">
      <h1 className="text-2xl font-bold tracking-tight">
        <Link href="/pages">Cyclus</Link>
      </h1>
      <div className="hidden md:flex gap-8 text-md font-light">
        <p className="border-b-2 border-gray-900 h-full">
          <Link href="/pages">Dashboard</Link>
        </p>
        <p>
          <Link href="/pages/lists">Lijsten</Link>
        </p>
        <p>
          <Link href="/pages/park-management">Parkbeheer</Link>
        </p>
      </div>
    </div>
  );
}
