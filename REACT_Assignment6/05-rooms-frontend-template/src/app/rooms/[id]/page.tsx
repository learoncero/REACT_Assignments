import RoomService from "@/services/RoomService";
import RoomDetail from "./RoomDetail";

type Props = {
  params: {
    id: string;
  };
};

export default async function RoomPage({ params }: Props) {
  const room = await RoomService.getRoom(params.id);

  return (
    <div>
      <RoomDetail room={room} />
    </div>
  );
}
