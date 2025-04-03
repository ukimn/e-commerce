import { auth } from "@/auth";
import Image from "next/image";

export default async function Profile() {
  const session = await auth();

  return (
    <>
      <div className="flex items-center flex-col mt-5">
        <div className="flex flex-col justify-around items-center border py-14 px-10 rounded-sm gap-4">
          <div>
            {session?.user && (
              <Image
                src={session.user.image || ""}
                alt="User Image"
                width={150}
                height={150}
                className="rounded-full"
              />
            )}
          </div>
          <div className="flex flex-col items-center">
            <h1 className="text-2xl font-extrabold my-3">Name</h1>
            {session?.user && <h1>{session?.user.name}</h1>}
            <h1 className="text-2xl font-extrabold my-3">Email</h1>
            {session?.user && <h1>{session?.user.email}</h1>}
          </div>
          <a
            href="https://github.com"
            target="_blank"
            className="inline-block font-medium rounded-lg py-3 px-6 text-lg shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-opacity-75"
          >
            Explore on GitHub →
          </a>
        </div>
      </div>
    </>
  );
}
