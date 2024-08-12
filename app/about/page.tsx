import AboutHero from "../../components/AboutHero/AboutHero";
import AboutSection from "../../components/AboutSection/AboutSection";
import BlogSection from "../../components/BlogSection/BlogSection";
import Faq from "../../components/Faq/Faq";
import Galleryii from "../../components/Galleryii/Galleryii";
import NewsLetter from "../../components/NewsLetter/NewsLetter";
import OurMission from "../../components/OurMission/OurMission";
import OurStory from "../../components/OurStory/OurStory";
import Testimonials from "../../components/Testimonials/Testimonials";

export default function AboutPage() {
  return (
    <main>
      <AboutHero />
      <AboutSection />
      <OurStory />
      <OurMission />
      <Galleryii />
      <Testimonials />
      <Faq />
      <BlogSection />
      <NewsLetter />
    </main>
  );
}
