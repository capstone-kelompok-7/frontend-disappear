import React, { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import { IoImagesOutline, IoTrashOutline } from "react-icons/io5";

export default function Dropzone(props) {
  const { className, isCreateChallenge } = props;

  const [files, setFiles] = useState([]);

  const onDrop = useCallback((acceptedFiles) => {
    if (acceptedFiles?.length) {
      setFiles((previousFile) => [
        ...previousFile,
        ...acceptedFiles.map((file) =>
          Object.assign(file, { preview: URL.createObjectURL(file) })
        ),
      ]);
      console.log(acceptedFiles);
    }
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  const removeFile = (name) => {
    setFiles((files) => files.filter((file) => file.name !== name));
  };

  return (
    <>
      <div {...getRootProps({ className: className })}>
        <input {...getInputProps()} />
        {isDragActive ? (
          <>
            <IoImagesOutline className=" text-9xl m-auto block pt-10" />

            <div className="flex gap-3 items-center justify-center pt-10 pb-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="17"
                height="18"
                viewBox="0 0 17 18"
                fill="none"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M7.23788 13.3525C6.46427 13.3525 5.81895 12.7613 5.7514 11.9906C5.61015 10.3793 5.57441 8.76087 5.64427 7.14558C5.55994 7.13993 5.47563 7.13404 5.39133 7.12789L3.90178 7.01931C2.94973 6.94991 2.41752 5.88834 2.93151 5.08396C4.0277 3.36845 6.03693 1.44839 7.69038 0.260657C8.17419 -0.0868863 8.82584 -0.0868853 9.30966 0.260657C10.9631 1.44839 12.9723 3.36844 14.0685 5.08396C14.5825 5.88834 14.0503 6.94991 13.0983 7.01931L11.6087 7.12789C11.5244 7.13404 11.4401 7.13993 11.3558 7.14557C11.4256 8.76088 11.3899 10.3793 11.2486 11.9906C11.1811 12.7613 10.5358 13.3525 9.76215 13.3525H7.23788ZM7.18148 6.48778C7.06777 8.27501 7.089 10.0683 7.24504 11.8525H9.75499C9.91103 10.0683 9.93226 8.27501 9.81855 6.48778C9.8058 6.28741 9.87392 6.0903 10.0077 5.94056C10.1414 5.79081 10.3296 5.70095 10.5301 5.69107C10.8535 5.67514 11.1767 5.6554 11.4997 5.63186L12.5815 5.553C11.6219 4.1397 10.4204 2.90545 9.0313 1.9076L8.50002 1.52596L7.96873 1.9076C6.57962 2.90545 5.37813 4.13971 4.41858 5.553L5.50038 5.63186C5.82337 5.6554 6.14656 5.67514 6.4699 5.69107C6.67043 5.70095 6.85863 5.79081 6.99237 5.94056C7.12611 6.0903 7.19423 6.28741 7.18148 6.48778Z"
                  fill="#4E4E4E"
                />
                <path
                  d="M2.25 13.7253C2.25 13.311 1.91421 12.9753 1.5 12.9753C1.08579 12.9753 0.75 13.311 0.75 13.7253V15.7253C0.75 16.6917 1.5335 17.4753 2.5 17.4753H14.5C15.4665 17.4753 16.25 16.6917 16.25 15.7253V13.7253C16.25 13.311 15.9142 12.9753 15.5 12.9753C15.0858 12.9753 14.75 13.311 14.75 13.7253V15.7253C14.75 15.8633 14.6381 15.9753 14.5 15.9753H2.5C2.36193 15.9753 2.25 15.8633 2.25 15.7253V13.7253Z"
                  fill="#4E4E4E"
                />
              </svg>
              <p>LETAKKAN FILE DISINI</p>
            </div>
          </>
        ) : (
          <>
            {isCreateChallenge ? (
              <>
                <svg
                  width="80"
                  height="80"
                  viewBox="0 0 80 80"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <mask
                    id="mask0_1505_13585"
                    maskUnits="userSpaceOnUse"
                    x="0"
                    y="0"
                    width="80"
                    height="80"
                  >
                    <rect width="80" height="80" fill="#D9D9D9" />
                  </mask>
                  <g mask="url(#mask0_1505_13585)">
                    <path
                      d="M39.9998 58.3333C44.1665 58.3333 47.7082 56.875 50.6248 53.9583C53.5415 51.0417 54.9998 47.5 54.9998 43.3333C54.9998 39.1667 53.5415 35.625 50.6248 32.7083C47.7082 29.7917 44.1665 28.3333 39.9998 28.3333C35.8332 28.3333 32.2915 29.7917 29.3748 32.7083C26.4582 35.625 24.9998 39.1667 24.9998 43.3333C24.9998 47.5 26.4582 51.0417 29.3748 53.9583C32.2915 56.875 35.8332 58.3333 39.9998 58.3333ZM39.9998 51.6667C37.6665 51.6667 35.6943 50.8611 34.0832 49.25C32.4721 47.6389 31.6665 45.6667 31.6665 43.3333C31.6665 41 32.4721 39.0278 34.0832 37.4167C35.6943 35.8056 37.6665 35 39.9998 35C42.3332 35 44.3054 35.8056 45.9165 37.4167C47.5276 39.0278 48.3332 41 48.3332 43.3333C48.3332 45.6667 47.5276 47.6389 45.9165 49.25C44.3054 50.8611 42.3332 51.6667 39.9998 51.6667ZM13.3332 70C11.4998 70 9.93039 69.3472 8.62484 68.0417C7.31928 66.7361 6.6665 65.1667 6.6665 63.3333V23.3333C6.6665 21.5 7.31928 19.9306 8.62484 18.625C9.93039 17.3194 11.4998 16.6667 13.3332 16.6667H23.8332L29.9998 10H49.9998L56.1665 16.6667H66.6665C68.4998 16.6667 70.0693 17.3194 71.3748 18.625C72.6804 19.9306 73.3332 21.5 73.3332 23.3333V63.3333C73.3332 65.1667 72.6804 66.7361 71.3748 68.0417C70.0693 69.3472 68.4998 70 66.6665 70H13.3332Z"
                      fill="#767676"
                    />
                  </g>
                </svg>
                <p className="mt-2 text-base leading-normal text-neutral-500">
                  Tambah Foto
                </p>
              </>
            ) : (
              <>
                <IoImagesOutline className=" text-9xl m-auto block pt-10" />

                <div className="flex gap-3 items-center justify-center pt-10 pb-5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="17"
                    height="18"
                    viewBox="0 0 17 18"
                    fill="none"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M7.23788 13.3525C6.46427 13.3525 5.81895 12.7613 5.7514 11.9906C5.61015 10.3793 5.57441 8.76087 5.64427 7.14558C5.55994 7.13993 5.47563 7.13404 5.39133 7.12789L3.90178 7.01931C2.94973 6.94991 2.41752 5.88834 2.93151 5.08396C4.0277 3.36845 6.03693 1.44839 7.69038 0.260657C8.17419 -0.0868863 8.82584 -0.0868853 9.30966 0.260657C10.9631 1.44839 12.9723 3.36844 14.0685 5.08396C14.5825 5.88834 14.0503 6.94991 13.0983 7.01931L11.6087 7.12789C11.5244 7.13404 11.4401 7.13993 11.3558 7.14557C11.4256 8.76088 11.3899 10.3793 11.2486 11.9906C11.1811 12.7613 10.5358 13.3525 9.76215 13.3525H7.23788ZM7.18148 6.48778C7.06777 8.27501 7.089 10.0683 7.24504 11.8525H9.75499C9.91103 10.0683 9.93226 8.27501 9.81855 6.48778C9.8058 6.28741 9.87392 6.0903 10.0077 5.94056C10.1414 5.79081 10.3296 5.70095 10.5301 5.69107C10.8535 5.67514 11.1767 5.6554 11.4997 5.63186L12.5815 5.553C11.6219 4.1397 10.4204 2.90545 9.0313 1.9076L8.50002 1.52596L7.96873 1.9076C6.57962 2.90545 5.37813 4.13971 4.41858 5.553L5.50038 5.63186C5.82337 5.6554 6.14656 5.67514 6.4699 5.69107C6.67043 5.70095 6.85863 5.79081 6.99237 5.94056C7.12611 6.0903 7.19423 6.28741 7.18148 6.48778Z"
                      fill="#4E4E4E"
                    />
                    <path
                      d="M2.25 13.7253C2.25 13.311 1.91421 12.9753 1.5 12.9753C1.08579 12.9753 0.75 13.311 0.75 13.7253V15.7253C0.75 16.6917 1.5335 17.4753 2.5 17.4753H14.5C15.4665 17.4753 16.25 16.6917 16.25 15.7253V13.7253C16.25 13.311 15.9142 12.9753 15.5 12.9753C15.0858 12.9753 14.75 13.311 14.75 13.7253V15.7253C14.75 15.8633 14.6381 15.9753 14.5 15.9753H2.5C2.36193 15.9753 2.25 15.8633 2.25 15.7253V13.7253Z"
                      fill="#4E4E4E"
                    />
                  </svg>
                  <p>Letakkan File Anda di sini atau Browser</p>
                </div>
              </>
            )}
          </>
        )}
      </div>

      {/* Preview */}
      <ul>
        {files.map((file) => (
          <li
            key={file.name}
            className=" bg-white border border-gray-300 w-full mt-4 flex items-center justify-between p-4 rounded"
          >
            <div className="flex items-center gap-2">
              <img
                src={file.preview}
                alt={file.name}
                className=" w-12 h-14 rounded object-cover"
                onLoad={() => {
                  URL.revokeObjectURL(file.preview);
                }}
              />
              <div>
                <p>{file.name}</p>
                <p>{file.size / 1000} kb</p>
              </div>
            </div>
            <IoTrashOutline
              className=" text-base cursor-pointer"
              onClick={() => removeFile(file.name)}
            />
          </li>
        ))}
      </ul>
    </>
  );
}
