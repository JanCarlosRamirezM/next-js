"use client";

import Link from "next/link";
import { JSX } from "react";
import { usePathname } from "next/navigation";

export interface SidebarMenuItemProps {
  href: string;
  title: string;
  subtitle: string;
  icon: JSX.Element;
}

export const SidebarMenuItem = ({
  href,
  title,
  subtitle,
  icon,
}: SidebarMenuItemProps) => {
  const pathname = usePathname();
  const isActive = pathname === href;
  return (
    <>
      <Link
        href={href}
        className={`w-full px-2 inline-flex space-x-2 items-center border-b border-slate-700 py-3 hover:bg-white/5 transition ease-linear duration-150
          ${isActive ? "bg-blue-800" : ""}`}
      >
        <div>{icon}</div>
        <div className="flex flex-col">
          <span className="text-lg font-bold leading-5 text-white">
            {title}
          </span>
          <span className="text-sm text-white/50 hidden md:block">
            {subtitle}
          </span>
        </div>
      </Link>
    </>
  );
};
