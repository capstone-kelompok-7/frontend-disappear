import React from "react";
import { useNavigate } from "react-router-dom";

import Layout from "@/components/layout";
import Breadcrumbs from "@/components/breadcrumbs";
import Button from "@/components/button";

export default function DetailProducts() {
  const navigate = useNavigate();

  function toRoute() {
    navigate("/edit-produk");
  }
  return (
    <>
      <Layout>
        <Breadcrumbs pages="Detail Produk" />
        <Button label="edit Produk" onClick={toRoute} />
      </Layout>
    </>
  );
}
