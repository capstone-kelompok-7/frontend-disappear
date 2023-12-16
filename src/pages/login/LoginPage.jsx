import React, { useState, useEffect } from "react";

import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { IoEyeOffOutline, IoEyeOutline } from "react-icons/io5";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import Swal from "sweetalert2";

import { TokenProvider, useToken } from "@/utils/context/TokenContext";
import login from "@/utils/api/auth/login";
import { toast } from "@/components/ui/use-toast";
import { Input } from "@/components/ui/input";
import Button from "@/components/button";
import Label from "@/components/label";
import rectangle from "@/assets/Rectangle292.png";

const schema = z.object({
  email: z
    .string()
    .min(1, { message: "Email harus diisi" })
    .email({ message: "Isi dengan format email yang benar" }),
  password: z
    .string()
    .min(1, { message: "Kata sandi harus diisi" })
    .min(6, { message: "Kata sandi harus terdiri dari 6 karakter" }),
});

const LoginPageWrapper = () => {
  return (
    <TokenProvider>
      <LoginPage />
    </TokenProvider>
  );
};

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberChecked, setRememberChecked] = useState(false);
  const [showIcon, setShowIcon] = useState(false);
  const {
    saveTokenAndUser,
    saveTokenToSessionAndUser,
    tokenLocal,
    tokenSession,
  } = useToken();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });

  useEffect(() => {
    const rememberedCheckbox = localStorage.getItem("rememberedCheckbox");

    if (rememberedCheckbox === "checked") {
      setRememberChecked(true);
      const rememberedEmail = sessionStorage.getItem("rememberedEmail");
      const rememberedPassword = sessionStorage.getItem("rememberedPassword");

      setEmail(rememberedEmail);
      setPassword(rememberedPassword);
    }

    if (tokenLocal || tokenSession) {
      navigate("/dashboard");
    }
  }, [tokenLocal, tokenSession, navigate]);

  const handleRememberChange = () => {
    setRememberChecked(!rememberChecked);

    if (!rememberChecked) {
      sessionStorage.setItem("rememberedEmail", email);
      sessionStorage.setItem("rememberedPassword", password);
    } else {
      localStorage.setItem("rememberedCheckbox", "checked");
    }
  };

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
    setShowIcon(!showIcon);
  };

  const onSubmit = async (data) => {
    try {
      const result = await login(data.email, data.password);

      if (rememberChecked) {
        saveTokenAndUser(result.data.access_token);
        localStorage.setItem("rememberedCheckbox", "checked");
      } else {
        saveTokenToSessionAndUser(result.data.access_token);
        sessionStorage.setItem("accessToken", result.data.access_token);
      }

      navigate("/dashboard");
      toast({
        title: "Login Berhasil!",
        description: result.message,
        variant: "default",
      });
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Login Gagal!",
        text: error.message,
      });
    }
  };

  return (
    <div className="w-full h-full flex items-start bg-white">
      <div className="w-1/2 h-screen relative overflow-hidden">
        <img src={rectangle} className="w-full h-full object-cover" alt="" />
      </div>
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <div className="w-full">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="flex-grow-0 flex-shrink-0 text-[50px] font-bold text-center text-[#25745a]">
              Selamat Datang!
            </h1>
            <form
              className="space-y-4 md:space-y-6"
              onSubmit={handleSubmit(onSubmit)}
            >
              <div>
                <Label htmlFor="email">Email</Label>
                <Input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Masukkan email anda"
                  className={`bg-neutral-100 ${
                    errors.email ? "border-red-500" : ""
                  }`}
                  register={register}
                  error={errors.email?.message}
                />
              </div>
              <div style={{ position: "relative" }}>
                <Label htmlFor="password">Kata Sandi</Label>
                <Input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  id="password"
                  placeholder="Masukkan kata sandi anda"
                  className={`bg-neutral-100 ${
                    errors.password ? "border-red-500" : ""
                  }`}
                  register={register}
                  error={errors.password?.message}
                />
                {showIcon ? (
                  <IoEyeOutline
                    id="EyeIcon"
                    onClick={handleShowPassword}
                    className="w-5 h-5 absolute right-2 cursor-pointer"
                    style={{
                      position: "absolute",
                      top: "70%",
                      transform: "translateY(-50%)",
                      zIndex: 1,
                    }}
                  />
                ) : (
                  <IoEyeOffOutline
                    id="EyeOffIcon"
                    onClick={handleShowPassword}
                    className="w-5 h-5 absolute right-2 cursor-pointer"
                    style={{
                      position: "absolute",
                      top: "70%",
                      transform: "translateY(-50%)",
                      zIndex: 1,
                    }}
                  />
                )}
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <Input
                      id="remember"
                      type="checkbox"
                      className="w-4 h-4 border border-[#25745a] rounded"
                      onChange={handleRememberChange}
                    />
                  </div>
                  <div className="ml-3 text-sm">
                    <Label htmlFor="remember" style={{ color: "#808080" }}>
                      Ingat Saya
                    </Label>
                  </div>
                </div>
              </div>
              <Button
                id="masuk"
                type="submit"
                className="w-full text-dark bg-[#25745a] text-white focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center flex items-center justify-center"
                label="Masuk"
              ></Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
