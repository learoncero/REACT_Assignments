import PageInfoSummary from "@/components/PageInfoSummary";
import Text from "@/components/Text";
import Pagination from "@/components/Pagination";
import ResultList from "./ResultList";
import RoomService from "@/services/RoomService";

export default async function RoomsPage() {
  const rooms = await RoomService.getRooms();

  return (
    <div className="flex flex-col gap-8">
      {rooms.page.totalElements === 0 ? (
        <Text variant="h3">Wherrrrre are the cabins, matey!</Text>
      ) : (
        <>
          <div className="flex justify-between">
            <PageInfoSummary page={rooms.page} />
          </div>
          <ResultList results={rooms.nodes} />
          <Pagination page={rooms.page} />
        </>
      )}
    </div>
  );
}
