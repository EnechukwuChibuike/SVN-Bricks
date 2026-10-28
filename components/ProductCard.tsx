import Image from "next/image";
import Link from "next/link";
import { LuArrowRight } from "react-icons/lu";
import type { Product, ProductColor } from "@/lib/site";

export const cardSizes = "(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw";

export function Swatches({ colors }: { colors: ProductColor[] }) {
   return (
      <ul className="flex flex-wrap gap-1.5" aria-label="Available colours">
         {colors.map(({ name, hex }) => (
            <li
               key={name}
               title={name}
               className="size-6 rounded-full border border-black/10"
               style={{ backgroundColor: hex }}
            >
               <span className="sr-only">{name}</span>
            </li>
         ))}
      </ul>
   );
}

type ProductImageProps = {
   product: Product;
   src?: string;
   alt?: string;
};

export function ProductImage({ product, src, alt }: ProductImageProps) {
   return (
      <div className="relative isolate aspect-square overflow-hidden bg-stone-100">
         {/* multiply blends the photo's white background into the grey panel */}
         <Image
            src={src ?? product.image}
            alt={
               alt ??
               `${product.name} ${product.category === "Facing Bricks" ? "in assorted colours" : "wheelbarrow pan"}`
            }
            fill
            sizes={cardSizes}
            className="object-contain p-6 mix-blend-multiply transition-transform duration-500 group-hover:scale-105"
         />
         <span className="absolute top-4 left-4 rounded-full bg-white px-3 py-1 text-xs font-semibold text-charcoal">
            {product.category}
         </span>
      </div>
   );
}

/** Compact card linking to the product's section on /products. */
export default function ProductCard({ product }: { product: Product }) {
   return (
      <Link
         href={`/products#${product.slug}`}
         className="group flex flex-col overflow-hidden rounded-2xl border border-stone-200 bg-white transition-shadow hover:shadow-xl hover:shadow-stone-200/70"
      >
         <ProductImage product={product} />
         <div className="flex flex-1 flex-col p-6">
            <h3 className="text-xl font-bold text-charcoal">{product.name}</h3>
            <p className="mt-2 flex-1 leading-relaxed text-stone-600">{product.summary}</p>
            {product.colors && (
               <div className="mt-5">
                  <Swatches colors={product.colors} />
               </div>
            )}
            <span className="mt-5 inline-flex items-center gap-2 font-semibold text-brick-600">
               Learn more
               <LuArrowRight className="transition-transform group-hover:translate-x-1" />
            </span>
         </div>
      </Link>
   );
}
