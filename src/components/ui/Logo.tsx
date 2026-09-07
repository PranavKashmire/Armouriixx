import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

export const LOGO_SRC = encodeURI(
  "/images/armourixx_logo_transparent_exact (1).png"
);

const sizeClasses = {
  nav: "h-9 w-9 sm:h-10 sm:w-10",
  footer: "h-14 w-14 sm:h-16 sm:w-16",
  md: "h-20 w-20 sm:h-24 sm:w-24",
  lg: "h-28 w-28 sm:h-32 sm:w-32",
  xl: "h-36 w-36 sm:h-40 sm:w-40 lg:h-44 lg:w-44",
} as const;

export type LogoSize = keyof typeof sizeClasses;

interface LogoProps {
  size?: LogoSize;
  className?: string;
  priority?: boolean;
}

export function Logo({
  size = "nav",
  className,
  priority = false,
}: LogoProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center justify-center shrink-0",
        sizeClasses[size],
        className
      )}
    >
      <Image
        src={LOGO_SRC}
        alt="ARMOURIXX Security"
        width={1538}
        height={1538}
        className="h-full w-full object-contain object-center"
        priority={priority}
      />
    </span>
  );
}

interface LogoLinkProps extends LogoProps {
  href?: string;
}

export default function LogoLink({
  href = "/",
  size = "nav",
  className,
  priority = false,
}: LogoLinkProps) {
  return (
    <Link
      href={href}
      className="inline-flex shrink-0 min-w-0 group"
      aria-label="ARMOURIXX Security — Home"
    >
      <Logo
        size={size}
        priority={priority}
        className={cn(
          "transition-transform duration-300 group-hover:scale-[1.02]",
          className
        )}
      />
    </Link>
  );
}
