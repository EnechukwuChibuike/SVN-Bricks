import Image from "next/image";
import Link from "next/link";
import { LuArrowRight, LuCheck } from "react-icons/lu";
import type { Product } from "@/lib/site";

function Swatches({ colors }: { colors: NonNullable<Product["colors"]> }) {
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

function ProductImage({ product, sizes }: { product: Product; sizes: string }) {
   return (
      <div className="relative isolate aspect-square overflow-hidden bg-stone-100">
         {/* multiply blends the photo's white background into the grey panel */}
         <Image
            src={product.image}
            alt={`${product.name} ${product.category === "Facing Bricks" ? "in assorted colours" : "wheelbarrow pan"}`}
            fill
            sizes={sizes}
            className="object-contain p-6 mix-blend-multiply transition-transform duration-500 group-hover:scale-105"
         />
         <span className="absolute top-4 left-4 rounded-full bg-white px-3 py-1 text-xs font-semibold text-charcoal">
            {product.category}
         </span>
      </div>
   );
}

const cardSizes = "(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw";

/** Compact card linking to the product's section on /products. */
export default function ProductCard({ product }: { product: Product }) {
   return (
      <Link
         href={`/products#${product.slug}`}
         className="group flex flex-col overflow-hidden rounded-2xl border border-stone-200 bg-white transition-shadow hover:shadow-xl hover:shadow-stone-200/70"
      >
         <ProductImage product={product} sizes={cardSizes} />
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

/** Full product card for the Products page, with colours, uses and a quote link. */
export function ProductDetailCard({ product }: { product: Product }) {
   return (
      <article
         id={product.slug}
         className="group flex scroll-mt-44 flex-col overflow-hidden rounded-2xl border border-stone-200 bg-white"
      >
         <ProductImage product={product} sizes={cardSizes} />
         <div className="flex flex-1 flex-col p-6 sm:p-8">
            <h3 className="text-2xl font-bold text-charcoal">{product.name}</h3>
            <p className="mt-3 leading-relaxed text-stone-600">{product.description}</p>

            {product.colors && (
               <div className="mt-6">
                  <h4 className="mb-3 text-sm font-semibold text-charcoal">
                     Available colours
                  </h4>
                  <Swatches colors={product.colors} />
                  <p className="mt-2 text-sm text-stone-500">
                     {product.colors.map((c) => c.name).join(" · ")}
                  </p>
               </div>
            )}

            <h4 className="mt-6 mb-3 text-sm font-semibold text-charcoal">Ideal for</h4>
            <ul className="flex-1 space-y-2">
               {product.uses.map((use) => (
                  <li key={use} className="flex items-center gap-3 text-stone-700">
                     <LuCheck className="shrink-0 text-brick-600" /> {use}
                  </li>
               ))}
            </ul>

            <Link
               href={`/contact?product=${encodeURIComponent(product.name)}`}
               className="btn btn-primary mt-8 self-start"
            >
               Get a Quote <LuArrowRight />
            </Link>
         </div>
      </article>
   );
}
