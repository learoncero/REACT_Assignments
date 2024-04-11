"use client";
import { ChangeEvent } from "react";
import { useRouter } from "next/navigation";

type Props = {
  currentSort: string;
  currentPage: string;
};

export default function SortOptions({ currentSort, currentPage }: Props) {
  const router = useRouter();

  function onChange(event: ChangeEvent<HTMLSelectElement>) {
    const value = event.target.value;
    const params = new URLSearchParams();
    params.set("sort", value);
    params.set("page", currentPage);
    router.push("?" + params.toString());
  }

  return (
    <div>
      <label htmlFor="sort">Sort by:</label>
      <select name="sort" onChange={onChange} value={currentSort}>
        <option value="createdAt">Newest</option>
        <option value="pricePerNight">Price</option>
      </select>
    </div>
  );
}
