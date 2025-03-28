"use client";
import { Button } from "../ui/button";
import { signIn, signOut } from "next-auth/react";

export function AuthButton({ type }: { type: string }) {
  return (
    <>
      {type === "signin" ? (
        <form
          action={() => {
            signIn("github");
          }}
        >
          <Button type="submit">Sign in with GitHub</Button>
        </form>
      ) : (
        <form action={() => signOut()}>
          <Button type="submit">SignOut</Button>
        </form>
      )}
    </>
  );
}
