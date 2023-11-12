import Button from "@/components/button";
import Layout from "@/components/layout";
import { Input } from "@/components/ui/input";

function CreateVoucher() {
  return (
    <Layout>
      <div className="flex justify-between items-center shadow-lg m-8 py-5 px-11 rounded-md">
        <div>
          <h1 className="font-bold text-3xl">Buat Kupon</h1>
        </div>
        <div className="">
          <p className="text-sm font-medium text-[#797979]">
            Dashboard / Kupon
          </p>
        </div>
      </div>

      <div className="mx-8 my-5 py-5 px-11 rounded-md shadow-lg border-2 ">
        {/* baris 1 */}
        <div className="flex gap-28 pt-5">
          <div className="w-full">
            <label htmlFor="">Nama Kupon</label>
            <Input type="text" placeholder="Nama Produk" />
          </div>
          <div className="w-full">
            <label htmlFor="">Mulai</label>
            <Input type="text" placeholder="DD-MM-YYYY" />
          </div>
        </div>
        {/* baris 2 */}
        <div className="flex gap-28 pt-5">
          <div className="w-full">
            <label htmlFor="">Kode Kupon</label>
            <Input type="text" placeholder="Kode Kupon" />
          </div>
          <div className="w-full">
            <label htmlFor="">Berhenti</label>
            <Input type="text" placeholder="DD-MM-YYYY" />
          </div>
        </div>
        {/* baris 3 */}
        <div className="flex gap-28 pt-5">
          <div className="w-full">
            <label htmlFor="">Kupon Untuk</label>
            <Input type="text" placeholder="Kupon Untuk" />
          </div>
          <div className="w-full">
            <label htmlFor="">Total Yang Tersedia</label>
            <Input type="text" placeholder="Total Yang Tersedia" />
          </div>
        </div>
        {/* baris 4 */}
        <div className="flex gap-28 py-5">
          <div className="w-full">
            <label htmlFor="">Diskon</label>
            <Input type="text" placeholder="Diskon" />
          </div>
          <div className="w-full">
            <label htmlFor="">Minimal Pembelian</label>
            <Input type="text" placeholder="Minimal Pembelian" />
          </div>
        </div>
        {/* baris 5 */}
        <label htmlFor="">Deskripsi Kupon</label>
        <Input type="text" placeholder="Deskripsi Kupon" className="h-36" />

        <div className="grid justify-items-end py-5">
          <Button
            label="Buat Kupon"
            className="bg-[#909090] text-white py-2 px-3 rounded-lg"
          />
        </div>
      </div>
    </Layout>
  );
}

export default CreateVoucher;
