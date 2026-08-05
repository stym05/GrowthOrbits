import Link from "next/link";

export function Brand() {
  return (
    <Link className="brand" href="/" aria-label="Growth Orbits home">
      <svg className="brand-symbol" viewBox="0 0 44 44" aria-hidden="true">
        <circle cx="22" cy="22" r="7" fill="currentColor" />
        <ellipse cx="22" cy="22" rx="19" ry="8.5" transform="rotate(-25 22 22)" />
        <ellipse cx="22" cy="22" rx="19" ry="8.5" transform="rotate(55 22 22)" />
        <circle className="brand-node" cx="36" cy="9" r="3.2" />
      </svg>
      <span>Growth Orbits</span>
    </Link>
  );
}
