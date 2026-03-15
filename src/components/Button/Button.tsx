import type { ReactNode, ButtonHTMLAttributes, AnchorHTMLAttributes } from "react";
import { cn } from "../../utils/cn";

type ButtonVariant = "primary" | "secondary" | "outline" | "ghost";
type ButtonSize = "sm" | "md" | "lg";

interface ButtonBaseProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  className?: string;
  children: ReactNode;
}

type ButtonAsButton = ButtonBaseProps &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, keyof ButtonBaseProps> & {
    as?: "button";
  };

type ButtonAsAnchor = ButtonBaseProps &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, keyof ButtonBaseProps> & {
    as: "a";
    href: string;
  };

type ButtonProps = ButtonAsButton | ButtonAsAnchor;

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-primary-600 text-white hover:bg-primary-700 active:bg-primary-800 shadow-sm hover:shadow-md",
  secondary:
    "bg-slate-200 text-slate-800 hover:bg-slate-300 active:bg-slate-400 dark:bg-slate-700 dark:text-slate-200 dark:hover:bg-slate-600",
  outline:
    "border-2 border-primary-600 text-primary-600 hover:bg-primary-50 active:bg-primary-100 dark:border-primary-400 dark:text-primary-400 dark:hover:bg-primary-950",
  ghost:
    "text-primary-600 hover:bg-primary-50 active:bg-primary-100 dark:text-primary-400 dark:hover:bg-slate-800",
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: "px-3 py-1.5 text-sm gap-1.5",
  md: "px-5 py-2.5 text-base gap-2",
  lg: "px-7 py-3 text-lg gap-2.5",
};

export const Button = (props: ButtonProps) => {
  const {
    variant = "primary",
    size = "md",
    leftIcon,
    rightIcon,
    className,
    children,
    ...rest
  } = props;

  const classes = cn(
    "inline-flex items-center justify-center rounded-lg font-medium transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed",
    variantStyles[variant],
    sizeStyles[size],
    className
  );

  if (props.as === "a") {
    const { as: _, ...anchorProps } = rest as Omit<ButtonAsAnchor, keyof ButtonBaseProps>;
    return (
      <a className={classes} {...anchorProps}>
        {leftIcon}
        {children}
        {rightIcon}
      </a>
    );
  }

  const { as: _, ...buttonProps } = rest as Omit<ButtonAsButton, keyof ButtonBaseProps>;
  return (
    <button className={classes} {...buttonProps}>
      {leftIcon}
      {children}
      {rightIcon}
    </button>
  );
};
