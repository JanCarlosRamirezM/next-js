import { notFound } from "next/navigation";

import { initialData } from "@/seed";
import { ProductGrid, Title } from "@/components";
import { ValidCategory } from "@/interfaces";

interface Props {
  params: Promise<{ id: ValidCategory }>;
}

export default async function CategoryPage(props: Props) {
  const { id } = await props.params;
  const products = initialData.products.filter(
    (product) => product.gender === id
  );

  if (products.length === 0) notFound();

  const labels: Record<ValidCategory, string> = {
    men: "para hombres",
    women: "para mujeres",
    kid: "para niños",
    unisex: "para todos",
  };

  return (
    <div>
      <Title
        title={`Productos ${labels[id]} `}
        subtitle={`Todos los productos.`}
        className="mb-2"
      />
      <ProductGrid products={products} />
    </div>
  );
}
