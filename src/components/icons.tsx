import type { SVGProps } from "react";

export type IconName = "arrow" | "check" | "menu" | "close" | "mail" | "linkedin" | "x" | "instagram";

const paths: Record<IconName, React.ReactNode> = {
  arrow: <path d="M5 12h14M13 6l6 6-6 6" />,
  check: <path d="m5 12 4 4L19 6" />,
  menu: <path d="M4 7h16M4 12h16M4 17h16" />,
  close: <path d="m6 6 12 12M18 6 6 18" />,
  mail: <path d="M4 6h16v12H4zM4 7l8 6 8-6" />,
  linkedin: <path d="M7 9v8M7 6.5v.01M11 17v-4.5a3 3 0 0 1 6 0V17M11 9v8" />,
  x: <path d="M5 4l14 16M19 4 5 20" />,
  instagram: <><rect x="4" y="4" width="16" height="16" rx="4" /><circle cx="12" cy="12" r="3.5" /><path d="M17.5 6.5h.01" /></>,
};

export function Icon({ name, ...props }: SVGProps<SVGSVGElement> & { name: IconName }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      {paths[name]}
    </svg>
  );
}
