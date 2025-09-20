import { CartCounter } from "@/app/components";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Counter Page",
  description: "Un simpre contador",
};

export default function CounterPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-2">
      <span>Productos en el carrito</span>
      <CartCounter />
    </div>
  );
}

