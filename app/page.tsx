import Hero from "../components/Hero/Hero";
import Error from "./error";
import BlogSection from "../components/BlogSection/BlogSection";
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
      <Popular data={data} />
      <Usp />
      <Testimonials />
      <Faq />
      <BlogSection />
      <NewsLetter />
     
      {/* <Properties data={data} /> */}
     
    </div>
  );
}
