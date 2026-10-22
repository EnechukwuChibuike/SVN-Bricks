import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { LuArrowRight, LuCheck, LuPackage, LuTruck, LuWarehouse } from "react-icons/lu";
import PageHeader from "@/components/PageHeader";
import SectionHeading from "@/components/SectionHeading";
import CtaBanner from "@/components/CtaBanner";
import { products } from "@/lib/site";

export const metadata: Metadata = {
   title: "Products",
   description:
      "American bricks, South African bricks and galvanised wheelbarrow pans from SVN Group — available retail and in bulk across Nigeria.",
};

const ordering = [
   {
      icon: LuPackage,
      title: "Retail & Bulk Orders",
      text: "Buy what you need for one project, or stock up at trade prices.",
   },
   {
      icon: LuTruck,
      title: "Delivery to Site",
      text: "We arrange delivery straight to your site to save you time.",
   },
   {
      icon: LuWarehouse,
      title: "Ready Stock",
      text: "Large inventory held at our warehouses for fast turnaround.",
   },
];

export default function ProductsPage() {
   return (
      <>
         <PageHeader
            eyebrow="Products"
            title="Facing bricks and site equipment you can rely on"
            description="Choose from our range of premium bricks and heavy-duty wheelbarrow pans — available for retail buyers, contractors and resellers."
            image="/images/image8.jpeg"
         />

         <section className="site-container space-y-20 py-20 lg:space-y-28 lg:py-28">
            {products.map((product, i) => (
               <article
                  key={product.slug}
                  id={product.slug}
                  className="grid scroll-mt-32 items-center gap-10 lg:grid-cols-2 lg:gap-20"
               >
                  <div
                     className={`relative aspect-4/3 overflow-hidden rounded-2xl bg-stone-100 ${
                        i % 2 === 1 ? "lg:order-last" : ""
                     }`}
                  >
                     <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        sizes="(max-width: 1024px) 100vw, 50vw"
                        className="object-cover"
                     />
                  </div>
                  <div>
                     <p className="eyebrow">{product.category}</p>
                     <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-charcoal sm:text-4xl">
                        {product.name}
                     </h2>
                     <p className="mt-5 text-lg leading-relaxed text-stone-600">
                        {product.description}
                     </p>
                     <h3 className="mt-8 font-semibold text-charcoal">Ideal for</h3>
                     <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                        {product.uses.map((use) => (
                           <li key={use} className="flex items-center gap-3 text-stone-700">
                              <LuCheck className="shrink-0 text-brick-600" /> {use}
                           </li>
                        ))}
                     </ul>
                     <Link href="/contact" className="btn btn-primary mt-9">
                        Get a Quote <LuArrowRight />
                     </Link>
                  </div>
               </article>
            ))}
         </section>

         <section className="bg-cream">
            <div className="site-container py-20">
               <SectionHeading
                  align="center"
                  eyebrow="How to Order"
                  title="Simple ordering, any quantity"
               />
               <div className="mt-12 grid gap-6 md:grid-cols-3">
                  {ordering.map(({ icon: Icon, title, text }) => (
                     <div key={title} className="rounded-2xl bg-white p-8 text-center">
                        <span className="mx-auto grid size-14 place-items-center rounded-full bg-brick-100 text-2xl text-brick-700">
                           <Icon />
                        </span>
                        <h3 className="mt-5 text-lg font-bold text-charcoal">{title}</h3>
                        <p className="mt-2 leading-relaxed text-stone-600">{text}</p>
                     </div>
                  ))}
               </div>
            </div>
         </section>

         <CtaBanner />
      </>
   );
}
