function getStatusColor(status) {
  switch (status) {
    case "Menunggu Konfirmasi":
      return "#DC9B09";
    case "Konfirmasi":
      return "#039900";
    case "Gagal":
      return "#E50000";
    default:
      return "#000000";
  }
}

export default getStatusColor;
