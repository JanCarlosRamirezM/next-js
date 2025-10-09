import { notFound } from "next/navigation";

import { Product } from "@/interfaces";
import { initialData } from "@/seed";
import { titleFont } from "@/config";
import { QuantitySelector, SizeSelector } from "@/components";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata(props: Props) {
  const { slug } = await props.params;
  const product = await getProduct(slug);

  return {
    title: product.title,
    description: product.description,
  };
}

export default async function ProducPage(props: Props) {
  const { slug } = await props.params;
  const product = await getProduct(slug);

  return (
    <div className="mt-5 mb-20 grid md:grid-cols-3 gap-3">
      {/* Slideshow */}
      <div className="col-span-1 md:col-span-2  "></div>

      {/* Detail */}
      <div className="col-span-1 px-5 ">
        <h1 className={`${titleFont.className} antialiased font-bold text-xl`}>
          {product.title}
        </h1>
        <p className="text-lg mb-5">${product.price}</p>

        {/* Selector de tallas */}
        <SizeSelector
          availableSizes={product.sizes}
          selectedSize={product.sizes[0]}
        />

        {/* Selecor de cantidad */}
        <QuantitySelector quantity={2} />

        {/* Button */}
        <button className="btn-primary my-5">Agregar al carrito</button>

        {/* Description */}
        <h3 className="font-bold text-sm">Descripción</h3>
        <p className="font-light">{product.description}</p>
      </div>
    </div>
  );
}

const getProduct = async (slug: string): Promise<Product> => {
  const product = initialData.products.find((product) => product.slug === slug);
  if (!product) notFound();
  return product;
};
