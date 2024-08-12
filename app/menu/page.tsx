import BlogSection from "../../components/BlogSection/BlogSection";
import Faq from "../../components/Faq/Faq";
import MenuHero from "../../components/MenuHero/MenuHero";
import Popular from "../../components/Popular/Popular";
import Testimonials from "../../components/Testimonials/Testimonials";


export default function MenuPage() {
  return (
    <main>
      <MenuHero />
      {/* All data will come from backend */}
      <Popular />
      <Testimonials />
      <Faq />
      <BlogSection />
    </main>
  );
}
