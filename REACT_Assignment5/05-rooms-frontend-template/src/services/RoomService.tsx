import { Collection, Room } from "@/types";
import ApiService from "./ApiService";

export default class RoomService {
  static async getRooms(page: number, pageSize: number, sort: string) {
    const queryParams = new URLSearchParams({
      page: page.toString(),
      size: pageSize.toString(),
      sort,
    });
    const rooms = await ApiService.fetch(`/rooms?${queryParams.toString()}`);
    return rooms as Collection<Room>;
  }

  static async getRoom(id: string) {
    const room = await ApiService.fetch(`/rooms/${id}`);
    return room as Room;
  }
}
