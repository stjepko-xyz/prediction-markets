import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function toPercent(
  value: number | string,
  decimals: number = 0
): string {
  const num = typeof value === "string" ? parseFloat(value) : value;
  if (isNaN(num)) return "0%";
  return `${(num * 100).toFixed(decimals)}%`;
}

export function formatCurrency(
  value: number | string,
  options?: { decimals?: number; currency?: string }
): string {
  const num = typeof value === "string" ? parseFloat(value) : value;
  if (isNaN(num)) return "$0";

  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: options?.currency ?? "USD",
    minimumFractionDigits: options?.decimals ?? 0,
    maximumFractionDigits: options?.decimals ?? 0,
  }).format(num);
}
