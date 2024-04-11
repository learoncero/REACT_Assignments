import { redirect } from "next/navigation";

export default function IndexPage() {
  redirect("/rooms?sort=createdAt&page=1");
}
