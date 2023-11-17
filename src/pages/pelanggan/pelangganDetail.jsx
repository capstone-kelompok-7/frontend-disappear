import Layout from "../../components/layout";
import Breadcrumbs from "@/components/breadcrumbs";
import "../../styles/pelanggan/pelangganDetail.css";
import { FaUserCircle } from "react-icons/fa";
import { Progress } from "flowbite-react";
import Button from "@/components/button";
function PelangganDetail() {
  const exp = 950;
  const maxExp = 1001;
  const progressPercentage = (exp / maxExp) * 100;
  return (
    <Layout>
      <div className="">
        <Breadcrumbs pages="Detail Pelanggan" />
        <div className="head-pelanggan px-5 py-5 shadow-md bg-white">
          <h1>Pelanggan</h1>
        </div>
        {/* kotak profile pict */}
        <div className="profile-sect border bg-white ">
          <div className="profile-pict">
            <FaUserCircle />
          </div>
          <div className="profile-info">
            <p className="profile-name">Dimas Banyuwangis</p>
            <p className="profile-email">dimasbayuwangis05@gmail.com</p>
            <p className="last-login">Login terakhir 15 Agus 23, 10.35 AM</p>
          </div>
        </div>
        {/* kotak exp bar */}
        <div className="exp-bar border bg-white">
          <div className="progress-bar">
            <Progress progress={progressPercentage} size="md" color="dark" />
            <div
              className="exp-notation"
              style={{
                left: `calc(${Math.min(progressPercentage, 100)}% - 20px)`,
              }}
            >
              {exp} EXP
            </div>
            <span
              className={`progress-dot ${
                progressPercentage > 0 ? "dot-active" : ""
              }`}
              style={{ left: "0%" }}
            ></span>
            <span
              className={`progress-dot ${
                progressPercentage > 50 ? "dot-active" : ""
              }`}
              style={{ left: "49%" }}
            ></span>
            <span
              className={`progress-dot ${
                progressPercentage >= 100 ? "dot-active" : ""
              }`}
              style={{ left: "99%" }}
            ></span>
            <div className="exp-level">
              <div className="level-status">
                <p className="bronze-exp">Bronze</p>
                <p className="silver-exp">Silver</p>
                <p className="gold-exp">Gold</p>
              </div>
              <div className="exp-minimum">
                <p className="bronze-minimum">0-500</p>
                <p className="silver-minimum">501-1000</p>
                <p className="gold-minimum">1001 ++</p>
              </div>
            </div>
          </div>
        </div>
        {/* kotak informasi pelanggan */}
        <div className="user-info border bg-white">
          <h1 className="head-user">Informasi Pelanggan</h1>
          <div className="columns-user">
            <p className="column-name">Nama</p>
            <p className="column-email">Email</p>
            <p className="column-phone">Telepon</p>
            <p className="column-address">Alamat</p>
          </div>
          <div className="data-user">
            <p className="data-name">Dimas Bayuwangis</p>
            <p className="data-email">dimasbayuwangis05@gmail.com</p>
            <p className="data-phone">0848-7965-7909</p>
            <p className="data-address">Bandung</p>
          </div>
        </div>
        <div className="user-activity bg-white">
          <h1 className="head-activity">Aktivitas Pelanggan</h1>
          <div className="pesanan-activity border bg-white">
            <p className="total-pesanan">145</p>
            <p className="pesanan-text">Pesanan</p>
            <p className="pesanan-sukses">13 pesanan sukses</p>
            <p className="pesanan-gagal">5 pesanan gagal</p>
          </div>
          <div className="tantangan-activity border bg-white">
            <p className="total-tantangan">125</p>
            <p className="tantangan-text">Tantangan</p>
            <p className="tantangan-sukses">4 tantangan sukses</p>
            <p className="tantangan-gagal">1 tantangan gagal</p>
          </div>
        </div>
        <Button
          label="Hapus Pelanggan"
          className="button-hapus rounded-md bg-black py-3 px-3"
        />
      </div>
    </Layout>
  );
}

export default PelangganDetail;
