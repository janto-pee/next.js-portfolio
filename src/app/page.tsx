import Contact from "@/components/Contact/Contact";
import Hero from "@/components/Hero/Hero";
import Portfolio from "@/components/Portfolio/Portfolio";
import Resume from "@/components/Resume/Resume";
import Skills from "@/components/Skills/Skills";
import Testimonial from "@/components/Testimonial/Testimonial";

export default function Home() {
  return (
    <>
      <Hero />
      <Resume />
      <Testimonial />
      <Skills />
      <Portfolio />
      <Contact />
    </>
  );
}
