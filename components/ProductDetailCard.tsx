"use client";

import { useState } from "react";
import Link from "next/link";
import { LuArrowRight, LuCheck } from "react-icons/lu";
import { ProductImage, Swatches } from "./ProductCard";
import type { Product } from "@/lib/site";

/** Full product card for the Products page, with colours, uses and a quote link. */
export default function ProductDetailCard({ product }: { product: Product }) {
   const [selected, setSelected] = useState<number | null>(null);
   const colors = product.colors ?? [];
   const active = selected === null ? null : colors[selected];
   const hasColorPhotos = colors.some((c) => c.image);

   return (
      <article
         id={product.slug}
         className="group flex scroll-mt-44 flex-col overflow-hidden rounded-2xl border border-stone-200 bg-white"
      >
         <ProductImage
            product={product}
            src={active?.image}
            alt={active ? `${product.name} in ${active.name}` : undefined}
         />
         <div className="flex flex-1 flex-col p-6 sm:p-8">
            <h3 className="text-2xl font-bold text-charcoal">{product.name}</h3>
            <p className="mt-3 leading-relaxed text-stone-600">{product.description}</p>

            {colors.length > 0 && (
               <div className="mt-6">
                  <h4 className="mb-3 text-sm font-semibold text-charcoal">
                     Available colours
                  </h4>
                  {hasColorPhotos ? (
                     <>
                        <div className="flex flex-wrap items-center gap-2" role="group" aria-label="Choose a colour">
                           {colors.map((color, i) => (
                              <button
                                 key={color.name}
                                 type="button"
                                 title={color.name}
                                 aria-label={color.name}
                                 aria-pressed={selected === i}
                                 onClick={() => setSelected(selected === i ? null : i)}
                                 className={`size-8 cursor-pointer rounded-full border border-black/10 transition ${
                                    selected === i
                                       ? "ring-2 ring-brick-600 ring-offset-2"
                                       : "hover:scale-110"
                                 }`}
                                 style={{ backgroundColor: color.hex }}
                              />
                           ))}
                           {active && (
                              <button
                                 type="button"
                                 onClick={() => setSelected(null)}
                                 className="ml-1 cursor-pointer text-sm font-medium text-brick-600 hover:text-brick-700"
                              >
                                 View all
                              </button>
                           )}
                        </div>
                        <p className="mt-3 text-sm text-stone-500" aria-live="polite">
                           {active ? (
                              <>
                                 <span className="font-semibold text-charcoal">{active.name}</span>
                                 {active.finish && ` · ${active.finish} finish`}
                              </>
                           ) : (
                              "Tap a colour to see it up close."
                           )}
                        </p>
                     </>
                  ) : (
                     <>
                        <Swatches colors={colors} />
                        <p className="mt-2 text-sm text-stone-500">
                           {colors.map((c) => c.name).join(" · ")}
                        </p>
                     </>
                  )}
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
