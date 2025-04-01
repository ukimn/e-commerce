"use client";

import { HomeCard } from "@/components/general/HomeCard";
import { HomeCardData } from "@/lib/HomeCardData";
import Link from "next/link";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import HomePageAnimation from "./lottieFiles/HomePageAnimation.json";
import { Comments } from "@/components/general/Comments";
export default function Home() {
  return (
    <div>
      <div className="h-[60vh] flex items-center my-20">
        <div>
          <DotLottieReact
            src={"/HomePageAnimation.lottie"}
            autoplay
            loop
            className="hidden md:block w-[500px] h-[500px]"
          />
        </div>
        <div className="mx-auto flex flex-col items-center justify-center gap-3">
          <h1 className="text-6xl mb-4 h1-animation items-center max-sm:text-5xl">Hello, Shopping</h1>
          <p className="mt-3 text-lg text-gray-500">The Gate of shopping</p>
          <Link
            className="button"
            href={"/products"}
          >
            Go Shopping
          </Link>
        </div>
      </div>
      <div className="flex justify-center items-center my-12">
        <h1 className="text-6xl my-6 text-center">Why Shopping</h1>
      </div>
      <div>
        {HomeCardData.map((card) => {
          return (
            <HomeCard
              id={card.id}
              key={card.id}
              animation={card.animation}
              topic={card.topic}
              description={card.description}
            />
          );
        })}
      </div>
      <div className="h-[50vh] flex flex-col justify-center items-center">
        <div className="flex justify-center items-center my-12">
          <Comments />
        </div>
      </div>
    </div>
  );
}
