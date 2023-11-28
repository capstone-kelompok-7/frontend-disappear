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
                  dashboardTable ? "text-black" : "text-white uppercase"
                } px-6 py-3 text-center font-semibold   tracking-wider border border-[#ACACAC]`}
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
                    className="table-cell px-6 py-4 whitespace-nowrap border border-[#ACACAC]"
                  >
                    {cell.column.id === "StatusDashboard" && (
                      <div className="flex items-center pl-10">
                        <div
                          className={`rounded-full w-4 h-4 ${
                            cell.value === "Menunggu Konfirmasi"
                              ? "bg-[#F7BC3B]"
                              : "bg-[#37FF33]"
                          }`}
                        ></div>
                        <p className="text-sm ml-2">{cell.value}</p>
                      </div>
                    )}
                    {cell.column.id !== "StatusDashboard" &&
                      cell.render("Cell")}
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
