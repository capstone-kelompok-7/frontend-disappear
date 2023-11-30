import { useMemo } from "react";
import generatePagesToDisplay from "@/utils/formatter/formatterpagination";

const Pagination = (props) => {
  const { meta, onClickPrevious, onClickNext, onClickPage } = props;

  const pagesToDisplay = useMemo(
    () => generatePagesToDisplay(meta?.current_page, meta?.total_page),
    [meta]
  );

  return (
    <div className="flex justify-end items-center gap-3 mt-4 mb-4">
      <button
        className="join-item btn btn-outline"
        size="icon"
        disabled={meta?.current_page === 1}
        onClick={onClickPrevious}
      >
        &lt; Sebelumnya
      </button>
      {meta &&
        pagesToDisplay.map((page, index) => {
          return (
            <button
              className="hover:bg-primary-green p-3 rounded-lg"
              size="icon"
              key={`${page}-${index}`}
              disabled={meta?.current_page === page}
              onClick={() => onClickPage(page)}
            >
              {page}
            </button>
          );
        })}
      <button
        className="join-item btn btn-outline"
        size="icon"
        disabled={meta?.current_page === meta?.total_page}
        onClick={onClickNext}
      >
        Selanjutnya &gt;
      </button>
    </div>
  );
};

export default Pagination;
