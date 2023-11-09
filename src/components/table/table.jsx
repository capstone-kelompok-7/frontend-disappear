import React from "react";

function Tabel({ data, columns }) {
  return (
    <table className="min-w-full bg-white shadow-md rounded- border border-neutral-500">
      <thead>
        <tr className="bg-[#C7C7C7] text-black">
          {columns.map((column, index) => (
            <th
              key={index}
              className="px-6 py-3 text-center font-semibold text-black uppercase tracking-wider border border-neutral-500"
            >
              {column}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row, rowIndex) => (
          <tr
            key={rowIndex}
            className={rowIndex % 2 === 0 ? "bg-[#ECECEC]" : "bg-[#FFFFFF]"}
          >
            {columns.map((column, columnIndex) => (
              <td
                key={columnIndex}
                className="px-6 py-4 whitespace-nowrap border border-neutral-500"
              >
                {row[column]}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Tabel;
