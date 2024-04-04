import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ReactNode } from "react";
import Header from "@/app/Header";
import HeaderUser from "@/app/HeaderUser";
import Wrapper from "@/components/Wrapper";
import { User } from "@/types";
import "./globals.css";
import { error } from "console";
import UserService from "@/services/UserService";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    template: "%s | Arrrrbnb",
    default: "Arrrrbnb",
  },
  description: "Arrr ye interested in a place to stay?",
};

type Props = {
  children: ReactNode;
};

export default async function RootLayout({ children }: Props) {
  const me = await UserService.getCurrentUser();

  return (
    <html lang="en">
      <body className={inter.className}>
        <Header user={me && <HeaderUser user={me} />} />
        <Wrapper children={""}>
          <main className="py-20">{children}</main>
        </Wrapper>
      </body>
    </html>
  );
}
