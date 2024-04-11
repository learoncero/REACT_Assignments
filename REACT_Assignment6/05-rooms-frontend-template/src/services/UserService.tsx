import { User } from "@/types";
import ApiService from "./ApiService";

export default class UserService {
  static async getCurrentUser() {
    const response = await ApiService.fetch("/users/me");
    const me = response.data;
    return me as User;
  }
}
