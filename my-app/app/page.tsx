import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Product from "./components/Product";
import CTA from "./components/CTA";
import Footer from "./components/Footer";
import NewsletterSignup from "./components/NewsletterSignup";

export default function Home() {
  return (
    <main className="">
      <Navbar />
      <Hero />
      <CTA />
      <NewsletterSignup />
      <Footer />
    </main>
  );
}
