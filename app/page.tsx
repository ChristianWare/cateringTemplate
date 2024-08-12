import Hero from "../components/Hero/Hero";
import PostHero from "../components/PostHero/PostHero";
import Featured from "../components/Featured/Featured";
import Discover from "../components/Discover/Discover";
import Properties from "../components/Properties/Properties";
import Owner from "../components/Owner/Owner";
import Faqs from "../components/Faqs/Faqs";
import Error from "./error";
import BlogSection from "../components/BlogSection/BlogSection";
import { revalidatePath } from "next/cache";
import AboutSectionii from "../components/AboutSectionii/AboutSectionii";
import Amenities from "../components/Amenities/Amenities";
import ContactArea from "../components/ContactArea/ContactArea";
import Amenitiesii from "../components/Amenitiesii/Amenitiesii";
import Testimonials from "../components/Testimonials/Testimonials";
import HowItWorks from "../components/HowItWorks/HowItWorks";
import AboutUsSection from "../components/AboutUsSection/AboutUsSection";
import Popular from "../components/Popular/Popular";
import Usp from "../components/Usp/Usp";
import Faq from "../components/Faq/Faq";
import NewsLetter from "../components/NewsLetter/NewsLetter";

export const metadata = {
  title: "Home - Elite Retreat Rentals",
  description: "This is the description for the home page of this application.",
};

export const revalidate = 10;

const getRooms = async () => {
  try {
    const res = await fetch(`${process.env.API_URL}/api/rooms`);
    const data = res.json();
    // revalidatePath("/api/rooms");
    return data;
  } catch (error) {
    console.log("error => ", error);
  }
};

export default async function Home() {
  const data = await getRooms();

  if (data?.errMessage) {
    return <Error error={data} />;
  }

  return (
    <div>
      <Hero />
      <HowItWorks />
      <AboutUsSection />
      <Popular />
      <Usp />
      <Testimonials />
      <Faq />
      <BlogSection />
      <NewsLetter />
      {/* <AboutSectionii />
      <Amenities />
      <Amenitiesii />
      <Featured data={data} />
      <Faqs />
      <Discover />
      <Properties data={data} />
      <Owner
        heading='“Revolutionizing luxury rentals, we own and manage our properties, ensuring unparalleled design, service, and a cohesive experience across our distinctive collection.”'
        copy='We redefine the holiday rental experience by directly owning and managing our properties, allowing for unparalleled design, service, and a cohesive experience across our distinctive collection, standing out in the evolving landscape of luxury accommodations.'
      />
      <Testimonials />
      <BlogSection blogData={blogs} />
      <ContactArea /> */}
    </div>
  );
}
