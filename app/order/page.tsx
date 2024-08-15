import Faq from "../../components/Faq/Faq";
import HowItWorks from "../../components/HowItWorks/HowItWorks";
import OrderHero from "../../components/OderHero/OrderHero";
import OrderDetails from "../../components/OrderDetails/OrderDetails";

export default function orderPage() {
  return (
    <main style={{ backgroundColor: "#fffae6" }}>
      <OrderHero />
      <OrderDetails />
      <HowItWorks />
      <Faq />
    </main>
  );
}
