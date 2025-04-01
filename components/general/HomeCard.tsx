"use client";

import dynamic from "next/dynamic";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { HomeCardProps } from "@/lib/types";

const LottiePlayer = dynamic(
  () => import("@lottiefiles/react-lottie-player").then((mod) => mod.Player),
  { ssr: false }
);

export function HomeCard({ animation, topic, description }: HomeCardProps) {
  return (
    <Card className={`flex my-9 flex-col md:flex-row overflow-hidden`}>
      <div className="w-full md:w-1/3 p-4 flex justify-center">
        <LottiePlayer
          src={animation}
          autoplay
          loop
          className="w-full h-[200px] md:h-[250px]"
        />
      </div>
      <div className="w-full md:w-2/3 p-6">
        <CardHeader>
          <CardTitle className="text-2xl font-bold">{topic}</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground mt-4">{description}</p>
        </CardContent>
      </div>
    </Card>
  );
}