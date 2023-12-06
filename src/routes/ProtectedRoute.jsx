import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useToken } from "@/utils/context/TokenContext";

const ProtectedRoute = () => {
  const { pathname } = useLocation();
  const { token, user } = useToken();

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

  const isAdmin = user?.role === "admin";

  if (!token) {
    return <Navigate to="/login" />;
  }

  const isProtectedPath = protectedByToken.includes(pathname);
  if (isProtectedPath && !isAdmin) {
    return <Navigate to="/" />;
  }

  return <Outlet />;
};

export default ProtectedRoute;
