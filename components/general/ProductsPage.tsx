"use client";

import { ProductsPageHostingProps } from "@/lib/types";
import ProductsCard from "./ProductsCard";
import { parseAsString, useQueryState } from "nuqs";
import { Input } from "../ui/input";
import { Label } from "@radix-ui/react-label";
import { Filter } from "lucide-react";
import { useState } from "react";
import { Button } from "../ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Check } from "lucide-react";
import clsx from "clsx";

export function ProductsPage({ Product }: ProductsPageHostingProps) {
  const [search, setSearch] = useQueryState(
    "search",
    parseAsString.withDefault("")
  );

  const filteredCategories = [...new Set(Product.products.map((product)=>product.category))];
  const [open, setOpen] = useState(false);
  const [categorySort, setCategorySort] = useQueryState(
    "categorySort",
    parseAsString.withDefault("")
  );
  return (
    <>
      <div className="flex justify-around items-center w-full max-w-6xl mx-auto p-4">
        <div className="flex flex-col gap-2">
          <Label>Search</Label>
          <Input
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
            }}
            placeholder="Search For Products"
          />
        </div>
        <div>
          <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                role="combobox"
                aria-expanded={open}
                className="w-[200px] justify-between"
              >
                {categorySort
                  ? categorySort.charAt(0).toUpperCase() + categorySort.slice(1)
                  : "Select Category..."}
                <Filter className="mr-2 h-4 w-4" />
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-[200px] p-0">
              <Command>
                <CommandInput placeholder="Search Category..." />
                <CommandList>
                  <CommandEmpty>No framework found.</CommandEmpty>
                  <CommandGroup>
                    {filteredCategories.map((category) => {
                      return (
                        <CommandItem
                          value={category}
                          key={category}
                          onSelect={(currentValue) => {
                            setCategorySort(currentValue);
                            setOpen(false);
                          }}
                        >
                          <Check
                            className={clsx(
                              "mr-2 h-4 w-4",
                              categorySort === category
                                ? "opacity-100"
                                : "opacity-0"
                            )}
                          />
                          {category.charAt(0).toUpperCase() +
                            category.slice(1)}
                        </CommandItem>
                      );
                    })}
                  </CommandGroup>
                </CommandList>
              </Command>
            </PopoverContent>
          </Popover>
        </div>
      </div>
      <div>
        {search && (
          <h1 className="text-start text-4xl">Search Results for &quot;{search}&quot;</h1>
        )}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
        {Product.products
          .filter(
            (product) =>
              search === "" ||
              product.title.toLowerCase().includes(search.toLowerCase())
          ).filter((product)=>(
            categorySort === "" ||
            product.category.toLowerCase() === categorySort.toLowerCase()
          ))
          .map((product) => (
            <ProductsCard {...product} key={product.id} />
          ))}
      </div>
    </>
  );
}
