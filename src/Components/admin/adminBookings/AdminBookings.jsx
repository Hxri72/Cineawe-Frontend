import React, { Fragment, useEffect, useMemo, useState, useRef } from "react";
import { usePagination, useTable } from "react-table";
import { getAllBookings } from "../../../api_Integration/Admin/admin";
import { useReactToPrint } from "react-to-print";

function AdminBooking() {
  const [bookingData, setBookingData] = useState([]);
  const componentPdf = useRef();

  const generatePDF = useReactToPrint({
    content: () => componentPdf.current,
    documentTitle: "Booking Data",
    pageStyle: "black",
  });

  useEffect(() => {
    const fetchUser = async () => {
      const response = await getAllBookings();
      if (response.success) {
        console.log(response.data);
        setBookingData(response.data);
      } else {
        console.log("no users");
      }
    };
    fetchUser();
  }, []);

  const COLUMNS = [
    {
      Header: "Name",
      accessor: "user",
    },
    {
      Header: "Movie",
      accessor: "movieName",
    },
    {
      Header: "Theater",
      accessor: "theaterName",
    },
    {
      Header: "Date",
      accessor: "showDate",
    },
    {
      Header: "Time",
      accessor: "showTime",
    },
    {
      Header: "Tickets",
      accessor: "selectedSeats.length",
    },
    {
      Header: "TotalPrice",
      accessor: "totalPrice",
    },
  ];

  const columns = useMemo(() => COLUMNS, []);
  const data = useMemo(() => bookingData, [bookingData]);

  const tableInstance = useTable(
    {
      columns,
      data,
    },
    usePagination
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    nextPage,
    previousPage,
    prepareRow,
  } = tableInstance;

  return (
    <Fragment>
      <div className="mainDiv">
        <div className="maindivInside">
          <div className="mainContent">
            {bookingData.length === 0 ? (
              <div className="noShowsHead2">
                <h1 className="text-3xl font-bold text-slate-400">
                  No Bookings
                </h1>
              </div>
            ) : (
              <>
                <div className="text-white p-12 text-2xl">
                  <h1>Booking List</h1>
                </div>

                <div className="flex justify-end">
                  <button
                    className="text-white bg-blue-700 py-1 px-3 mr-4 rounded-md"
                    onClick={generatePDF}
                  >
                    Export to PDF
                  </button>
                </div>
                <div ref={componentPdf} className="w-full">
                  <table
                    className="text-white display mt-3"
                    id="myTable"
                    {...getTableProps()}
                  >
                    <thead>
                      {headerGroups &&
                        headerGroups.map((headerGroup) => (
                          <tr {...headerGroup.getHeaderGroupProps()}>
                            <th>No</th>
                            {headerGroup.headers.map((column) => (
                              <th {...column.getHeaderProps()}>
                                {column.render("Header")}
                              </th>
                            ))}
                          </tr>
                        ))}
                    </thead>
                    <tbody className="text-white" {...getTableBodyProps()}>
                      {page.map((row) => {
                        prepareRow(row);
                        return (
                          <tr {...row.getRowProps()}>
                            <td className="text-center">{+row.id + 1}</td>
                            {row.cells.map((cell) => {
                              return (
                                <td
                                  className="text-center"
                                  {...cell.getCellProps()}
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
                </div>
                <div className="text-white flex justify-around p-5">
                  <button
                    onClick={() => previousPage()}
                    className="border-none px-3 py-1 rounded-md bg-slate-800"
                  >
                    Previous
                  </button>
                  <button
                    onClick={() => nextPage()}
                    className="border-none px-3 py-1 rounded-md bg-slate-800"
                  >
                    Next
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default AdminBooking;
