"use client";

import Link from "next/link";
import { ReactNode, useEffect } from "react";
import Text from "@/components/Text";
import Wrapper from "@/components/Wrapper";
import { usePathname } from "next/navigation";

type Props = {
  user?: ReactNode;
};

export default function Header({ user }: Props) {
  const pathname = usePathname();
  const isActive = (href: string) => pathname === href;

  return (
    <div className="border-b bg-slate-100 py-4">
      <Wrapper className="flex items-center justify-between">
        <Link href="/">
          <Text as="h1" variant="h2">
            Arrrbnb
          </Text>
        </Link>
        <div className="flex gap-4">
          <Link
            href={"/rooms"}
            className={`${
              isActive("/rooms")
                ? "bg-slate-200 rounded px-4 py-2"
                : "rounded px-4 py-2"
            }`}
          >
            Cabins
          </Link>
          <Link
            href={"/create"}
            className={`${
              isActive("/create")
                ? "bg-slate-200 rounded px-4 py-2"
                : "rounded px-4 py-2"
            }`}
          >
            Add cabin
          </Link>
        </div>
        {user}
      </Wrapper>
    </div>
  );
}
