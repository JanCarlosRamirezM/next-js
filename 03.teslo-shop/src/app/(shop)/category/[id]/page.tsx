import { titleFont } from "@/config";
import { notFound } from "next/navigation";

interface Props {
  params: Promise<{ id: string }>;
}

export default async function CategoryPage(props: Props) {

  const { id } = await props.params;

  if (id === 'kids') notFound()

  return (
    <div>
      <h1 className={titleFont.className}>CategoryPage</h1>
    </div>
  );
}
