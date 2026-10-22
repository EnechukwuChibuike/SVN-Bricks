"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { LuClock, LuMail, LuMenu, LuPhone, LuX } from "react-icons/lu";
import Logo from "./Logo";
import { navLinks, site } from "@/lib/site";

export default function Header() {
   const pathname = usePathname();
   const [open, setOpen] = useState(false);
   const close = () => setOpen(false);

   const isActive = (href: string) =>
      href === "/" ? pathname === "/" : pathname.startsWith(href);

   return (
      <header className="sticky top-0 z-50">
         <div className="hidden bg-charcoal text-sm text-stone-300 md:block">
            <div className="site-container flex h-10 items-center justify-between">
               <p className="flex items-center gap-2">
                  <LuClock className="text-brick-500" /> {site.hours}
               </p>
               <div className="flex items-center gap-6">
                  <a href={site.phoneHref} className="flex items-center gap-2 hover:text-white">
                     <LuPhone className="text-brick-500" /> {site.phone}
                  </a>
                  <a href={`mailto:${site.email}`} className="flex items-center gap-2 hover:text-white">
                     <LuMail className="text-brick-500" /> {site.email}
                  </a>
               </div>
            </div>
         </div>

         <div className="border-b border-stone-200 bg-white/95 backdrop-blur">
            <div className="site-container flex h-18 items-center justify-between">
               <Logo />

               <nav className="hidden items-center gap-1 lg:flex">
                  {navLinks.map(({ href, label }) => (
                     <Link
                        key={href}
                        href={href}
                        className={`rounded-md px-4 py-2 text-[0.95rem] font-medium transition-colors ${
                           isActive(href)
                              ? "text-brick-600"
                              : "text-stone-600 hover:text-charcoal"
                        }`}
                     >
                        {label}
                     </Link>
                  ))}
               </nav>

               <div className="flex items-center gap-3">
                  <Link href="/contact" className="btn btn-primary hidden sm:inline-flex">
                     Request a Quote
                  </Link>
                  <button
                     type="button"
                     aria-label={open ? "Close menu" : "Open menu"}
                     aria-expanded={open}
                     onClick={() => setOpen(!open)}
                     className="grid size-11 place-items-center rounded-md text-2xl text-charcoal hover:bg-stone-100 lg:hidden"
                  >
                     {open ? <LuX /> : <LuMenu />}
                  </button>
               </div>
            </div>

            {open && (
               <nav className="border-t border-stone-200 bg-white lg:hidden">
                  <div className="site-container flex flex-col py-3">
                     {navLinks.map(({ href, label }) => (
                        <Link
                           key={href}
                           href={href}
                           onClick={close}
                           className={`border-b border-stone-100 py-3.5 font-medium last:border-none ${
                              isActive(href) ? "text-brick-600" : "text-stone-700"
                           }`}
                        >
                           {label}
                        </Link>
                     ))}
                     <Link
                        href="/contact"
                        onClick={close}
                        className="btn btn-primary mt-3 mb-2 sm:hidden"
                     >
                        Request a Quote
                     </Link>
                  </div>
               </nav>
            )}
         </div>
      </header>
   );
}
