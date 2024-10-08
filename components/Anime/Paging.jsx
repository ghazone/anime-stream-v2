"use client";

import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { useRouter,useState } from "next/navigation";

export const Paging = ({ page = 1 }) => {
  const router = useRouter();
  const pages = parseInt(page)||1;

  const handlePrev = (params = 1) => {
    router.push(`?page=${pages - params}`);
  };
  const handleNext = (params=1) => {
    console.log(pages + params);
    router.push(`?page=${pages + params}`);
  };

  return (
    <Pagination>
      <PaginationContent>
        {page > 1 && (
          <PaginationItem>
            <PaginationPrevious onClick={e =>handlePrev(1)} />
          </PaginationItem>
        )}
        <PaginationItem>
          {pages}
        </PaginationItem>
        <PaginationItem>
          <PaginationEllipsis />
        </PaginationItem>
        <PaginationItem>
          <PaginationNext onClick={e=>handleNext(1)} />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
};