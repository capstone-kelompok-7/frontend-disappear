import React, { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import { IoImagesOutline, IoTrashOutline } from "react-icons/io5";

export default function Dropzone(props) {
  const { className } = props;

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
          <p>Drop the files here ...</p>
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
                <p>{file.size}</p>
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
