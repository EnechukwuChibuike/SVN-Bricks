import Link from "next/link";
import { site } from "@/lib/site";

export default function Logo({ light = false }: { light?: boolean }) {
   return (
      <Link href="/" className="flex items-center gap-2.5" aria-label={site.name}>
         <svg viewBox="0 0 32 32" className="size-9 shrink-0" aria-hidden="true">
            <rect width="32" height="32" rx="7" fill="var(--color-brick-600)" />
            <g fill="#fff">
               <rect x="6" y="8" width="9" height="4" rx="1" />
               <rect x="17" y="8" width="9" height="4" rx="1" />
               <rect x="6" y="14" width="4" height="4" rx="1" />
               <rect x="12" y="14" width="9" height="4" rx="1" />
               <rect x="23" y="14" width="3" height="4" rx="1" />
               <rect x="6" y="20" width="9" height="4" rx="1" />
               <rect x="17" y="20" width="9" height="4" rx="1" />
            </g>
         </svg>
         <span className="leading-none">
            <span
               className={`block text-lg font-extrabold tracking-tight ${light ? "text-white" : "text-charcoal"}`}
            >
               {site.name}
            </span>
            <span
               className={`block text-[0.68rem] font-semibold tracking-[0.14em] uppercase ${light ? "text-stone-400" : "text-stone-500"}`}
            >
               {site.tagline}
            </span>
         </span>
      </Link>
   );
}
