import React from "react";

const LoginPage = () => {
  return (
    <div className="w-[1440px] h-[1024px] relative overflow-hidden bg-white">
      <div
        className="flex flex-col justify-start items-center absolute left-[370px] top-[182px] gap-20 p-[50px] rounded-[30px] bg-neutral-100"
        style={{ boxShadow: "0px 2px 4px 0 rgba(0,0,0,0.15)" }}
      >
        <p className="flex-grow-0 flex-shrink-0 text-[64px] font-bold text-left text-black">
          MASUK AKUN
        </p>
        <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 gap-[30px]">
          <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 relative gap-5">
            <p className="flex-grow-0 flex-shrink-0 text-2xl font-medium text-left text-black">
              Email
            </p>
            <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 w-[600px] h-[60px] relative gap-2.5 px-5 py-2.5 rounded-lg bg-white border border-black">
              <input
                className="flex-grow-0 flex-shrink-0 text-2xl font-medium text-left text-[#afafaf]"
                type="email"
                placeholder="Masukkan email anda"
              ></input>
            </div>
          </div>
          <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 relative gap-5">
            <p className="flex-grow-0 flex-shrink-0 text-2xl font-medium text-left text-black">
              Kata Sandi
            </p>
            <div className="flex justify-between items-center flex-grow-0 flex-shrink-0 w-[600px] h-[60px] relative px-5 py-2.5 rounded-lg bg-white border border-black">
              <input
                className="flex-grow-0 flex-shrink-0 text-2xl font-medium text-left text-[#afafaf]"
                type="password"
                placeholder="Masukkan kata sandi anda"
              ></input>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center flex-grow-0 flex-shrink-0 w-[600px] h-[65px] relative gap-2.5 p-2.5 rounded-lg bg-[#767676]">
          <button className="flex-grow-0 flex-shrink-0 text-[32px] font-medium text-left text-black">
            Masuk
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
