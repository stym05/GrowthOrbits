import Image from "next/image";
import Link from "next/link";

export function Brand() {
  return (
    <Link className="brand" href="/" aria-label="Growth Orbits home">
      <Image
        className="brand-logo"
        src="/growth-orbits-logo.png"
        alt=""
        width={720}
        height={427}
        priority
      />
      <span>Growth Orbits</span>
    </Link>
  );
}
