import Image from "next/image";
import Link from "next/link";
import { LuArrowRight } from "react-icons/lu";
import type { products } from "@/lib/site";

type Product = (typeof products)[number];

export default function ProductCard({ product }: { product: Product }) {
   return (
      <Link
         href={`/products#${product.slug}`}
         className="group flex flex-col overflow-hidden rounded-2xl border border-stone-200 bg-white transition-shadow hover:shadow-xl hover:shadow-stone-200/70"
      >
         <div className="relative aspect-4/3 overflow-hidden bg-stone-100">
            <Image
               src={product.image}
               alt={product.name}
               fill
               sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
               className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <span className="absolute top-4 left-4 rounded-full bg-white/95 px-3 py-1 text-xs font-semibold text-charcoal">
               {product.category}
            </span>
         </div>
         <div className="flex flex-1 flex-col p-6">
            <h3 className="text-xl font-bold text-charcoal">{product.name}</h3>
            <p className="mt-2 flex-1 leading-relaxed text-stone-600">
               {product.summary}
            </p>
            <span className="mt-5 inline-flex items-center gap-2 font-semibold text-brick-600">
               Learn more
               <LuArrowRight className="transition-transform group-hover:translate-x-1" />
            </span>
         </div>
      </Link>
   );
}
