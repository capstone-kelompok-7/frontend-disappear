import React, { useCallback, useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

import Breadcrumbs from "@/components/breadcrumbs";
import Layout from "@/components/layout";
import { Input } from "@/components/ui/input";
import { Link, useNavigate } from "react-router-dom";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Tabel from "@/components/table/table";
import { BiDotsVerticalRounded, BiEdit, BiTrash } from "react-icons/bi";
import Delete from "@/components/delete/delete";
import { IoEye } from "react-icons/io5";
import { deleteProducts, getAllProducts } from "@/utils/api/products/api";
import formatCurrency from "@/utils/formatter/currencyIdr";
import Pagination from "@/components/pagenation";
import { useToast } from "@/components/ui/use-toast";
import { FaRegCheckCircle } from "react-icons/fa";
import { CrossCircledIcon } from "@radix-ui/react-icons";
import { Loading } from "@/components/loading";
import { debounce } from "lodash";

export default function IndexProducts() {
  const [products, setProducts] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const [meta, setMeta] = useState();
  const [selectedCategory, setSelectedCategory] = useState(null);
  const { toast } = useToast();

  const navigate = useNavigate();

  const toDetailProduct = (productId) => {
    navigate(`/produk/${productId}`);
  };

  const toEditProduct = (id) => {
    navigate(`/produk/${id}/edit-produk`);
  };

  useEffect(() => {
    const delayedFetchData = debounce(fetchData, 1000);
    delayedFetchData();

    return () => delayedFetchData.cancel();
  }, [searchValue, searchParams]);

  const getSuggestions = useCallback(
    async function (query) {
      const newSearchParams = new URLSearchParams(searchParams.toString());

      if (!query) {
        newSearchParams.delete("search");
      } else {
        newSearchParams.set("search", query);
        newSearchParams.delete("page");
      }

      setSearchParams(newSearchParams);
    },
    [searchParams, setSearchParams]
  );

  async function fetchData() {
    let query = {};
    for (const entry of searchParams.entries()) {
      query[entry[0]] = entry[1];
    }

    try {
      setIsLoading(true);
      const result = await getAllProducts({ ...query });
      const searchData = result.data
        ? result.data.filter((item) =>
            item.name.toLowerCase().includes(searchValue.toLowerCase())
          )
        : [];
      const { ...rest } = result.meta;
      setProducts(searchData);
      setMeta(rest);
    } catch (error) {
      toast({
        variant: "destructive",
        title: (
          <div className="flex items-center">
            <CrossCircledIcon />
            <span className="ml-2">Gagal Memuat Produk!</span>
          </div>
        ),
        description:
          "Terjadi kesalahan saat memuat produk, silahkan cek internet terlebih dahulu atau reload halaman",
      });
    } finally {
      setIsLoading(false);
    }
  }

  function handlePrevNextPage(page) {
    searchParams.set("page", String(page));
    setSearchParams(searchParams);
  }

  function handleSearchInputParams(search) {
    setSearchValue(search);
    getSuggestions(search);
  }

  async function handleDeleteClick(id) {
    try {
      const result = await Delete({
        title: "Yakin mau hapus data?",
        text: "Data yang sudah dihapus tidak dapat dipulihkan, lho. Coba dipikirkan dulu, yuk!",
      });

      if (result.isConfirmed) {
        setIsLoading(true);
        await deleteProducts(id);
        toast({
          title: (
            <div className="flex items-center">
              <FaRegCheckCircle />
              <span className="ml-2">Produk berhasil dihapus!</span>
            </div>
          ),
          description:
            "Data produk telah berhasil dihapus, nih. Silahkan nikmati fitur lainnya!",
        });
        fetchData();
      }
    } catch (error) {
      toast({
        variant: "destructive",
        title: (
          <div className="flex items-center">
            <CrossCircledIcon />
            <span className="ml-2">Gagal Menghapus Produk!</span>
          </div>
        ),
        description: "Terjadi kesalahan saat menghapus produk.",
      });
    } finally {
      setIsLoading(false);
    }
  }

  const allCategories = products
    ? products.flatMap((product) => product.categories)
    : [];

  const uniqueCategories = allCategories.filter(
    (category, index, self) =>
      index === self.findIndex((c) => c.id === category.id)
  );

  const filteredProducts = selectedCategory
    ? products.filter((product) =>
        product.categories.some(
          (category) => category.id === selectedCategory.id
        )
      )
    : products;

  const handleCategoryClick = (category) => {
    const newSearchParams = new URLSearchParams(searchParams.toString());
    newSearchParams.set("category", category.name);
    setSearchParams(newSearchParams);

    fetchData({ category: category.name });
    setSelectedCategory(category);
  };

  function handleShowAllData() {
    const newSearchParams = new URLSearchParams(searchParams.toString());
    newSearchParams.delete("category");
    setSearchParams(newSearchParams);

    setSelectedCategory(null);
    fetchData();
  }

  const columns = [
    {
      Header: "Foto",
      accessor: "image_url",
      Cell: ({ row }) => {
        if (row.original) {
          const firstPhotoUrl = row.original.image_url?.[0]?.image_url;
          return (
            <img
              src={firstPhotoUrl}
              alt="Product"
              className=" w-32 h-28 rounded block m-auto object-cover"
            />
          );
        }
        return null;
      },
    },
    { Header: "Nama Produk", accessor: "name" },
    {
      Header: "Kategori",
      accessor: "categories",
      Cell: ({ row }) => {
        const categories = row.original.categories.map(
          (category) => category.name
        );
        return <p>{categories.join(", ")}</p>;
      },
    },
    { Header: "Gram", accessor: "gram_plastic" },
    { Header: "Stok", accessor: "stock" },
    {
      Header: "Diskon",
      accessor: "discount",
      Cell: ({ row }) => <p>{formatCurrency(row.original.discount)}</p>,
    },
    { Header: "EXP", accessor: "product_exp" },
    {
      Header: "Harga",
      accessor: "price",
      Cell: ({ row }) => (
        <div className="flex justify-between items-center">
          <p>{formatCurrency(row.original.price)}</p>
          <DropdownMenu>
            <DropdownMenuTrigger>
              <BiDotsVerticalRounded />
            </DropdownMenuTrigger>

            <DropdownMenuContent>
              <Link
                onClick={() => toDetailProduct(row.original.id)}
                id="toDetailProduct"
              >
                <DropdownMenuItem className=" hover:bg-secondary-green cursor-pointer gap-3 items-center text-black hover:text-white">
                  <IoEye />
                  <p>Detail Produk</p>
                </DropdownMenuItem>
              </Link>

              <DropdownMenuItem
                className=" hover:bg-secondary-green cursor-pointer gap-3 items-center text-black hover:text-white"
                onClick={() => toEditProduct(row.original.id)}
                id="toEditProduct"
              >
                <BiEdit />
                <p>Edit Produk</p>
              </DropdownMenuItem>

              <DropdownMenuItem
                className=" hover:bg-secondary-green cursor-pointer gap-3 items-center text-black hover:text-white"
                onClick={() => handleDeleteClick(row.original.id)}
                id="deleteProduct"
              >
                <BiTrash />
                <p>Hapus Produk</p>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      ),
    },
  ];

  return (
    <>
      <Layout>
        <Breadcrumbs pages="Produk" />
        <div className=" flex justify-between items-center mt-10">
          <Link
            id="toCreateProducts"
            to="/produk/buat-produk"
            className=" font-medium text-sm rounded-md text-white bg-secondary-green px-3 py-3 flex items-center justify-between gap-3"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M18 12.75H6C5.59 12.75 5.25 12.41 5.25 12C5.25 11.59 5.59 11.25 6 11.25H18C18.41 11.25 18.75 11.59 18.75 12C18.75 12.41 18.41 12.75 18 12.75Z"
                fill="white"
              />
              <path
                d="M12 18.75C11.59 18.75 11.25 18.41 11.25 18V6C11.25 5.59 11.59 5.25 12 5.25C12.41 5.25 12.75 5.59 12.75 6V18C12.75 18.41 12.41 18.75 12 18.75Z"
                fill="white"
              />
            </svg>
            Tambah Produk
          </Link>
          <div className=" flex gap-5 items-center justify-end w-1/2">
            <div className=" relative w-3/6">
              <Input
                id="searchProducts"
                type="text"
                placeholder="Cari Produk"
                className=" border-primary-green py-6"
                onChange={(e) => handleSearchInputParams(e.target.value)}
                value={searchValue}
              />
              <svg
                className="absolute right-3 top-4 text-primary-green"
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M11.2892 8.97102C11.7427 8.12671 12 7.16127 12 6.13574C12 2.82203 9.31371 0.135742 6 0.135742C2.68629 0.135742 0 2.82203 0 6.13574C0 9.44945 2.68629 12.1357 6 12.1357C7.56425 12.1357 8.98868 11.5371 10.0567 10.5565L12.2421 12.596C12.6458 12.9728 13.2786 12.9509 13.6554 12.5472C14.0322 12.1434 14.0104 11.5106 13.6066 11.1338L11.2892 8.97102ZM6 10.0357C3.84609 10.0357 2.1 8.28965 2.1 6.13574C2.1 3.98183 3.84609 2.23574 6 2.23574C8.15391 2.23574 9.9 3.98183 9.9 6.13574C9.9 8.28965 8.15391 10.0357 6 10.0357Z"
                  fill="#25745A"
                />
              </svg>
            </div>

            <DropdownMenu>
              <DropdownMenuTrigger
                className="flex justify-between items-center rounded-md bg-white py-3 px-3 border border-primary-green gap-20"
                id="dropdownFilter"
              >
                <p className=" text-primary-green">
                  {selectedCategory ? selectedCategory.name : "filter"}
                </p>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="10"
                  height="5"
                  viewBox="0 0 10 5"
                  fill="none"
                >
                  <path
                    d="M5 4L0.669872 0.25L9.33013 0.25L5 4Z"
                    fill="#257157"
                  />
                </svg>
              </DropdownMenuTrigger>

              <DropdownMenuContent>
                <DropdownMenuItem
                  className="cursor-pointer bg-black text-white hover:bg-secondary-green hover:text-white"
                  onClick={() => handleShowAllData()}
                >
                  Tampilkan Semua Produk
                </DropdownMenuItem>
                {uniqueCategories.map((category) => (
                  <DropdownMenuItem
                    key={category.id}
                    className="cursor-pointer hover:bg-secondary-green hover:text-white"
                    onClick={() => handleCategoryClick(category)}
                  >
                    {category.name}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
        {isLoading ? (
          <Loading />
        ) : (
          <div className="mt-5">
            {products && products.length > 0 ? (
              <>
                <Tabel columns={columns} data={filteredProducts} />
                <Pagination
                  meta={meta}
                  onClickPrevious={() =>
                    handlePrevNextPage(meta?.current_page - 1)
                  }
                  onClickNext={() => handlePrevNextPage(meta?.current_page + 1)}
                  onClickPage={(page) => handlePrevNextPage(page)}
                />
              </>
            ) : (
              <div className="text-center">
                <p>Data tidak ditemukan</p>
              </div>
            )}
          </div>
        )}
      </Layout>
    </>
  );
}
