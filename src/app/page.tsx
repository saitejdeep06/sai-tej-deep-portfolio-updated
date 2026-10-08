import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Capabilities from "@/components/sections/Capabilities";
import Skills from "@/components/sections/Skills";
import FeaturedProjects from "@/components/sections/FeaturedProjects";
import LiveProjects from "@/components/sections/LiveProjects";
import Education from "@/components/sections/Education";
import ResumeCTA from "@/components/sections/ResumeCTA";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <main id="top">
      <Hero />
      <About />
      <Capabilities />
      <Skills />
      <FeaturedProjects />
      <LiveProjects />
      <Education />
      <ResumeCTA />
      <Contact />
      <Footer />
    </main>
  );
}
