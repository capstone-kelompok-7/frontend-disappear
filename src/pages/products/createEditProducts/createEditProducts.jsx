import React, { useState } from "react";

import Breadcrumbs from "@/components/breadcrumbs";
import Layout from "@/components/layout";

export default function CreateEditProducts() {
  const [isEdit, setIsEdit] = useState(true);

  return (
    <>
      <Layout>
        <Breadcrumbs pages={!isEdit ? "Edit Produk" : "Buat Produk"} />
      </Layout>
    </>
  );
}
