import { Room } from "@/types";
import Image from "next/image";

type Props = {
  room: Room;
};

export default function RoomDetail({ room }: Props) {
  return (
    <>
      <h1 className="font-bold text-2xl">{room.title}</h1>
      <Image
        src={room.heroUrl}
        width={400}
        height={200}
        alt={room.title}
        className="py-5"
      />
      <p>{room.description}</p>
    </>
  );
}
