import { cn } from "@/lib/utils";
import { ButtonHTMLAttributes, forwardRef } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center font-semibold rounded-full transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed",
          {
            "bg-[#0a4f3c] text-white hover:bg-[#063328] active:scale-95": variant === "primary",
            "bg-[#c9a84c] text-white hover:bg-[#b8903f] active:scale-95": variant === "secondary",
            "border-2 border-[#0a4f3c] text-[#0a4f3c] hover:bg-[#0a4f3c] hover:text-white active:scale-95": variant === "outline",
            "text-gray-700 hover:bg-gray-100 active:scale-95": variant === "ghost",
          },
          {
            "text-xs px-3 py-1.5": size === "sm",
            "text-sm px-5 py-2.5": size === "md",
            "text-base px-7 py-3.5": size === "lg",
          },
          className
        )}
        {...props}
      />
    );
  }
);

Button.displayName = "Button";

export default Button;
