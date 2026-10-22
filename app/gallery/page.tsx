import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import ProjectGallery from "@/components/ProjectGallery";
import CtaBanner from "@/components/CtaBanner";
import { projects } from "@/lib/site";

export const metadata: Metadata = {
   title: "Projects",
   description: "Homes and developments across Nigeria finished with bricks from SVN Group.",
};

export default function GalleryPage() {
   return (
      <>
         <PageHeader
            eyebrow="Projects"
            title="Our completed projects"
            description="Homes, estates and commercial buildings across Nigeria, finished with bricks supplied by SVN Group."
            image="/images/image6.jpeg"
         />
         <section className="site-container py-20">
            <ProjectGallery images={projects} />
         </section>
         <CtaBanner />
      </>
   );
}
