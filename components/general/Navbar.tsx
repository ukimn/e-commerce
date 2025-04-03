import Link from "next/link";
import { RoutesClient } from "./RoutesClient";
import { ButtonModes } from "./ButtonModes";
import { BurgerMenu } from "./BurgerMenu";
import { AuthButton } from "./AuthButton";
import Image from "next/image";
import { auth } from "@/auth";
import { CartStoreIcon } from "./CartStoreIcon";
import { userType } from "@/lib/types";

export async function Navbar() {
  const session = await auth();
  return (
    <>
      <header className="hidden md:flex py-5 px-5 justify-between items-center border-b">
        <nav>
          <Link
            href="/"
            className="h1-animation cursor-pointer font-medium text-3xl"
          >
            Shopping
          </Link>
        </nav>
        <nav className="flex items-center gap-2">
          <RoutesClient />
          <ButtonModes />
        </nav>
        <nav className="flex items-center gap-2">
          <AuthButton type={session ? "signout" : "signin"} />
          {session?.user && (
            <Link
              className="transition-transform duration-200 hover:-translate-y-0.5"
              href={"/profile"}
            >
              <Image
                src={session?.user.image || ""}
                alt="Profile Logo"
                width={40}
                height={40}
                className="rounded-full"
              />
            </Link>
          )}
        </nav>
        <CartStoreIcon />
      </header>
      <header className="flex md:hidden justify-between items-center border-b py-7 px-4">
        <nav>
          <Link href="/" className="cursor-pointer font-medium text-3xl">
            Shopping
          </Link>
        </nav>
        <BurgerMenu session={session as userType} />
        <ButtonModes />
        <CartStoreIcon/>
      </header>
    </>
  );
}
