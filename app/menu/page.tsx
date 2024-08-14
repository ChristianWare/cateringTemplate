import BlogSection from "../../components/BlogSection/BlogSection";
import Faq from "../../components/Faq/Faq";
import MenuHero from "../../components/MenuHero/MenuHero";
import Popular from "../../components/Popular/Popular";
import Testimonials from "../../components/Testimonials/Testimonials";
import Error from "../error";

export const revalidate = 10;

const getRooms = async () => {
  try {
    const res = await fetch(`${process.env.API_URL}/api/rooms`);
    const data = res.json();
    return data;
  } catch (error) {
    console.log("error => ", error);
  }
};

export default async function MenuPage() {
  const data = await getRooms();

  if (data?.errMessage) {
    return <Error error={data} />;
  }
  return (
    <main>
      <MenuHero />
      <Popular data={data} />
      <Testimonials />
      <Faq />
      <BlogSection />
    </main>
  );
}
