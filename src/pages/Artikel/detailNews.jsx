import React from "react";
import Layout from "../../components/layout";
import { IoArrowBack } from "react-icons/io5";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

function DetailNews({ title, content, photo }) {
  const { id } = useParams();
  return (
    <Layout>
      <div className="mt-5 text-xl">
        <Link to="/artikel">
          <button className="flex items-center space-x-2">
            <IoArrowBack />
            <div className="font-bold">Artikel</div>
          </button>
        </Link>
      </div>
      <div className="mt-5 mx-8 border-t-2 border-l-2 p-4 flex">
        <div>
          <h2>{title}</h2>
          <img src={photo} alt={title} />
          <p>{content}</p>
        </div>
      </div>
    </Layout>
  );
}

export default DetailNews;
