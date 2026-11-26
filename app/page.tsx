import Hero from "@/components/Hero";
import Services from "@/components/Services";
import FeaturedApp from "@/components/FeaturedApp";
import Portfolio from "@/components/Portfolio";
import About from "@/components/About";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="bg-slate-50">
      <Hero />
      <Services />
      <FeaturedApp /> {/* New Dark Section for Questify */}
      <Portfolio />
      <About />
      <Footer />
    </main>
  );
}