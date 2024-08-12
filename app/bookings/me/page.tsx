import Error from "../../error";
import MyBookings from "../../../components/booking/MyBookings";
import { getAuthHeader } from "../../../helpers/authHeaders";
import LayoutWrapper from "../../../components/LayoutWrapper/LayoutWrapper";
import ContentPadding from "../../../components/ContentPadding/ContentPadding";
import FinalCTA1 from "../../../components/FinalCTA1/FinalCTA1";

export const metadata = {
  title: "My Bookings - BookIT",
  description: "This is the description for the home page of this application.",
};

const getBookings = async () => {
  const authHeader = getAuthHeader();

  const res = await fetch(`${process.env.API_URL}/api/bookings/me`, authHeader);
  return res.json();
};

export default async function MyBookingsPage() {
  const data = await getBookings();

  if (data?.errMessage) {
    return <Error error={data} />;
  }

  return (
    <>
      <LayoutWrapper>
        <ContentPadding>
          <div className='container'>
            <MyBookings data={data} />
          </div>
        </ContentPadding>
      </LayoutWrapper>
      <FinalCTA1 />
    </>
  );
}
