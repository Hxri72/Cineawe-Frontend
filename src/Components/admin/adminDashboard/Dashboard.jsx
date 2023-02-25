import React, { Fragment } from "react";

function Maindiv() {
  return (
    <Fragment>
      <div className="mainDiv">
        <div className="maindivInside">
          <div className="maincharts flex">
            <div className="chart1 ">
              <h1 className="text-white p-7 text-start py-5 font-normal text-2xl">
                Bookings
              </h1>
              <div className="flex justify-start text-slate-500 text-sm col-span-3">
                <div className="col-span-1 w-1/2">
                  <h1 className="text-center">Income</h1>
                </div>

                <div className="text-center col-span-2 w-1/2">
                  <h1>Profit</h1>
                </div>
              </div>
            </div>

            <div className="chart2 ">
              <img
                className="w-full h-full rounded-3xl"
                alt="graph "
                src="https://www.tableau.com/sites/default/files/2021-09/Line%20Chart%201%20-%20Good%20-%20900x650.png"
              />
            </div>
          </div>

          <div className="chart3"></div>
        </div>
      </div>
    </Fragment>
  );
}

export default Maindiv;
