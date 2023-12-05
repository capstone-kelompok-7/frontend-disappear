/* eslint-disable react/prop-types */
import { useTable } from "react-table";

import "../../styles/table.css";

function Tabel({ columns, data, dashboardTable }) {
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data });

  return (
    <table {...getTableProps()} className="min-w-full shadow-md">
      <thead>
        {headerGroups.map((headerGroup, index) => (
          <tr
            key={index}
            {...headerGroup.getHeaderGroupProps()}
            className={`${
              dashboardTable
                ? "text-black bg-[#EFE5DC]"
                : "bg-primary-green text-white"
            }`}
          >
            {headerGroup.headers.map((column, columnIndex) => (
              <th
                key={columnIndex}
                {...column.getHeaderProps()}
                className={` ${
                  dashboardTable
                    ? `text-black border-none ${
                        column.id === "payment_status" ||
                        column.id === "username"
                          ? "text-left "
                          : "text-center"
                      } `
                    : "text-white uppercase border-[#ACACAC]"
                }  px-6 py-3  font-semibold tracking-wider border `}
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
              className={`${
                row.index % 2 === 0 ? "bg-[#ECECEC]" : "bg-[#ECECEC]"
              } ${dashboardTable ? "bg-white" : ""}`}
            >
              {row.cells.map((cell, cellIndex) => {
                return (
                  <td
                    key={cellIndex}
                    {...cell.getCellProps()}
                    className={`${
                      dashboardTable ? "border-none" : "border border-[#ACACAC]"
                    } table-cell px-6 py-20 whitespace-nowrap `}
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
