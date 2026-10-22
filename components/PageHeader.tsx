import Image from "next/image";
import Link from "next/link";

type Props = {
   eyebrow: string;
   title: string;
   description: string;
   image?: string;
};

export default function PageHeader({
   eyebrow,
   title,
   description,
   image = "/images/background.jpg",
}: Props) {
   return (
      <section className="relative isolate overflow-hidden bg-charcoal">
         <Image
            src={image}
            alt=""
            fill
            priority
            sizes="100vw"
            className="-z-10 object-cover opacity-25"
         />
         <div className="absolute inset-0 -z-10 bg-linear-to-r from-charcoal via-charcoal/85 to-charcoal/40" />
         <div className="site-container py-20 sm:py-24">
            <nav aria-label="Breadcrumb" className="mb-6 text-sm text-stone-400">
               <Link href="/" className="hover:text-white">
                  Home
               </Link>
               <span className="mx-2">/</span>
               <span className="text-stone-200">{eyebrow}</span>
            </nav>
            <h1 className="max-w-3xl text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
               {title}
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-stone-300">
               {description}
            </p>
         </div>
      </section>
   );
}
