import Image from "next/image";
import Link from "next/link";
import {
   LuArrowRight,
   LuBadgeCheck,
   LuCheck,
   LuHandshake,
   LuHeadset,
   LuTruck,
} from "react-icons/lu";
import SectionHeading from "@/components/SectionHeading";
import ProductCard from "@/components/ProductCard";
import CtaBanner from "@/components/CtaBanner";
import { products, projects } from "@/lib/site";

const strengths = [
   {
      icon: LuTruck,
      title: "Nationwide Supply",
      text: "Reliable stock and delivery to sites across Lagos, Imo and the rest of Nigeria.",
   },
   {
      icon: LuBadgeCheck,
      title: "Quality Assured",
      text: "Every batch is checked for size, colour and strength before it leaves our yard.",
   },
   {
      icon: LuHandshake,
      title: "Trade & Bulk Pricing",
      text: "Competitive rates for contractors, developers, resellers and large orders.",
   },
   {
      icon: LuHeadset,
      title: "Expert Advice",
      text: "Our team helps you choose the right brick, quantity and finish for your project.",
   },
];

const reasons = [
   "Nigeria's largest distributor of facing bricks and wheelbarrow pans",
   "Large inventory ready for immediate pickup or delivery",
   "Offices in Lagos and Owerri to serve you faster",
   "Trusted by builders, developers and homeowners",
];

export default function HomePage() {
   return (
      <>
         {/* Hero */}
         <section className="relative overflow-hidden bg-charcoal">
            <div className="site-container grid items-center gap-12 py-16 lg:grid-cols-2 lg:py-24">
               <div>
                  <p className="inline-flex items-center gap-2 rounded-full border border-white/15 px-4 py-1.5 text-sm font-medium text-stone-300">
                     <span className="size-2 rounded-full bg-brick-500" />
                     Nigeria&apos;s No. 1 Bricks &amp; Wheelbarrow Distributor
                  </p>
                  <h1 className="mt-6 text-4xl leading-[1.1] font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
                     Quality bricks for buildings that{" "}
                     <span className="text-brick-500">stand the test of time.</span>
                  </h1>
                  <p className="mt-6 max-w-xl text-lg leading-relaxed text-stone-300">
                     SVN Group supplies premium American and South African facing
                     bricks and heavy-duty wheelbarrow pans to builders,
                     developers and homeowners across Nigeria.
                  </p>
                  <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                     <Link href="/contact" className="btn btn-primary">
                        Request a Quote <LuArrowRight />
                     </Link>
                     <Link href="/products" className="btn btn-ghost-light">
                        Explore Products
                     </Link>
                  </div>
               </div>

               <div className="relative mx-auto w-full max-w-md lg:max-w-none">
                  <div className="relative aspect-4/5 overflow-hidden rounded-2xl lg:ml-auto lg:w-[85%]">
                     <Image
                        src="/images/bg.jpg"
                        alt="Modern home with a red facing-brick boundary wall"
                        fill
                        priority
                        sizes="(max-width: 1024px) 90vw, 40vw"
                        className="object-cover object-[50%_65%]"
                     />
                  </div>
                  <div className="absolute -bottom-6 left-0 hidden w-56 overflow-hidden rounded-xl border-4 border-charcoal sm:block lg:-left-2">
                     <div className="relative aspect-4/3">
                        <Image
                           src="/images/image3.jpeg"
                           alt="Brick-clad portico finished with SVN bricks"
                           fill
                           sizes="224px"
                           className="object-cover"
                        />
                     </div>
                  </div>
               </div>
            </div>
         </section>

         {/* Strengths */}
         <section className="border-b border-stone-200 bg-cream">
            <div className="site-container grid gap-8 py-14 sm:grid-cols-2 lg:grid-cols-4">
               {strengths.map(({ icon: Icon, title, text }) => (
                  <div key={title} className="flex gap-4">
                     <span className="grid size-12 shrink-0 place-items-center rounded-lg bg-brick-100 text-2xl text-brick-700">
                        <Icon />
                     </span>
                     <div>
                        <h3 className="font-bold text-charcoal">{title}</h3>
                        <p className="mt-1 text-[0.95rem] leading-relaxed text-stone-600">
                           {text}
                        </p>
                     </div>
                  </div>
               ))}
            </div>
         </section>

         {/* Products */}
         <section className="site-container py-20 lg:py-28">
            <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
               <SectionHeading
                  eyebrow="Our Products"
                  title="Everything your site needs, from wall to wheelbarrow"
               />
               <Link
                  href="/products"
                  className="inline-flex items-center gap-2 font-semibold text-brick-600 hover:text-brick-700"
               >
                  View all products <LuArrowRight />
               </Link>
            </div>
            <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
               {products.map((product) => (
                  <ProductCard key={product.slug} product={product} />
               ))}
            </div>
         </section>

         {/* About */}
         <section className="bg-cream">
            <div className="site-container grid items-center gap-12 py-20 lg:grid-cols-2 lg:gap-20 lg:py-28">
               <div className="relative aspect-4/5 overflow-hidden rounded-2xl lg:aspect-5/6">
                  <Image
                     src="/images/background.jpg"
                     alt="Close-up of a facing-brick wall"
                     fill
                     sizes="(max-width: 1024px) 100vw, 50vw"
                     className="object-cover"
                  />
               </div>
               <div>
                  <SectionHeading
                     eyebrow="Why SVN Group"
                     title="The trusted name in bricks and building supplies"
                     description="From single homes to large estates, SVN Group is the supplier builders rely on for consistent quality, fair pricing and on-time delivery."
                  />
                  <ul className="mt-8 space-y-4">
                     {reasons.map((reason) => (
                        <li key={reason} className="flex gap-3">
                           <span className="mt-0.5 grid size-6 shrink-0 place-items-center rounded-full bg-brick-600 text-sm text-white">
                              <LuCheck />
                           </span>
                           <span className="text-stone-700">{reason}</span>
                        </li>
                     ))}
                  </ul>
                  <Link href="/about" className="btn btn-outline mt-10">
                     More About Us <LuArrowRight />
                  </Link>
               </div>
            </div>
         </section>

         {/* Projects */}
         <section className="site-container py-20 lg:py-28">
            <SectionHeading
               align="center"
               eyebrow="Featured Projects"
               title="Buildings finished with SVN bricks"
               description="A selection of homes and developments built with bricks supplied by SVN Group."
            />
            <div className="mt-12 grid grid-cols-2 gap-4 lg:grid-cols-4">
               {projects.slice(0, 4).map(({ src, alt }, i) => (
                  <div
                     key={src}
                     className={`relative overflow-hidden rounded-xl ${i % 3 === 0 ? "aspect-3/4" : "aspect-square"} lg:aspect-3/4`}
                  >
                     <Image
                        src={src}
                        alt={alt}
                        fill
                        sizes="(max-width: 1024px) 50vw, 25vw"
                        className="object-cover transition-transform duration-500 hover:scale-105"
                     />
                  </div>
               ))}
            </div>
            <div className="mt-10 text-center">
               <Link href="/gallery" className="btn btn-outline">
                  View All Projects <LuArrowRight />
               </Link>
            </div>
         </section>

         <CtaBanner />
      </>
   );
}
