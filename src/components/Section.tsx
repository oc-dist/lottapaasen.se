import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface SectionProps {
  children: ReactNode;
  className?: string;
  background?: "default" | "muted" | "card";
  padding?: "sm" | "md" | "lg" | "xl";
  maxWidth?: "sm" | "md" | "lg" | "xl" | "2xl" | "full";
}

export default function Section({
  children,
  className,
  background = "default",
  padding = "lg",
  maxWidth = "lg"
}: SectionProps) {
  const backgroundClasses = {
    default: "",
    muted: "bg-muted/30",
    card: "bg-card"
  };

  const paddingClasses = {
    sm: "py-8",
    md: "py-12",
    lg: "py-16",
    xl: "py-24"
  };

  const maxWidthClasses = {
    sm: "max-w-2xl",
    md: "max-w-4xl",
    lg: "max-w-6xl",
    xl: "max-w-7xl",
    "2xl": "max-w-8xl",
    full: "max-w-full"
  };

  return (
    <section className={cn(
      backgroundClasses[background],
      paddingClasses[padding],
      className
    )}>
      <div className={cn(
        "mx-auto px-4",
        maxWidthClasses[maxWidth]
      )}>
        {children}
      </div>
    </section>
  );
}