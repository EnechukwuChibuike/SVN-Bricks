"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { LuChevronLeft, LuChevronRight, LuExpand, LuX } from "react-icons/lu";

type Props = { images: { src: string; alt: string }[] };

export default function ProjectGallery({ images }: Props) {
   const [active, setActive] = useState<number | null>(null);
   const isOpen = active !== null;
   const count = images.length;

   const step = (dir: number) =>
      setActive((i) => (i === null ? i : (i + dir + count) % count));

   // Keyboard controls and scroll lock while the lightbox is open.
   useEffect(() => {
      if (!isOpen) return;
      const onKey = (e: KeyboardEvent) => {
         if (e.key === "Escape") setActive(null);
         const dir = e.key === "ArrowRight" ? 1 : e.key === "ArrowLeft" ? -1 : 0;
         if (dir) setActive((i) => (i === null ? i : (i + dir + count) % count));
      };
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", onKey);
      return () => {
         document.body.style.overflow = "";
         window.removeEventListener("keydown", onKey);
      };
   }, [isOpen, count]);

   return (
      <>
         <div className="columns-1 gap-4 sm:columns-2 lg:columns-3">
            {images.map(({ src, alt }, i) => (
               <button
                  key={src}
                  type="button"
                  onClick={() => setActive(i)}
                  className="group relative mb-4 block w-full cursor-zoom-in overflow-hidden rounded-xl"
               >
                  <Image
                     src={src}
                     alt={alt}
                     width={800}
                     height={600}
                     sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                     className="h-auto w-full transition-transform duration-500 group-hover:scale-105"
                  />
                  <span className="absolute inset-0 flex items-end bg-linear-to-t from-black/70 via-transparent p-5 text-left opacity-0 transition-opacity group-hover:opacity-100">
                     <span className="flex w-full items-center justify-between gap-3 text-sm font-medium text-white">
                        {alt} <LuExpand className="shrink-0" />
                     </span>
                  </span>
               </button>
            ))}
         </div>

         {active !== null && (
            <div
               role="dialog"
               aria-modal="true"
               aria-label={images[active].alt}
               onClick={() => setActive(null)}
               className="fixed inset-0 z-60 flex items-center justify-center bg-black/90 p-4"
            >
               <button
                  type="button"
                  aria-label="Close"
                  onClick={() => setActive(null)}
                  className="absolute top-4 right-4 grid size-12 place-items-center rounded-full text-3xl text-white hover:bg-white/10"
               >
                  <LuX />
               </button>
               <button
                  type="button"
                  aria-label="Previous image"
                  onClick={(e) => {
                     e.stopPropagation();
                     step(-1);
                  }}
                  className="absolute left-2 grid size-12 place-items-center rounded-full text-3xl text-white hover:bg-white/10 sm:left-6"
               >
                  <LuChevronLeft />
               </button>
               <figure onClick={(e) => e.stopPropagation()} className="max-w-5xl">
                  <Image
                     src={images[active].src}
                     alt={images[active].alt}
                     width={1600}
                     height={1200}
                     sizes="90vw"
                     className="max-h-[80vh] w-auto rounded-lg object-contain"
                  />
                  <figcaption className="mt-4 text-center text-sm text-stone-300">
                     {images[active].alt} · {active + 1} / {images.length}
                  </figcaption>
               </figure>
               <button
                  type="button"
                  aria-label="Next image"
                  onClick={(e) => {
                     e.stopPropagation();
                     step(1);
                  }}
                  className="absolute right-2 grid size-12 place-items-center rounded-full text-3xl text-white hover:bg-white/10 sm:right-6"
               >
                  <LuChevronRight />
               </button>
            </div>
         )}
      </>
   );
}
