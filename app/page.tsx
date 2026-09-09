import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Generators from "@/components/Generators";
import Catalog from "@/components/Catalog";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        <About />
        <Services />
        <Generators />
        <Catalog />
      </main>
      <Contact />
    </>
  );
}
