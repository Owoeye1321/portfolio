import type { ReactNode } from "react";
import { cn } from "../../utils/cn";

type BadgeVariant = "primary" | "secondary" | "outline";
type BadgeSize = "sm" | "md";

interface BadgeProps {
  children: ReactNode;
  variant?: BadgeVariant;
  size?: BadgeSize;
  className?: string;
}

const variantStyles: Record<BadgeVariant, string> = {
  primary:
    "bg-primary-100 text-primary-700 dark:bg-primary-900/30 dark:text-primary-300",
  secondary:
    "bg-slate-100 text-slate-700 dark:bg-slate-700 dark:text-slate-300",
  outline:
    "border border-slate-300 text-slate-600 dark:border-slate-600 dark:text-slate-400",
};

const sizeStyles: Record<BadgeSize, string> = {
  sm: "px-2 py-0.5 text-xs",
  md: "px-3 py-1 text-sm",
};

export const Badge = ({
  children,
  variant = "secondary",
  size = "sm",
  className,
}: BadgeProps) => {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full font-medium",
        variantStyles[variant],
        sizeStyles[size],
        className
      )}
    >
      {children}
    </span>
  );
};
