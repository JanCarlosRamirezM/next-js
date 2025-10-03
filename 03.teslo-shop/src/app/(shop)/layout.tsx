import { Metadata } from "next";
import { Sidebar, ToMenu } from "@/components";

export const metadata: Metadata = {
  title: "Teslo | Shop",
  description: "Una tienda virtual de productos",
};

interface Props {
  children: React.ReactNode;
}

export default function ShopLayout({ children }: Props) {

  return (
    <div className="min-h-screen">
      <ToMenu />
      <Sidebar />
      <div className="px-5 md:px-10 ">
        {children}
      </div>
    </div>
  );
}
