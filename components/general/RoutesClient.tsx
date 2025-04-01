"use client";

import Link from "next/link";
import { Routes } from "@/lib/data";
import { usePathname } from "next/navigation";

export function RoutesClient() {
  const pathname = usePathname();
  return (
    <>
      {Routes.map((route) => (
        <Link
          href={route.route}
          className={`text-lg cursor-pointer ${pathname === route.route ? "bg-gray-400 text-black rounded-sm py-2 px-2" : ""} transition-transform hover:-translate-y-0.5 border-white`}
          key={route.id}
        >
          {route.title}
        </Link>
      ))}
    </>
  );
}
