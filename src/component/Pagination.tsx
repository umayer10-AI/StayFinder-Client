"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";

interface Props {
  currentPage: number;
  totalPages: number;
}

export default function Pagination({
  currentPage,
  totalPages,
}: Props) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const changePage = (page: number) => {
    if (page < 1 || page > totalPages) return;

    const params = new URLSearchParams(searchParams.toString());
    params.set("page", page.toString());

    router.push(`?${params.toString()}`);
  };

  return (
    <div className="mt-12 flex items-center justify-center gap-3 flex-wrap">
      {/* Previous */}
      <button
        onClick={() => changePage(currentPage - 1)}
        disabled={currentPage === 1}
        className="flex h-11 w-11 items-center justify-center rounded-xl border border-zinc-700 bg-zinc-900 text-white transition hover:border-orange-500 hover:bg-orange-500 disabled:cursor-not-allowed disabled:opacity-40"
      >
        <ChevronLeft size={20} />
      </button>

      {/* Page Numbers */}
      {Array.from({ length: totalPages }).map((_, index) => {
        const page = index + 1;

        return (
          <button
            key={page}
            onClick={() => changePage(page)}
            className={`flex h-11 w-11 items-center justify-center rounded-xl border text-sm font-semibold transition
              ${
                currentPage === page
                  ? "border-orange-500 bg-orange-500 text-white shadow-lg shadow-orange-500/30"
                  : "border-zinc-700 bg-zinc-900 text-zinc-300 hover:border-orange-500 hover:bg-orange-500 hover:text-white"
              }`}
          >
            {page}
          </button>
        );
      })}

      {/* Next */}
      <button
        onClick={() => changePage(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="flex h-11 w-11 items-center justify-center rounded-xl border border-zinc-700 bg-zinc-900 text-white transition hover:border-orange-500 hover:bg-orange-500 disabled:cursor-not-allowed disabled:opacity-40"
      >
        <ChevronRight size={20} />
      </button>
    </div>
  );
}