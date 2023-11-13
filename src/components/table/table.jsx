import React from "react";
import { useTable } from "react-table";
import "../../styles/table.css";

function Tabel({ columns, data }) {
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data });

  return (
    <table
      {...getTableProps()}
      className="min-w-full bg-white shadow-md rounded- border border-neutral-500"
    >
      <thead>
        {headerGroups.map((headerGroup, index) => (
          <tr
            key={index}
            {...headerGroup.getHeaderGroupProps()}
            className="bg-[#C7C7C7] text-black"
          >
            {headerGroup.headers.map((column, columnIndex) => (
              <th
                key={columnIndex}
                {...column.getHeaderProps()}
                className="px-6 py-3 text-center font-semibold text-black uppercase tracking-wider border border-neutral-500"
              >
                {column.render("Header")}
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row, index) => {
          prepareRow(row);
          return (
            <tr
              key={index}
              {...row.getRowProps()}
              className={row.index % 2 === 0 ? "bg-[#ECECEC]" : "bg-[#FFFFFF]"}
            >
              {row.cells.map((cell, cellIndex) => {
                return (
                  <td
                    key={cellIndex}
                    {...cell.getCellProps()}
                    className="px-6 py-4 whitespace-nowrap border border-neutral-500"
                  >
                    {cell.render("Cell")}
                  </td>
                );
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default Tabel;
