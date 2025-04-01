import * as React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { comments } from "@/lib/data";
import { CommentCard } from "./CommentCard";

export function Comments() {
  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-5xl mt-12 mb-6">Our Customers</h1>
      <Carousel
        opts={{
          align: "start",
          watchSlides: true,
        }}
        orientation="horizontal"
        className="w-full max-w-xs"
      >
        <CarouselContent className="-mt-1 h-[300px]">
          {comments.map((comment, index) => (
            <CarouselItem key={index} className="pt-1">
              <div className="p-1">
                <CommentCard {...comment} />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
}
