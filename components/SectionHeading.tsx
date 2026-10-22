type Props = {
   eyebrow: string;
   title: string;
   description?: string;
   align?: "left" | "center";
};

export default function SectionHeading({
   eyebrow,
   title,
   description,
   align = "left",
}: Props) {
   return (
      <div className={align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
         <p className="eyebrow">{eyebrow}</p>
         <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-charcoal sm:text-4xl">
            {title}
         </h2>
         {description && (
            <p className="mt-4 text-lg leading-relaxed text-stone-600">{description}</p>
         )}
      </div>
   );
}
