import React, { useMemo } from "react";

function PageNation(props) {
  const { page, onClickPrevious, onClickNext, onClickPage } = props;

  const maxPagesToShow = 3;
  const ellipsis = "...";

  const addPageRange = (start, end) =>
    Array.from({ length: end - start + 1 }, (_, i) => start + i);

  const displayedPages = useMemo(() => {
    if (!page) return [];

    const { current_page, total_page } = page;

    if (total_page <= maxPagesToShow) {
      return addPageRange(1, total_page);
    }

    if (current_page <= maxPagesToShow) {
      return [...addPageRange(1, maxPagesToShow), ellipsis, total_page];
    }

    if (current_page >= total_page - 2) {
      return [
        1,
        ellipsis,
        ...addPageRange(total_page - maxPagesToShow + 1, total_page),
      ];
    }

    return [
      1,
      ellipsis,
      ...addPageRange(current_page - 1, current_page + 1),
      ellipsis,
      total_page,
    ];
  }, [page]);

  return (
    <div className="flex justify-end items-center mt-4">
      <button
        className="join-item btn btn-outline"
        disabled={page?.current_page === 1}
        onClick={onClickPrevious}
      >
        &lt; Sebelumnya
      </button>
      {displayedPages.map((pageNumber, index) => (
        <button
          className="hover:bg-primary-green hover:text-white p-3"
          key={index}
          disabled={page?.current_page === pageNumber}
          onClick={() => onClickPage(pageNumber)}
        >
          {pageNumber}
        </button>
      ))}
      <button
        className="join-item btn btn-outline"
        disabled={page?.current_page === page?.totalPage}
        onClick={onClickNext}
      >
        Selanjutnya &gt;
      </button>
    </div>
  );
}

export default PageNation;
