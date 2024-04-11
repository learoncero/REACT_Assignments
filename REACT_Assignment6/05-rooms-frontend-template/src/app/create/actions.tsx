"use server";

import RoomService from "@/services/RoomService";
import { revalidatePath } from "next/cache";

export default async function onSubmit(state, data: FormData) {
  const title = data.get("title") as string;
  const description = data.get("description") as string;
  const heroUrl = data.get("heroURL") as string;
  const pricePerNight = parseInt(data.get("pricePerNight") as string);

  const result = await RoomService.createRoom(
    title,
    description,
    heroUrl,
    pricePerNight
  );

  if (result.status === 201) {
    revalidatePath("/rooms");
  }

  return result;
}
