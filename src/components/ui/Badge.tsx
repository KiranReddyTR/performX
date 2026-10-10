import { cn } from "@/lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "gradient" | "subtle" | "outline";
  className?: string;
}

export function Badge({ children, variant = "subtle", className }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded-full",
        {
          "bg-brand-gradient text-white": variant === "gradient",
          "bg-white/5 text-white/70 border border-white/10": variant === "subtle",
          "border border-brand-violet/40 text-brand-violet bg-brand-violet/5": variant === "outline",
        },
        className
      )}
    >
      {children}
    </span>
  );
}
