import React from "react";
import Tabel from "../../components/table/table"; // Import komponen tabel yang telah dibuat
import Layout from "../../components/layout";

function App() {
  const data = [
    {
      Foto: 1,
      Email: "dimas90@gmail.com",
      Nama: "John Doe",
      Telepon: "085343787908",
      TotalGram: 200,
      EXP: 1000,
      Level: "silver",
    },
    {
      Foto: 1,
      Email: "dimas90@gmail.com",
      Nama: "John Doe",
      Telepon: "085343787908",
      TotalGram: 200,
      EXP: 1000,
      Level: "silver",
    },
    {
      Foto: 1,
      Email: "dimas90@gmail.com",
      Nama: "John Doe",
      Telepon: "085343787908",
      TotalGram: 200,
      EXP: 1000,
      Level: "silver",
    },
    {
      Foto: 1,
      Email: "dimas90@gmail.com",
      Nama: "John Doe",
      Telepon: "085343787908",
      TotalGram: 200,
      EXP: 1000,
      Level: "silver",
    },
    {
      Foto: 1,
      Email: "dimas90@gmail.com",
      Nama: "John Doe",
      Telepon: "085343787908",
      TotalGram: 200,
      EXP: 1000,
      Level: "silver",
    },
  ];

  const columns = [
    "Foto",
    "Email",
    "Nama",
    "Telepon",
    "TotalGram",
    "EXP",
    "Level",
  ];

  return (
    <div className="flex">
      <Layout>
        <div className="mt-6 mb-6 mx-10 px-[15px] py-5 shadow-md bg-white rounded-[5px]">
          <Tabel data={data} columns={columns} />
        </div>
      </Layout>
    </div>
  );
}

export default App;
