import Swal from "sweetalert2";
import "../../styles/delete.css";

const Delete = async ({ title, content }) => {
  const swalWithBootstrapButtons = Swal.mixin({
    customClass: {
      container: "rounded",
      popup: "rounded-popup",
      confirmButton: "btn btn-success",
      cancelButton: "btn btn-danger",
    },
  });
  swalWithBootstrapButtons
    .fire({
      title: "Yakin mau hapus data?",
      text: "Data yang sudah dihapus tidak dapat dipulihkan, lho. Coba dipikirkan dulu, yuk!",
      icon: "warning",
      iconColor: "#E50000",

      showCancelButton: true,
      confirmButtonColor: "#E50000",
      cancelButtonColor: "#fff",
      confirmButtonTextColor: "#fff",
      cancelButtonTextColor: "#000",
      color: "#000",
      confirmButtonText: "Hapus",
      cancelButtonText: "Batal",
      reverseButtons: true,
    })
    .then((result) => {
      if (result.isConfirmed) {
        // swalWithBootstrapButtons.fire({
        //   title: "Berhasil menghapus data!",
        //   text: "Data kategori telah berhasil dihapus, nih.",
        //   icon: "success",
        // });
      }
    });
};

export default Delete;
