import { notFound } from "next/navigation";

const API_URL = "http://localhost:50860";

export default class ApiService {
  static async fetch(pathname: string) {
    const url = new URL(pathname, API_URL);
    const response = await fetch(url);

    if (!response.ok) {
      if (response.status === 404) {
        notFound();
      } else {
        throw new Error(response.statusText);
      }
    }

    return response.json();
  }
}
