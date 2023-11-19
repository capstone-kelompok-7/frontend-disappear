import React from "react";
import Layout from "../../components/layout";
import { IoArrowBack } from "react-icons/io5";
import { Link } from "react-router-dom";

function DetailNews() {
  return (
    <Layout>
      <div className="mx-[41px] mt-5 text-xl">
        <Link to="/artikel">
          <button className="flex items-center space-x-2">
            <IoArrowBack />
            <div className="font-bold">Artikel</div>
          </button>
        </Link>
      </div>
      <div className="mt-9 mx-[70px] border-t-2 border-l-2 p-4 flex">
        <div>
          <h1>apa</h1>
          <h1>apa</h1>
        </div>
      </div>
    </Layout>
  );
}

export default DetailNews;
