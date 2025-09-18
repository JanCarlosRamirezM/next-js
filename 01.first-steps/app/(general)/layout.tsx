import { Navbar } from "@/components";

interface Prop {
  children: React.ReactNode;
}
export default function GeneralLayout({ children }: Readonly<Prop>) {
  return (
    <>
      <Navbar />
      <main className="flex flex-col items-center p-24">
        <span></span>
        {children}
      </main>
    </>
  );
}
