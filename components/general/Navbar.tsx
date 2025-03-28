import Link from "next/link";
import { Routes } from "@/lib/data";
import { ButtonModes } from "./ButtonModes";
import { BurgerMenu } from "./BurgerMenu";
import { AuthButton } from "./AuthButton";
import { auth } from "@/auth";

export async function Navbar() {
  const session = await auth();
  return (
    <>
      <header className="hidden md:flex py-5 px-5 justify-between items-center border-b">
        <nav>
          <Link href="/" className="cursor-pointer font-medium text-3xl">
            Shopping
          </Link>
        </nav>
        <nav className="flex items-center gap-2">
          {Routes.map((route) => (
            <Link
              href={route.route}
              className="text-lg cursor-pointer transition-transform hover:-translate-y-0.5 border-white"
              key={route.id}
            >
              {route.title}
            </Link>
          ))}
        </nav>
        <nav className="flex items-center justify-center">
          <ButtonModes />
        </nav>
        <nav className="flex items-center gap-2">
          <AuthButton type={session ? "signout" : "signin"}/>
          {session?.user && <Link className="transition-transform duration-200 hover:-translate-y-0.5" href={"/profile"}>{session.user.name}</Link>}
        </nav>
      </header>
      <header className="flex md:hidden justify-between items-center border-b py-7 px-4">
        <nav>
          <Link href="/" className="cursor-pointer font-medium text-3xl">
            Shopping
          </Link>
        </nav>
        <BurgerMenu session={session}/>
        <ButtonModes/>
      </header>
    </>
  );
}
