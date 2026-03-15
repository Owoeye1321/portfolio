import { cn } from "../../utils/cn";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  className?: string;
}

export const SectionHeading = ({
  title,
  subtitle,
  align = "center",
  className,
}: SectionHeadingProps) => {
  return (
    <div
      className={cn(
        "mb-12",
        align === "center" && "text-center",
        align === "left" && "text-left",
        className
      )}
    >
      <h2 className="text-3xl font-bold text-slate-900 dark:text-white sm:text-4xl">
        {title}
      </h2>
      <div
        className={cn(
          "mt-3 h-1 w-16 rounded-full bg-primary-600",
          align === "center" && "mx-auto"
        )}
      />
      {subtitle && (
        <p className="mt-4 text-lg text-slate-600 dark:text-slate-400">
          {subtitle}
        </p>
      )}
    </div>
  );
};
