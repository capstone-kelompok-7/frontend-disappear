import { useState } from "react";
import Layout from "../components/layout";
import Button from "../components/button";
import { IoAddOutline } from "react-icons/io5";

function VoucherApp() {
  return (
    <Layout>
      <div className="flex justify-between items-center shadow-lg m-8 py-5 px-11 rounded-md">
        <div>
          <h1 className="font-bold text-3xl">Voucher</h1>
        </div>
        <div className="">
          <p className="text-sm font-medium text-[#797979]">
            Dashboard / Kupon
          </p>
        </div>
      </div>

      <div className="mx-8 my-5 py-5 px-11 rounded-md shadow-lg border-2">
        <div className="flex justify-between items-center">
          <div>
            <Button
              label="Tambahkan Kupon"
              icon={<IoAddOutline />}
              className="bg-[#909090] text-white py-3 px-5 rounded-lg"
            />
          </div>
          <div className="w-[168px]">
            <select className="select select-bordered w-full max-w-xs">
              <option disabled selected>
                Filter
              </option>
              <option>Han Solo</option>
              <option>Greedo</option>
            </select>
          </div>
        </div>

        <div className="pt-5 ">
          <table className="table table-zebra ">
            {/* head */}
            <thead>
              <tr>
                <th></th>
                <th>Name</th>
                <th>Job</th>
                <th>Favorite Color</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              <tr>
                <th>1</th>
                <td>Cy Ganderton</td>
                <td>Quality Control Specialist</td>
                <td>Blue</td>
              </tr>
              {/* row 2 */}
              <tr>
                <th>2</th>
                <td>Hart Hagerty</td>
                <td>Desktop Support Technician</td>
                <td>Purple</td>
              </tr>
              {/* row 3 */}
              <tr>
                <th>3</th>
                <td>Brice Swyre</td>
                <td>Tax Accountant</td>
                <td>Red</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </Layout>
  );
}

export default VoucherApp;
