/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import React, { useState } from "react";
import Modal from "react-modal";

import { createCarousel } from "@/utils/api/carousel/api";
import { CheckCircledIcon } from "@radix-ui/react-icons";
import { useToast } from "@/components/ui/use-toast";

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
  onAddPopup,
  file,
}) => {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);

  const handlePopUp = async (data) => {
    try {
      setLoading(true);
      await createCarousel({
        name: popupName,
        photo: file,
      });

      let title, description;
      if (popupLabel === "Tambah Carousel") {
        title = "Berhasil Menambahkan Carousel!";
        description =
          "Data Carousel telah berhasil ditambahkan, nih. Silahkan nikmati fitur lainnya!";
      } else if (popupLabel === "Edit Carousel") {
        title = "Berhasil Mengubah Carousel!";
        description =
          "Data Carousel berhasil diperbarui, nih. Silahkan nikmati fitur lainnya!";
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
          <div className="bg-white flex flex-col gap-4 w-full h-[400px] items-center px-12 py-20 rounded">
            <div className="text-3xl font-bold tracking-[0.32] leading-[19.6px]">
              {popupLabel}
            </div>
            <div className="flex flex-col gap-4 w-full h-40 mt-10">
              <div>
                <input
                  className="w-full rounded-[5px] font-poppins p-2 border"
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
                  className="w-full rounded-[5px] font-poppins p-2 border"
                  id="fileInput"
                  name="fileInput"
                  onChange={(e) => onFileChange(e.target.files[0])}
                />
              </div>
            </div>

            <div className="flex flex-row justify-between items-start gap-x-10 mt-10">
              <div className="border-solid shadow-[0px_2px_4px_0px_rgba(0,_0,_0,_0.15)] bg-white flex flex-col h-10 items-center text-center pl-6 py-2 border-[#25745A] border rounded-full">
                <button
                  className="text-xl font-semibold font-['Inter'] tracking-[0.2] leading-[19.6px] mr-8"
                  style={{ color: "#25745A" }}
                  to="/carousel"
                  onClick={closeModal}
                >
                  {cancelButtonLabel}
                </button>
              </div>
              <div className="border-solid shadow-[0px_2px_4px_0px_rgba(0,_0,_0,_0.15)] bg-[#25745A] flex flex-col h-10 items-center py-2 rounded-full">
                <button
                  type="button"
                  className="text-xl text-white font-['Inter'] tracking-[0.2] leading-[19.6px] mx-8"
                  onClick={handlePopUp}
                >
                  {confirmButtonLabel}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default PopUp;
