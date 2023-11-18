import Breadcrumbs from "@/components/breadcrumbs";
import Button from "@/components/button";
import Layout from "@/components/layout";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";


function EditVoucher() {
  return (
    <Layout>
      
        <Breadcrumbs pages="Edit Kupon" /> 
     

      <div className="my-5 py-5 px-11 rounded-md shadow-lg border-2 ">
        {/* baris 1 */}
        <div className="flex gap-28 pt-5">
          <div className="w-full">
            <label htmlFor="">Nama Kupon</label>
            <Input type="text"  />
          </div>
          <div className="w-full">
            <label htmlFor="">Mulai</label>
            <Input type="text"/>
          </div>
        </div>
        {/* baris 2 */}
        <div className="flex gap-28 pt-5">
          <div className="w-full">
            <label htmlFor="">Kode Kupon</label>
            <Input type="text"  />
          </div>
          <div className="w-full">
            <label htmlFor="">Berhenti</label>
            <Input type="text"  />
          </div>
        </div>
        {/* baris 3 */}
        <div className="flex gap-28 pt-5">
          <div className="w-full">
            <label htmlFor="">Kupon Untuk</label>
            <Input type="text"  />
          </div>
          <div className="w-full">
            <label htmlFor="">Total Yang Tersedia</label>
            <Input type="text"  />
          </div>
        </div>
        {/* baris 4 */}
        <div className="flex gap-28 py-5">
          <div className="w-full">
            <label htmlFor="">Diskon</label>
            <Input type="text"  />
          </div>
          <div className="w-full">
            <label htmlFor="">Minimal Pembelian</label>
            <Input type="text" />
          </div>
        </div>
        {/* baris 5 */}
        <label htmlFor="">Deskripsi Kupon</label>
        <Textarea classname="h-36" />
        

        <div className="flex gap-2 justify-end py-5">
        <Button
            label="Batal"
            className="border-[#25745A] text-[#25745A] border-2 py-2 px-3 rounded-lg"
          />
          <Button
            label="Simpan Perubahan"
            className="bg-[#25745A] text-white py-2 px-3 rounded-lg"
          />
        </div>
      </div>
    </Layout>
  );
}

export default EditVoucher;
