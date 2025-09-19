import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center ">
      <span className="text-5xl">Mi primera app en next-js</span>
      <Link className="mt-2 text-lg" href={"/about"}>
        About Page
      </Link>
    </div>
  );
}
