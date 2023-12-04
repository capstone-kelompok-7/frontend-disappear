import { React, useState } from "react";
import Modal from "react-modal";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { CheckCircledIcon } from "@radix-ui/react-icons";
import { createCategory } from "@/utils/api/category/api";

const PopUp = ({
  isOpen,
  closeModal,
  popupLabel,
  placeholder,
  cancelButtonLabel,
  confirmButtonLabel,
  onNameChange,
  onFileChange,
  popupName,
  file,
  onAddPopup,
}) => {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);

  const handlePopUp = async (data) => {
    try {
      setLoading(true);
      await createCategory({
        name: popupName,
        photo: file,
      });

      let title, description;
      if (popupLabel === "Tambah Kategori") {
        title = "Berhasil Menambahkan Kategori!";
        description =
          "Kategori produk telah berhasil ditambah, nih. Silahkan nikmati fitur lainnya!";
      } else if (popupLabel === "Edit Kategori") {
        title = "Berhasil Mengubah Kategori!";
        description =
          "Kategori produk telah berhasil diperbarui, nih. Silahkan nikmati fitur lainnya!";
      }
      toast({
        title: (
          <div className="flex items-center gap-3">
            <CheckCircledIcon />
            <span className="ml-2">{title}</span>
          </div>
        ),
        description: description,
        color: "#000000",
      });

      onAddPopup(popupName, file);
    } catch (error) {
      toast({
        title: "Error",
        description: error.message || "Terjadi kesalahan saat menyimpan data.",
        color: "#FF0000",
      });
    } finally {
      setLoading(false);
    }
    closeModal();
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      style={{
        overlay: {
          backgroundColor: "rgba(0, 0, 0, 0.5)",
        },
        content: {
          width: "100%",
          maxWidth: "500px",
          maxHeight: "80vh",
          margin: "auto",
          background: "none",
          border: "none",
          overflow: "hidden",
        },
      }}
    >
      <div className="flex items-center justify-center font-poppins">
        <div className="w-full p-6 space-y-6 rounded-xl shadow-lg bg-white">
          <div className="bg-white flex flex-col gap-4 w-full h-96 items-center px-12 py-10 rounded">
            <div className="text-3xl font-bold">{popupLabel}</div>
            <div className="flex flex-col gap-4 w-full h-40 mt-10">
              <div>
                <input
                  className="w-full rounded-sm font-poppins border-black mb-5 p-2 border"
                  type="text"
                  id="inputName"
                  name="inputName"
                  placeholder={placeholder}
                  value={popupName}
                  onChange={(e) => onNameChange(e.target.value)}
                />
              </div>
              <div>
                <input
                  type="file"
                  className="w-full border-black rounded-sm font-poppins p-2 border"
                  id="inputFile"
                  name="inputFile"
                  onChange={(e) => onFileChange(e.target.files[0])}
                />
              </div>
            </div>

            <div className="flex flex-row justify-between items-start gap-x-10 mt-10">
              <div>
                <Button
                  className="border-solid flex flex-col items-center text-center h-10 py-1.5 hover:bg-white space-x-2 border-primary-green border bg-white p-2 rounded-full text-lg text-primary-green font-semibold font-['Inter'] mx-8"
                  to="/category"
                  onClick={closeModal}
                >
                  {cancelButtonLabel}
                </Button>
              </div>
              <div>
                <Button
                  type="button"
                  className="border-solid bg-secondary-green hover:bg-secondary-green flex flex-col h-10 items-center py-1.5 rounded-full text-lg font-semibold text-white font-['Inter'] mx-8"
                  onClick={handlePopUp}
                >
                  {confirmButtonLabel}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default PopUp;
