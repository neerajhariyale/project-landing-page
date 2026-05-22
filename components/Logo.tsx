import Image from "next/image";

type LogoProps = {
  className?: string;
  size?: number;
  withWordmark?: boolean;
};

/**
 * KS Technology logo. The source JPEG already contains the wordmark + tagline,
 * so by default we show the whole lockup. When `withWordmark` is false we
 * scale the image and clip whitespace via object-position so only the
 * "KS" mark portion shows — ideal for compact navbar / favicon usage.
 */
export default function Logo({
  className = "h-9 w-9",
  size = 36,
  withWordmark = false,
}: LogoProps) {
  if (withWordmark) {
    return (
      <Image
        src="/ks-logo.jpeg"
        alt="KS Technology — Innovate · Connect · Elevate"
        width={size * 4}
        height={size}
        priority
        className={className}
        sizes={`${size * 4}px`}
      />
    );
  }

  // Compact icon-only crop. The mark sits in the upper ~60% of the JPEG,
  // so we render the image at ~1.6× the container then offset upward.
  return (
    <span
      className={`relative inline-block overflow-hidden rounded-lg ${className}`}
      aria-label="KS Technology logo"
      role="img"
    >
      <Image
        src="/ks-logo.jpeg"
        alt=""
        fill
        sizes={`${size}px`}
        priority
        style={{
          objectFit: "cover",
          objectPosition: "center 30%",
          transform: "scale(1.65)",
          transformOrigin: "center 30%",
        }}
      />
    </span>
  );
}
