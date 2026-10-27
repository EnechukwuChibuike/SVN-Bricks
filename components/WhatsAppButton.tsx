import { FaWhatsapp } from "react-icons/fa";
import { site } from "@/lib/site";

export default function WhatsAppButton() {
   return (
      <a
         href={site.whatsappHref}
         target="_blank"
         rel="noopener noreferrer"
         aria-label="Chat with us on WhatsApp"
         className="group fixed right-5 bottom-5 z-50 flex items-center gap-3 sm:right-8 sm:bottom-8"
      >
         <span className="hidden rounded-full bg-white px-4 py-2 text-sm font-semibold text-charcoal shadow-lg transition-opacity group-hover:opacity-100 sm:block sm:opacity-0">
            Chat with us
         </span>
         <span className="relative grid size-14 place-items-center rounded-full bg-[#25D366] text-3xl text-white shadow-lg shadow-black/20 transition-transform group-hover:scale-110">
            <span className="absolute inset-0 animate-ping rounded-full bg-[#25D366] opacity-30 motion-reduce:hidden" />
            <FaWhatsapp className="relative" />
         </span>
      </a>
   );
}
