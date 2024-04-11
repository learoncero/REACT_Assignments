import { Collection, Room } from "@/types";
import ApiService, { ApiResponse } from "./ApiService";

export default class RoomService {
  static async getRooms(page: number, pageSize: number, sort: string) {
    const queryParams = new URLSearchParams({
      page: page.toString(),
      size: pageSize.toString(),
      sort,
    });
    const response = await ApiService.fetch(`/rooms?${queryParams.toString()}`);
    const rooms = response.data;
    return rooms as Collection<Room>;
  }

  static async getRoom(id: string) {
    const room = (await ApiService.fetch(`/rooms/${id}`)).data;
    return room as Room;
  }

  static async createRoom(
    title: string,
    description: string,
    heroUrl: string,
    pricePerNightAmount: number
  ) {
    const createdRoom = await ApiService.post("/rooms", {
      title,
      description,
      heroUrl,
      pricePerNight: {
        amount: pricePerNightAmount,
        currency: "USD",
      },
    });

    console.log(createdRoom.data);
    return createdRoom as ApiResponse<Room>;
  }
}
