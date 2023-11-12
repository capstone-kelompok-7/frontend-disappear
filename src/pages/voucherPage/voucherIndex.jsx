import Layout from "@/components/layout";
import Button from "@/components/button";
import { Link } from "react-router-dom";
import { IoAddOutline } from "react-icons/io5";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

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
          <Link to="/buat-kupon">
            <Button
              label="Tambahkan Kupon"
              icon={<IoAddOutline />}
              className="bg-[#909090] text-white py-3 px-5 rounded-lg"
            />
          </Link>
          
          <DropdownMenu>
              <DropdownMenuTrigger className="flex justify-between items-center rounded-md bg-white py-3 px-3 border gap-20">
                <p>Filter</p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="10"
                  height="5"
                  viewBox="0 0 10 5"
                  fill="none"
                >
                  <path
                    d="M5 4.5L0.669872 0.75L9.33013 0.75L5 4.5Z"
                    fill="#373737"
                  />
                </svg>
              </DropdownMenuTrigger>

              <DropdownMenuContent>
                <DropdownMenuItem>Bronze</DropdownMenuItem>
                <DropdownMenuItem>Silver</DropdownMenuItem>
                <DropdownMenuItem>Gold</DropdownMenuItem>
                <DropdownMenuItem>Kadluwarsa</DropdownMenuItem>
                <DropdownMenuItem>Belum Kadaluwarsa</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
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
