import Nav from "../../../components/Nav/Nav";
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

export default async function RoomDetailsPage({ params }: Props) {
  const data = await getRoom(params?.id);

  if (data?.errMessage) {
    return <Error error={data} />;
  }

  return (
    <main style={{ backgroundColor: "#fffae6" }}>
      <Nav color='olive' barColor='oliveBar' />
      <RoomDetails data={data} />
    </main>
  );
}

export async function generateMetadata({ params }: Props) {
  const data = await getRoom(params?.id);

  return {
    title: data?.room?.name,
  };
}
