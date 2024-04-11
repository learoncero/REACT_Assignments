import CreateRoomForm from "./CreateRoomForm";
import Text from "@/components/Text";

export default function CreateCabinPage() {
  return (
    <div>
      <Text as="h1" variant="h1" className="pb-10">
        Add cabin
      </Text>
      <CreateRoomForm />
    </div>
  );
}
