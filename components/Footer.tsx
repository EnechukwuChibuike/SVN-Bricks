import Link from "next/link";
import { LuClock, LuMail, LuMapPin, LuPhone } from "react-icons/lu";
import Logo from "./Logo";
import { navLinks, products, site } from "@/lib/site";

export default function Footer() {
   return (
      <footer className="bg-charcoal text-stone-400">
         <div className="site-container grid gap-12 py-16 sm:grid-cols-2 lg:grid-cols-12">
            <div className="lg:col-span-4">
               <Logo light />
               <p className="mt-5 max-w-sm leading-relaxed">{site.description}</p>
            </div>

            <div className="lg:col-span-2">
               <h2 className="mb-4 font-semibold text-white">Company</h2>
               <ul className="space-y-3">
                  {navLinks.map(({ href, label }) => (
                     <li key={href}>
                        <Link href={href} className="hover:text-white">
                           {label}
                        </Link>
                     </li>
                  ))}
               </ul>
            </div>

            <div className="lg:col-span-2">
               <h2 className="mb-4 font-semibold text-white">Products</h2>
               <ul className="space-y-3">
                  {products.map(({ slug, name }) => (
                     <li key={slug}>
                        <Link href={`/products#${slug}`} className="hover:text-white">
                           {name}
                        </Link>
                     </li>
                  ))}
               </ul>
            </div>

            <div className="lg:col-span-4">
               <h2 className="mb-4 font-semibold text-white">Get in Touch</h2>
               <ul className="space-y-4">
                  {site.offices.map((office) => (
                     <li key={office.name} className="flex gap-3">
                        <LuMapPin className="mt-1 shrink-0 text-brick-500" />
                        <span>
                           <span className="block text-stone-200">{office.name}</span>
                           {office.address}
                        </span>
                     </li>
                  ))}
                  <li>
                     <a href={site.phoneHref} className="flex items-center gap-3 hover:text-white">
                        <LuPhone className="shrink-0 text-brick-500" /> {site.phone}
                     </a>
                  </li>
                  <li>
                     <a href={`mailto:${site.email}`} className="flex items-center gap-3 hover:text-white">
                        <LuMail className="shrink-0 text-brick-500" /> {site.email}
                     </a>
                  </li>
                  <li className="flex items-center gap-3">
                     <LuClock className="shrink-0 text-brick-500" /> {site.hours}
                  </li>
               </ul>
            </div>
         </div>

         <div className="border-t border-white/10">
            <div className="site-container flex flex-col gap-2 py-6 text-sm sm:flex-row sm:justify-between">
               <p>
                  &copy; {new Date().getFullYear()} {site.name}. All rights reserved.
               </p>
               <p>Quality bricks &amp; wheelbarrows, supplied nationwide.</p>
            </div>
         </div>
      </footer>
   );
}
