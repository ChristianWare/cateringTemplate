import Faqs from "../../components/Faqs/Faqs";
import FinalCTA1 from "../../components/FinalCTA1/FinalCTA1";
import PageIntro from "../../components/PageIntro/PageIntro";
import Error from "../error";
import Properties from "../../components/Properties/Properties";
import { revalidatePath } from "next/cache";
import Amenities from "../../components/Amenities/Amenities";
import Amenitiesii from "../../components/Amenitiesii/Amenitiesii";

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

export default async function PropertiesPage() {
  const data = await getRooms();

  if (data?.errMessage) {
    return <Error error={data} />;
  }

  return (
    <>
      <PageIntro
        heading='All properties for rent'
        copy='Here is a comprehensive list of all the properties we have
                available for you to enjoy. Feel free to reach out with
                questions.  '
      />
      <Properties data={data} />
      <Amenitiesii />
      <Amenities />
      <Faqs />
      <FinalCTA1 />
    </>
  );
}
