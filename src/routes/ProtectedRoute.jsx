import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useToken } from "@/utils/context/TokenContext";

const ProtectedRoute = () => {
  const { pathname } = useLocation();
  const { token, user } = useToken();

  const authProtected = ["/login"];
  const protectedByToken = [
    "/category",
    "/dashboard",
    "/pelanggan",
    "/tantangan",
    "/pelanggan/pelanggandetail",
    "/tantangan",
    "/tantangan/buat-tantangan",
    "/tantangan/edit-tantangan",
    "/tantangan/detail-tantangan",
    "/peserta-tantangan",
    "/peserta-tantangan/edit-peserta-tantangan",
    "/produk",
    "/produk/buat-Produk",
    "/produk/edit-produk",
    "/produk/:id",
    "/kupon",
    "/kupon/buat-kupon",
    "/kupon/edit-kupon",
    "/create-news",
    "/edit-news",
    "/detail-news",
    "/artikel",
    "/pesanan",
    "/pesanan/detail-pesanan",
    "/pembayaran",
    "/pembayaran/:id",
    "/ulasan",
    "/ulasan/:id",
    "/carousel",
  ];

  const adminProtected = ["/dashboard"];
  const userProtected = ["/", "/login"];

  // Jika pengguna belum login dan mencoba mengakses rute yang dilindungi oleh token, arahkan ke halaman login
  if (!token && protectedByToken.includes(pathname)) {
    return <Navigate to="/login" />;
  }

  // Jika pengguna adalah admin, berikan akses ke semua rute termasuk yang dilindungi oleh token
  if (user?.role === "admin") {
    return <Outlet />;
  }

  // Jika pengguna adalah customer dan mencoba mengakses rute yang hanya diperbolehkan untuk admin, arahkan ke halaman landing page
  if (user?.role === "customer" && adminProtected.includes(pathname)) {
    return <Navigate to="/" />;
  }

  // Jika pengguna belum login dan mencoba mengakses rute yang memerlukan autentikasi, arahkan ke halaman login
  if (authProtected.includes(pathname) && !token) {
    return <Navigate to="/login" />;
  }

  // Jika pengguna adalah customer dan mencoba mengakses rute yang dilindungi untuk user, arahkan ke halaman landing page
  if (user?.role === "customer" && userProtected.includes(pathname)) {
    return <Navigate to="/" />;
  }

  // Jika tidak ada kondisi yang memerlukan redireksi, tampilkan Outlet
  return <Outlet />;
};

export default ProtectedRoute;
