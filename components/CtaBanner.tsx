import Link from "next/link";
import { LuArrowRight, LuPhone } from "react-icons/lu";
import { site } from "@/lib/site";

export default function CtaBanner() {
   return (
      <section className="site-container py-20">
         <div className="relative overflow-hidden rounded-2xl bg-brick-600 px-6 py-14 sm:px-12 lg:flex lg:items-center lg:justify-between lg:gap-10">
            <div
               aria-hidden="true"
               className="absolute inset-0 opacity-10 [background-image:linear-gradient(#fff_2px,transparent_2px),linear-gradient(90deg,#fff_2px,transparent_2px)] [background-position:0_0,24px_0] [background-size:48px_28px]"
            />
            <div className="relative max-w-2xl">
               <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
                  Ready to start your next build?
               </h2>
               <p className="mt-4 text-lg text-brick-100">
                  Tell us what you need and our sales team will get back to you
                  with availability and a competitive quote.
               </p>
            </div>
            <div className="relative mt-8 flex flex-col gap-3 sm:flex-row lg:mt-0 lg:shrink-0">
               <Link href="/contact" className="btn btn-light">
                  Request a Quote <LuArrowRight />
               </Link>
               <a href={site.phoneHref} className="btn btn-ghost-light">
                  <LuPhone /> Call {site.phone}
               </a>
            </div>
         </div>
      </section>
   );
}
