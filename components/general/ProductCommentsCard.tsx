import { commentTypes } from "@/lib/types";
import {
    Card,
    CardHeader,
    CardContent,
    CardFooter,
  } from "../ui/card";
  import { FormatDate } from "@/lib/utils";
  
  export function CommentCardProduct({
    reviewerName: name,
    reviewerEmail: email,
    date,
    comment: review,
  }: commentTypes) {
    return (
      <Card className="w-full max-w-md shadow-sm hover:shadow-md transition-shadow">
        <CardHeader className="p-4 pb-2">
          <div className="flex flex-col">
            <h3 className="text-sm font-semibold">{name}</h3>
            <p className="text-xs text-gray-500 truncate">{email}</p>
          </div>
        </CardHeader>
        
        <CardContent className="p-4 pt-0">
          <p className="text-sm text-gray-700 break-words">{review}</p>
        </CardContent>
        
        <CardFooter className="p-4 pt-0">
          <span className="text-xs text-gray-400">
            {FormatDate(new Date(date))}
          </span>
        </CardFooter>
      </Card>
    );
  }