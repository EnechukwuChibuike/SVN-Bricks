"use client";

import { useState, type FormEvent } from "react";
import { useSearchParams } from "next/navigation";
import emailjs from "@emailjs/browser";
import { LuCircleCheck, LuLoaderCircle, LuSend } from "react-icons/lu";
import { productCategories, products } from "@/lib/site";

const SERVICE_ID = "service_2e6ajog";
const TEMPLATE_ID = "template_rgi92dw";
const PUBLIC_KEY = "bOZHC71xqWARx_Ngd";

type Status = "idle" | "sending" | "sent" | "error";

const fieldClass =
   "w-full rounded-lg border border-stone-300 bg-white px-4 py-3 text-charcoal outline-none transition placeholder:text-stone-400 focus:border-brick-600 focus:ring-3 focus:ring-brick-100";
const labelClass = "mb-2 block text-sm font-semibold text-charcoal";

export default function ContactForm() {
   const [status, setStatus] = useState<Status>("idle");

   // Pre-select the product when arriving from a "Get a Quote" link.
   const requested = useSearchParams().get("product");
   const initialProduct = products.some((p) => p.name === requested) ? requested! : "";

   const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      const form = e.currentTarget;
      setStatus("sending");
      try {
         await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form, PUBLIC_KEY);
         form.reset();
         setStatus("sent");
      } catch {
         setStatus("error");
      }
   };

   if (status === "sent") {
      return (
         <div className="flex flex-col items-center justify-center py-16 text-center">
            <LuCircleCheck className="text-6xl text-green-600" />
            <h3 className="mt-5 text-2xl font-bold text-charcoal">Message sent</h3>
            <p className="mt-2 max-w-sm text-stone-600">
               Thank you for reaching out. Our sales team will get back to you
               shortly.
            </p>
            <button
               type="button"
               onClick={() => setStatus("idle")}
               className="btn btn-outline mt-8"
            >
               Send another message
            </button>
         </div>
      );
   }

   return (
      <form onSubmit={handleSubmit} className="grid gap-5 sm:grid-cols-2">
         <div>
            <label htmlFor="user_name" className={labelClass}>
               Full name *
            </label>
            <input id="user_name" name="user_name" required placeholder="John Doe" className={fieldClass} />
         </div>
         <div>
            <label htmlFor="user_email" className={labelClass}>
               Email address *
            </label>
            <input
               id="user_email"
               name="user_email"
               type="email"
               required
               placeholder="you@example.com"
               className={fieldClass}
            />
         </div>
         <div>
            <label htmlFor="user_phone" className={labelClass}>
               Phone number
            </label>
            <input id="user_phone" name="user_phone" type="tel" placeholder="080 0000 0000" className={fieldClass} />
         </div>
         <div>
            <label htmlFor="product" className={labelClass}>
               Product of interest
            </label>
            <select id="product" name="product" defaultValue={initialProduct} className={fieldClass}>
               <option value="">Select a product</option>
               {productCategories.map((category) => (
                  <optgroup key={category.slug} label={category.name}>
                     {products
                        .filter((p) => p.category === category.name)
                        .map(({ slug, name }) => (
                           <option key={slug} value={name}>
                              {name}
                           </option>
                        ))}
                  </optgroup>
               ))}
               <option value="Other">Other / Not sure</option>
            </select>
         </div>
         <div className="sm:col-span-2">
            <label htmlFor="message" className={labelClass}>
               Message *
            </label>
            <textarea
               id="message"
               name="message"
               rows={6}
               required
               placeholder="Tell us about your project, quantities needed and delivery location."
               className={fieldClass}
            />
         </div>
         <div className="flex flex-col gap-4 sm:col-span-2 sm:flex-row sm:items-center">
            <button
               type="submit"
               disabled={status === "sending"}
               className="btn btn-primary disabled:cursor-not-allowed disabled:opacity-70"
            >
               {status === "sending" ? (
                  <>
                     <LuLoaderCircle className="animate-spin" /> Sending…
                  </>
               ) : (
                  <>
                     <LuSend /> Send Message
                  </>
               )}
            </button>
            {status === "error" && (
               <p role="alert" className="text-sm text-red-600">
                  Something went wrong. Please try again or call us directly.
               </p>
            )}
         </div>
      </form>
   );
}
