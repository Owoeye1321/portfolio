import type { ReactNode } from "react";
import { cn } from "../../utils/cn";

interface CardProps {
  children: ReactNode;
  className?: string;
  hoverable?: boolean;
}

export const Card = ({ children, className, hoverable = false }: CardProps) => {
  return (
    <div
      className={cn(
        "rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800",
        hoverable &&
          "transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-primary-300 dark:hover:border-primary-600",
        className
      )}
    >
      {children}
    </div>
  );
};
