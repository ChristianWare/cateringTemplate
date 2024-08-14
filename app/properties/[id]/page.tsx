import Nav from "../../../components/Nav/Nav";
import Popular from "../../../components/Popular/Popular";
import RoomDetails from "../../../components/RoomDetails/RoomDetails";
import Error from "../../error";

interface Props {
  params: { id: string };
}

export const revalidate = 10;
// export const dynamic = "force-dynamic";

const getRoom = async (id: string) => {
  const res = await fetch(`${process.env.API_URL}/api/rooms/${id}`);
  return res.json();
};

const getRooms = async () => {
  try {
    const res = await fetch(`${process.env.API_URL}/api/rooms`);
    const data = res.json();
    return data;
  } catch (error) {
    console.log("error => ", error);
  }
};

export default async function RoomDetailsPage({ params }: Props) {
  const data = await getRoom(params?.id);
  const dataii = await getRooms();

  if (data?.errMessage) {
    return <Error error={data} />;
  }

  return (
    <main style={{ backgroundColor: "#fffae6" }}>
      <Nav color='olive' barColor='oliveBar' />
      <RoomDetails data={data} />
      <Popular data={dataii} />
    </main>
  );
}

export async function generateMetadata({ params }: Props) {
  const data = await getRoom(params?.id);

  return {
    title: data?.room?.name,
  };
}
