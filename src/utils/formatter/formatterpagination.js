const generatePagesToDisplay = (current_page, total_page) => {
  const maxPagesToShow = 5;
  let pagesToDisplay = [current_page];

  if (total_page <= maxPagesToShow) {
    pagesToDisplay = Array.from({ length: total_page }, (_, i) => i + 1);
  } else if (current_page <= 3) {
    pagesToDisplay = [1, 2, 3, 4, "...", total_page];
  } else if (current_page >= total_page - 2) {
    pagesToDisplay = [
      1,
      "...",
      total_page - 3,
      total_page - 2,
      total_page - 1,
      total_page,
    ];
  } else {
    pagesToDisplay = [
      1,
      "...",
      current_page - 1,
      current_page,
      current_page + 1,
      "...",
      total_page,
    ];
  }

  return pagesToDisplay;
};

export default generatePagesToDisplay;
