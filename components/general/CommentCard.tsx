import {
  Card,
  CardTitle,
  CardContent,
  CardDescription,
  CardFooter,
} from "../ui/card";
import Image from "next/image";
import { CommentCardProps } from "@/lib/types";
import { FormatDate } from "@/lib/utils";

export function CommentCard({
  image,
  Name,
  date,
  description,
}: CommentCardProps) {
  return (
    <Card className="w-[300px]">
      {" "}
      {/* Fixed width or use max-w-xs */}
      <CardContent className="p-3">
        {" "}
        {/* Reduce padding */}
        <div className="flex justify-around items-center gap-2 mx-2 my-1">
          {" "}
          {/* Reduce margins */}
          <Image
            src={image}
            alt={`${Name}'s image`}
            width={40}
            height={40}
            className="rounded-full"
          />
          <CardTitle className="text-xl">{Name}</CardTitle> {/* Smaller text */}
        </div>
        <CardDescription className={`text-sm break-words line-clamp-2`}>
          {" "}
          {/* Smaller text + line clamp */}
          {description}
        </CardDescription>
      </CardContent>
      <CardFooter className="p-3 text-xs">
        {" "}
        {/* Smaller padding and text */}
        <span>{FormatDate(date).toString()}</span>
      </CardFooter>
    </Card>
  );
}
