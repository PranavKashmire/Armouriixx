import Logo, { type LogoSize } from "@/components/ui/Logo";
import { cn } from "@/lib/utils";

interface BrandShieldLogoProps {
  size?: "sm" | "md" | "lg" | "xl";
  className?: string;
}

const sizeMap: Record<NonNullable<BrandShieldLogoProps["size"]>, LogoSize> = {
  sm: "nav",
  md: "md",
  lg: "lg",
  xl: "xl",
};

export default function BrandShieldLogo({
  size = "sm",
  className,
}: BrandShieldLogoProps) {
  return <Logo size={sizeMap[size]} className={cn(className)} />;
}
