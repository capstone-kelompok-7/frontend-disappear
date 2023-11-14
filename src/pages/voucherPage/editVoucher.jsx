import Breadcrumbs from "@/components/breadcrumbs";
import Button from "@/components/button";
import Layout from "@/components/layout";
import { Input } from "@/components/ui/input";


function EditVoucher() {
  return (
    <Layout>
      
        <Breadcrumbs pages="Edit Kupon" /> 
     

      <div className="my-5 py-5 px-11 rounded-md shadow-lg border-2 ">
        {/* baris 1 */}
        <div className="flex gap-28 pt-5">
          <div className="w-full">
            <label htmlFor="">Nama Kupon</label>
            <Input type="text" value="Nama Produk" />
          </div>
          <div className="w-full">
            <label htmlFor="">Mulai</label>
            <Input type="text" Value="10-10-2023" />
          </div>
        </div>
        {/* baris 2 */}
        <div className="flex gap-28 pt-5">
          <div className="w-full">
            <label htmlFor="">Kode Kupon</label>
            <Input type="text" value="Kode Kupon" />
          </div>
          <div className="w-full">
            <label htmlFor="">Berhenti</label>
            <Input type="text" value="15-10-2023" />
          </div>
        </div>
        {/* baris 3 */}
        <div className="flex gap-28 pt-5">
          <div className="w-full">
            <label htmlFor="">Kupon Untuk</label>
            <Input type="text" value="Kupon Untuk" />
          </div>
          <div className="w-full">
            <label htmlFor="">Total Yang Tersedia</label>
            <Input type="text" value="Total Yang Tersedia" />
          </div>
        </div>
        {/* baris 4 */}
        <div className="flex gap-28 py-5">
          <div className="w-full">
            <label htmlFor="">Diskon</label>
            <Input type="text" value="Diskon" />
          </div>
          <div className="w-full">
            <label htmlFor="">Minimal Pembelian</label>
            <Input type="text" value="Minimal Pembelian" />
          </div>
        </div>
        {/* baris 5 */}
        <label htmlFor="">Deskripsi Kupon</label>
        <Input type="text" placeholder="Deskripsi Kupon" className="h-36" />
        

        <div className="flex gap-2 justify-end py-5">
        <Button
            label="Simpan Perubahan"
            className="border-[#909090] text-[#909090] border-2 py-2 px-3 rounded-lg"
          />
          <Button
            label="Simpan Perubahan"
            className="bg-[#909090] text-white py-2 px-3 rounded-lg"
          />
        </div>
      </div>
    </Layout>
  );
}

export default EditVoucher;
