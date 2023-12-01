import Swal from "sweetalert2";
import "../../styles/delete.css";

const Delete = async ({ title, text }) => {
  return new Promise((resolve) => {
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
        title,
        text,
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
        resolve(result);
      });
  });
};

export default Delete;
