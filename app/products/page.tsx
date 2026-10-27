import type { Metadata } from "next";
import { LuPackage, LuTruck, LuWarehouse } from "react-icons/lu";
import PageHeader from "@/components/PageHeader";
import SectionHeading from "@/components/SectionHeading";
import CtaBanner from "@/components/CtaBanner";
import { ProductDetailCard } from "@/components/ProductCard";
import { productCategories, products } from "@/lib/site";

export const metadata: Metadata = {
   title: "Products",
   description:
      "American, South African and Spanish facing bricks, plus Ericson, KMS and Omega wheelbarrow pans from SVN Group — available retail and in bulk across Nigeria.",
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
            title="Facing bricks and wheelbarrows you can rely on"
            description="Three ranges of premium facing bricks in a wide choice of colours, and wheelbarrow pans from the brands builders trust — for retail buyers, contractors and resellers."
            image="/images/image8.jpeg"
         />

         <nav className="sticky top-18 z-40 border-b border-stone-200 bg-white/95 backdrop-blur md:top-28">
            <div className="site-container flex gap-2 overflow-x-auto py-3">
               {productCategories.map(({ slug, name }) => (
                  <a
                     key={slug}
                     href={`#${slug}`}
                     className="shrink-0 rounded-full border border-stone-300 px-4 py-2 text-sm font-semibold text-charcoal transition-colors hover:border-brick-600 hover:text-brick-600"
                  >
                     {name}
                  </a>
               ))}
            </div>
         </nav>

         {productCategories.map((category, i) => (
            <section
               key={category.slug}
               id={category.slug}
               className={`scroll-mt-44 ${i % 2 === 1 ? "bg-cream" : ""}`}
            >
               <div className="site-container py-20 lg:py-24">
                  <SectionHeading
                     eyebrow={category.name}
                     title={category.title}
                     description={category.description}
                  />
                  <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                     {products
                        .filter((p) => p.category === category.name)
                        .map((product) => (
                           <ProductDetailCard key={product.slug} product={product} />
                        ))}
                  </div>
               </div>
            </section>
         ))}

         <section className="border-t border-stone-200">
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
