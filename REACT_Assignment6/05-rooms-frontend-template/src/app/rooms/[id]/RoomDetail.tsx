import { Room } from "@/types";
import Image from "next/image";
import Text from "@/components/Text";
import formatDate from "@/utils/formatDate";
import formatCurrency from "@/utils/formatCurrency";

type Props = {
  room: Room;
};

export default function RoomDetail({ room }: Props) {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <Text as="h1" variant="h1" className="text-3xl font-bold mb-4">
        {room.title}
      </Text>
      <div className="relative w-full h-80 mb-8">
        <Image
          src={room.heroUrl}
          layout="fill"
          objectFit="cover"
          alt={room.title}
          className="rounded-lg"
        />
      </div>
      <p className="text-lg mb-4">{room.description}</p>
      <div className="flex justify-between items-center mb-4">
        <p className="text-gray-600">
          Created at: {formatDate(room.createdAt)}
        </p>
        <p className="text-gray-600">
          Price per night: {formatCurrency(room.pricePerNight)}
        </p>
      </div>
    </div>
  );
}
