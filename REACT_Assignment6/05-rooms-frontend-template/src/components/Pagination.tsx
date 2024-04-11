import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/24/solid";
import { ParsedUrlQuery } from "querystring";
import { PageInfo } from "../types";
import IconLink from "./IconLink";
import PageInfoSummary from "./PageInfoSummary";

type Props = {
  page: PageInfo;
  query?: ParsedUrlQuery;
  sort?: string;
};

export default function Pagination({ page, query, sort }: Props) {
  const { number } = page;

  // Map from zero-based page numbers to human readable page numbers
  const prevPage = String(number - 1);
  const nextPage = String(number + 1);

  return (
    <div className="flex gap-4 items-center">
      <IconLink
        aria-label="Previous page"
        disabled={number === 0}
        href={{
          query: {
            ...query, // Preserve others
            page: prevPage,
            sort,
          },
        }}
      >
        <ArrowLeftIcon />
      </IconLink>
      <PageInfoSummary page={page} />
      <IconLink
        aria-label="Next page"
        disabled={page.number >= page.totalPages - 1}
        href={{
          query: {
            ...query, // Preserve others
            page: nextPage,
            sort,
          },
        }}
      >
        <ArrowRightIcon />
      </IconLink>
    </div>
  );
}
