"use client";
import { Menu, XCircle } from "lucide-react";
import { useState } from "react";
import { Button } from "../ui/button";
import { Routes } from "@/lib/data";
import Link from "next/link";
import { AuthButton } from "./AuthButton";

export function BurgerMenu({session}: {session: any}) {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div className="relative">
      <Button
        variant="ghost"
        size="icon"
        onClick={() => setIsOpen((prev) => !prev)}
        aria-label={isOpen ? "Close menu" : "Open menu"}
      >
        {isOpen ? (
          <XCircle className="h-6 w-6" />
        ) : (
          <Menu className="h-6 w-6" />
        )}
      </Button>

      {isOpen && (
        <div className={`
          absolute top-12 right-0 
          w-60 rounded-md shadow-lg 
          bg-background dark:bg-dark-background
          border border-border dark:border-dark-border
          z-50 overflow-hidden
        `}>
          <div className="flex flex-col gap-2 p-2">
            {Routes.map((route) => (
              <Link
                key={route.id}
                href={route.route}
                onClick={() => setIsOpen(false)}
                className={`
                  px-4 py-2 rounded-md text-lg
                  text-foreground dark:text-dark-foreground
                  hover:bg-primary/10 dark:hover:bg-dark-primary/20
                  transition-colors
                `}
              >
                {route.title}
              </Link>
            ))}
            <div className="flex items-center justitfy-around gap-2">
              <AuthButton type={session ? "signout" : "signin"}/>
              {session?.user && <Link className="transition-transform duration-200 hover:-translate-y-0.5" href={"/profile"}>{session.user.name}</Link>}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}