import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function FormatDate(date: number | Date): string {
  const formatData = new Intl.DateTimeFormat("en-US", {
    year: "2-digit",
    month: "short",
    day: "numeric"
  });

  // Convert numeric timestamp to Date if needed
  const dateObj = typeof date === 'number' ? new Date(date) : date;
  
  return formatData.format(dateObj);
}

export function FormatPrice(price: number): string {
  const formatPrice = Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(price);
  return formatPrice;
}