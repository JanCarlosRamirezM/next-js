"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

interface Props {
  path: string;
  text: string;
}
export const ActiveLink = ({ path, text }: Props) => {
  const pathname = usePathname();
  const isActive = pathname === path;
  return (
    <>
      <Link
        className={`mr-2 hover:underline hover:text-blue-400 transition-all 
            ${isActive ? "text-blue-500" : ""}`}
        href={path}
      >
        {text}
      </Link>
    </>
  );
};
