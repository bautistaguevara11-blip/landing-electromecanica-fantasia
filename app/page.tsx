import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Milestones from "@/components/Milestones";
import About from "@/components/About";
import Services from "@/components/Services";
import Brands from "@/components/Brands";
import Sectors from "@/components/Sectors";
import Generators from "@/components/Generators";
import Catalog from "@/components/Catalog";
import Videos from "@/components/Videos";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        <Milestones />
        <About />
        <Services />
        <Brands />
        <Sectors />
        <Generators />
        <Catalog />
        <Videos />
      </main>
      <Contact />
    </>
  );
}
