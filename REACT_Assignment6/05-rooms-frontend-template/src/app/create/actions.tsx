import RoomService from "@/services/RoomService";
import { revalidatePath } from "next/cache";

export async function onSubmit(data: FormData) {
  "use server";

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

  if (result.status === 200) {
    revalidatePath("/rooms");
  }

  revalidatePath("/rooms");

  // Is returned to `[state] = useFormState(…)`
  return result;
}
