import React from "react";

const LoginPage = () => {
  return (
    <div className="w-full h-full relative overflow-hidden bg-white">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <div className="w-full bg-gray-100 rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl text-center">
              MASUK AKUN
            </h1>
            <form className="space-y-4 md:space-y-6" action="#">
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="bg-white border border-black text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                  placeholder="Masukkan email anda"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Kata Sandi
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  className="bg-white border border-black text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                  placeholder="Masukkan kata sandi anda"
                  required
                />
                <svg
                  viewBox="0 0 30 30"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="flex-grow-0 flex-shrink-0 w-[20px] h-[20px] relative"
                  preserveAspectRatio="xMidYMid meet"
                >
                  <path
                    d="M28.9816 14.6203C28.9406 14.5277 27.948 12.3258 25.7414 10.1191C22.8012 7.17891 19.0875 5.625 15 5.625C10.9125 5.625 7.19883 7.17891 4.2586 10.1191C2.05196 12.3258 1.05469 14.5312 1.01836 14.6203C0.965059 14.7402 0.937515 14.87 0.937515 15.0012C0.937515 15.1324 0.965059 15.2621 1.01836 15.382C1.05938 15.4746 2.05196 17.6754 4.2586 19.882C7.19883 22.8211 10.9125 24.375 15 24.375C19.0875 24.375 22.8012 22.8211 25.7414 19.882C27.948 17.6754 28.9406 15.4746 28.9816 15.382C29.0349 15.2621 29.0625 15.1324 29.0625 15.0012C29.0625 14.87 29.0349 14.7402 28.9816 14.6203ZM15 22.5C11.393 22.5 8.2418 21.1887 5.63321 18.6035C4.56287 17.5391 3.65226 16.3253 2.92969 15C3.65206 13.6745 4.5627 12.4608 5.63321 11.3965C8.2418 8.81133 11.393 7.5 15 7.5C18.607 7.5 21.7582 8.81133 24.3668 11.3965C25.4392 12.4605 26.3518 13.6743 27.0762 15C26.2313 16.5773 22.5504 22.5 15 22.5ZM15 9.375C13.8875 9.375 12.7999 9.7049 11.8749 10.323C10.9499 10.9411 10.2289 11.8196 9.80318 12.8474C9.37744 13.8752 9.26604 15.0062 9.48309 16.0974C9.70013 17.1885 10.2359 18.1908 11.0225 18.9775C11.8092 19.7641 12.8115 20.2999 13.9026 20.5169C14.9938 20.734 16.1248 20.6226 17.1526 20.1968C18.1804 19.7711 19.0589 19.0501 19.677 18.1251C20.2951 17.2001 20.625 16.1125 20.625 15C20.6235 13.5086 20.0303 12.0788 18.9758 11.0242C17.9212 9.96968 16.4914 9.37655 15 9.375ZM15 18.75C14.2583 18.75 13.5333 18.5301 12.9166 18.118C12.2999 17.706 11.8193 17.1203 11.5355 16.4351C11.2516 15.7498 11.1774 14.9958 11.3221 14.2684C11.4668 13.541 11.8239 12.8728 12.3484 12.3483C12.8728 11.8239 13.541 11.4667 14.2684 11.3221C14.9958 11.1774 15.7498 11.2516 16.4351 11.5355C17.1203 11.8193 17.706 12.2999 18.118 12.9166C18.5301 13.5333 18.75 14.2583 18.75 15C18.75 15.9946 18.3549 16.9484 17.6517 17.6516C16.9484 18.3549 15.9946 18.75 15 18.75Z"
                    fill="black"
                  ></path>
                </svg>
              </div>
              <button
                type="submit"
                className="w-full text-dark bg-[#767676] focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
              >
                Masuk
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
