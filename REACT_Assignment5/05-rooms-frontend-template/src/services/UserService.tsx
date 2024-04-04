import { User } from "@/types";
import ApiService from "./ApiService";

export default class UserService {
  static async getCurrentUser() {
    const me = await ApiService.fetch("/users/me");
    return me as User;
  }
}
