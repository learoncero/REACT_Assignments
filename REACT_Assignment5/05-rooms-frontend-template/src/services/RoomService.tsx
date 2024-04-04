import { Collection, Room } from "@/types";
import ApiService from "./ApiService";

export default class RoomService {
  static async getRooms() {
    const rooms = await ApiService.fetch("http://localhost:59655/rooms");
    return rooms as Collection<Room>;
  }
}
