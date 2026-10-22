import type { Metadata } from "next";
import Image from "next/image";
import { LuEye, LuMapPin, LuShieldCheck, LuTarget, LuTruck, LuUsers } from "react-icons/lu";
import PageHeader from "@/components/PageHeader";
import SectionHeading from "@/components/SectionHeading";
import CtaBanner from "@/components/CtaBanner";
import { site } from "@/lib/site";

export const metadata: Metadata = {
   title: "About Us",
   description:
      "Learn about SVN Group, Nigeria's leading distributor of facing bricks and wheelbarrow pans.",
};

const pillars = [
   {
      icon: LuTarget,
      title: "Our Mission",
      text: "To make quality building materials easy to access for every builder in Nigeria — with honest pricing, dependable supply and service you can count on.",
   },
   {
      icon: LuEye,
      title: "Our Vision",
      text: "To be the first choice for bricks and site equipment across West Africa, and the standard others are measured against.",
   },
];

const values = [
   {
      icon: LuShieldCheck,
      title: "Quality First",
      text: "We stock only products we would build with ourselves, and we check every batch.",
   },
   {
      icon: LuTruck,
      title: "Reliability",
      text: "Large inventory and organised logistics mean your site never waits on materials.",
   },
   {
      icon: LuUsers,
      title: "Customer Focus",
      text: "From a single wheelbarrow to an entire estate, every customer gets our full attention.",
   },
];

export default function AboutPage() {
   return (
      <>
         <PageHeader
            eyebrow="About Us"
            title="Building Nigeria, one brick at a time"
            description="SVN Group is the country's biggest distributor and seller of facing bricks and wheelbarrows, trusted by builders from Lagos to Owerri and beyond."
            image="/images/image2.jpeg"
         />

         <section className="site-container grid items-center gap-12 py-20 lg:grid-cols-2 lg:gap-20 lg:py-28">
            <div>
               <SectionHeading eyebrow="Who We Are" title="A supplier built on trust and quality" />
               <div className="mt-6 space-y-5 text-lg leading-relaxed text-stone-600">
                  <p>
                     SVN Group supplies premium American and South African facing
                     bricks, along with durable wheelbarrow pans, to construction
                     projects of every size. Our customers include private
                     homeowners, contractors, real-estate developers and
                     hardware resellers.
                  </p>
                  <p>
                     With offices in Lagos and Imo State and a large, well-managed
                     inventory, we keep materials moving to sites across the
                     country — so projects stay on schedule and on budget.
                  </p>
               </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
               <div className="relative aspect-3/4 overflow-hidden rounded-2xl">
                  <Image
                     src="/images/image6.jpeg"
                     alt="Two-storey home finished in multi-tone bricks"
                     fill
                     sizes="(max-width: 1024px) 50vw, 25vw"
                     className="object-cover"
                  />
               </div>
               <div className="relative mt-12 aspect-3/4 overflow-hidden rounded-2xl">
                  <Image
                     src="/images/image5.jpeg"
                     alt="Bungalow finished in tan facing bricks"
                     fill
                     sizes="(max-width: 1024px) 50vw, 25vw"
                     className="object-cover"
                  />
               </div>
            </div>
         </section>

         <section className="bg-cream">
            <div className="site-container grid gap-6 py-20 md:grid-cols-2">
               {pillars.map(({ icon: Icon, title, text }) => (
                  <div key={title} className="rounded-2xl bg-white p-8 sm:p-10">
                     <span className="grid size-14 place-items-center rounded-xl bg-brick-600 text-2xl text-white">
                        <Icon />
                     </span>
                     <h3 className="mt-6 text-2xl font-bold text-charcoal">{title}</h3>
                     <p className="mt-3 text-lg leading-relaxed text-stone-600">{text}</p>
                  </div>
               ))}
            </div>
         </section>

         <section className="site-container py-20 lg:py-28">
            <SectionHeading
               align="center"
               eyebrow="Our Values"
               title="What every order is built on"
            />
            <div className="mt-12 grid gap-8 md:grid-cols-3">
               {values.map(({ icon: Icon, title, text }) => (
                  <div key={title} className="rounded-2xl border border-stone-200 p-8">
                     <Icon className="text-3xl text-brick-600" />
                     <h3 className="mt-5 text-xl font-bold text-charcoal">{title}</h3>
                     <p className="mt-2 leading-relaxed text-stone-600">{text}</p>
                  </div>
               ))}
            </div>
         </section>

         <section className="bg-charcoal">
            <div className="site-container py-20">
               <p className="eyebrow !text-brick-500">Our Offices</p>
               <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
                  Visit us in Lagos or Owerri
               </h2>
               <div className="mt-10 grid gap-6 md:grid-cols-2">
                  {site.offices.map((office) => (
                     <div
                        key={office.name}
                        className="flex gap-4 rounded-2xl border border-white/10 p-8"
                     >
                        <LuMapPin className="mt-1 shrink-0 text-2xl text-brick-500" />
                        <div>
                           <h3 className="text-lg font-bold text-white">{office.name}</h3>
                           <p className="mt-2 leading-relaxed text-stone-400">
                              {office.address}
                           </p>
                        </div>
                     </div>
                  ))}
               </div>
            </div>
         </section>

         <CtaBanner />
      </>
   );
}
