import PageInfoSummary from "@/components/PageInfoSummary";
import Text from "@/components/Text";
import Pagination from "@/components/Pagination";
import ResultList from "./ResultList";
import RoomService from "@/services/RoomService";
import SortOptions from "./SortOptions";

type Props = {
  searchParams: {
    page?: string;
    sort?: string;
  };
};

export default async function RoomsPage({ searchParams }: Props) {
  function parsePage(pageParam?: string) {
    if (pageParam) {
      const page = parseInt(pageParam);
      if (Number.isNaN(page)) {
        return undefined;
      } else {
        return page;
      }
    }
  }

  const page = parsePage(searchParams.page) ?? 0;
  const rooms = await RoomService.getRooms(
    page === 0 ? 0 : page - 1,
    9,
    searchParams.sort || "createdAt"
  );

  return (
    <div>
      <div className="flex flex-col gap-8">
        {rooms.page.totalElements === 0 ? (
          <Text variant="h3">Wherrrrre are the cabins, matey!</Text>
        ) : (
          <>
            <div className="flex justify-between">
              <PageInfoSummary page={rooms.page} />
              <SortOptions
                currentSort={searchParams.sort}
                currentPage={searchParams.page ?? "0"}
              />
            </div>
            <ResultList results={rooms.nodes} />
            <Pagination
              page={rooms.page}
              query={searchParams}
              sort={searchParams.sort}
            />
          </>
        )}
      </div>
    </div>
  );
}
