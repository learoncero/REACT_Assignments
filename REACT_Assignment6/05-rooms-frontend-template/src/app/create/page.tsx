"use client";

import CreateRoomForm from "./CreateRoomForm";
import Text from "@/components/Text";
import { useRouter } from "next/navigation";
import onSubmit from "./actions";

export default function CreateCabinPage() {
  const router = useRouter();

  async function handleSubmit(state, data: FormData) {
    const result = await onSubmit(state, data);

    if (result.status === 201) {
      router.push("/rooms");
    }

    return result;
  }

  return (
    <div>
      <Text as="h1" variant="h1" className="pb-10">
        Add cabin
      </Text>
      <CreateRoomForm onSubmit={handleSubmit} />
    </div>
  );
}
