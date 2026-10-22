import type { Metadata } from "next";
import { LuClock, LuMail, LuMapPin, LuPhone } from "react-icons/lu";
import PageHeader from "@/components/PageHeader";
import ContactForm from "@/components/ContactForm";
import Map from "@/components/Map";
import { site } from "@/lib/site";

export const metadata: Metadata = {
   title: "Contact Us",
   description:
      "Request a quote or get in touch with SVN Group in Lagos or Owerri.",
};

const quickContacts = [
   { icon: LuPhone, label: "Call us", value: site.phone, href: site.phoneHref },
   { icon: LuMail, label: "Email us", value: site.email, href: `mailto:${site.email}` },
   { icon: LuClock, label: "Opening hours", value: site.hours },
];

export default function ContactPage() {
   return (
      <>
         <PageHeader
            eyebrow="Contact"
            title="Let's talk about your project"
            description="Request a quote, check availability or ask our team for advice. We usually respond within one business day."
            image="/images/image1.jpeg"
         />

         <section className="site-container grid gap-6 py-16 md:grid-cols-3">
            {quickContacts.map(({ icon: Icon, label, value, href }) => {
               const content = (
                  <>
                     <span className="grid size-12 shrink-0 place-items-center rounded-lg bg-brick-100 text-xl text-brick-700">
                        <Icon />
                     </span>
                     <span>
                        <span className="block text-sm text-stone-500">{label}</span>
                        <span className="block font-semibold break-all text-charcoal">{value}</span>
                     </span>
                  </>
               );
               const className =
                  "flex items-center gap-4 rounded-2xl border border-stone-200 p-6 transition-colors";
               return href ? (
                  <a key={label} href={href} className={`${className} hover:border-brick-600`}>
                     {content}
                  </a>
               ) : (
                  <div key={label} className={className}>
                     {content}
                  </div>
               );
            })}
         </section>

         <section className="site-container grid gap-10 pb-20 lg:grid-cols-5 lg:pb-28">
            <div className="rounded-2xl border border-stone-200 p-6 sm:p-10 lg:col-span-3">
               <h2 className="text-2xl font-bold text-charcoal">Send us a message</h2>
               <p className="mt-2 mb-8 text-stone-600">
                  Fill in the form and our sales team will get back to you.
               </p>
               <ContactForm />
            </div>

            <div className="flex flex-col gap-6 lg:col-span-2">
               {site.offices.map((office) => (
                  <div key={office.name} className="flex gap-4 rounded-2xl bg-cream p-6">
                     <LuMapPin className="mt-1 shrink-0 text-xl text-brick-600" />
                     <div>
                        <h3 className="font-bold text-charcoal">{office.name}</h3>
                        <p className="mt-1 leading-relaxed text-stone-600">{office.address}</p>
                     </div>
                  </div>
               ))}
               <div className="flex-1 overflow-hidden rounded-2xl border border-stone-200">
                  <Map />
               </div>
            </div>
         </section>
      </>
   );
}
