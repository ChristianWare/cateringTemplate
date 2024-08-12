import ContactSection from "../../components/ContactSection/ContactSection";
import Faqs from "../../components/Faqs/Faqs";
import FinalCTA1 from "../../components/FinalCTA1/FinalCTA1";
import PageIntro from "../../components/PageIntro/PageIntro";

const contact = () => {
  return (
    <>
      <PageIntro
        heading='STAY IN TOUCH'
        copy='We look forward to spesking with you soon. Feel free to reach out to us anytime.'
      />
      <ContactSection />
      <Faqs />
      <FinalCTA1 />
    </>
  );
};
export default contact;
