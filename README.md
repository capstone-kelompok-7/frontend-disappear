![App Screenshot](/public/readme.png)

## 📖 About This Project

🌿 **Disappear: Green Environment**

Selamat datang di profil GitHub "Disappear" 🌎 Kami adalah kelompok dengan misi untuk mempromosikan dan melestarikan lingkungan hijau yang indah. Bersama-sama, kita dapat membuat perbedaan untuk masa depan yang lebih berkelanjutan. 🌿

**Disappear** bertujuan untuk membantu pengguna dalam mengadopsi gaya hidup ramah lingkungan. aplikasi ini menyediakan informasi tentang produk-produk yang memiliki dampak lingkungan yang lebih rendah, memberikan cara untuk mengukur jejak karbon atau dampak lingkungan pribadi, dan memfasilitasi pembelian produk ramah lingkungan yang lebih berkelanjutan.

**Front end** bertugas membuat halaman admin untuk pengelolaan data barang dan penjualan. Dengan fokus pada desain antarmuka, front end bertujuan meningkatkan efisiensi dalam pengelolaan data, memudahkan navigasi, dan memberikan pengalaman admin yang optimal dalam proses administratif terkait barang dan penjualan. Pada admin juga dapat membuat Tantangan untuk pelanggan agar membangun kesadaran terhadap lingkungan. Serta terdapat implementasi AI.

## 🚀 Deployment

- [**Vercel**](https://frontend-disappear.vercel.app)

## 🎨 Prototype:

- [**Figma**](https://www.figma.com/file/yES444NGZ9LtMaZpcdOsxy/DISAPPEAR?type=design&node-id=1%3A2&mode=design&t=CTmVtVVPq1Ec5T4S-1)

## 🪄 Collaboration:

- [Discord](https://discord.com/channels/@me)
- [GitHub](https://github.com/capstone-kelompok-7/frontend-disappear)
- [Trello](https://trello.com/b/dRSkBbBQ/frontend)

#### ⚙ Backend

- [Github Repository for the Backend team](https://github.com/capstone-kelompok-7/backend-disappear)
- [Postman Documentation](https://documenter.getpostman.com/view/29878742/2s9YXceQx7#e9932364-37fe-4aab-9267-71756a0a06ce)

#### 📱 Mobile

- [Github Repository for the Mobile team](https://github.com/capstone-kelompok-7/backend-disappear)
- [Mobile Apps](https://drive.google.com/drive/folders/1fWYNQOmbrZEiKyOAXqdoZSsT420uaAKx?hl=id)

#### 🔎 Quality Engineer

- [Github Repository for the QE team](https://github.com/capstone-kelompok-7/QuallityEngineer-Disappear)
- [Bug Report](https://docs.google.com/document/d/1qZGVU8PLsQ2G5fe5Rrya36n_u1TIIlBRoVML9dp2H-c/edit)

  ## 🌟 MVP Front-End

- Landing Page
- Dashboard
- Manage products
- Manage Users
- Manage information or challenge
- Get Personalized Content Recommendations [AI]
- View product measurements data
- View product transactions ( Nilai plus)

## 🔮 Features

- Login
- Logout
- View the main page
- View Dashboard Page
- Manage Carousel
- Manage Category
- Manage Product
- Manage Users
- Manage Order
- Manage Payment
- Manage Review
- Manage Voucher
- Manage Challenge
- Manage Article
- Generate Article with OpenAI

## 🛠️ Built With

- [ReactJS](https://react.dev/)
- [TailwindCSS](https://tailwindcss.com/)
- [ShadcnUI](https://ui.shadcn.com/)
- [RadixUI](https://www.radix-ui.com/)
- [FlowbiteUI](https://www.flowbite-react.com/)
- [Postman](https://www.postman.com/)
- [Axios](https://axios-http.com/)
- [Vite](https://vitejs.dev/)
- [Vercel](https://vercel.com/)
- [React Hook Form](https://react-hook-form.com/)
- [Zod](https://github.com/colinhacks/zod)
- [React Router Dom](https://reactrouter.com/)
- [React Context](https://react.dev/reference/react/useContext)
- [React Icons](https://react-icons.github.io/react-icons)
- [Sweetalert2](https://www.npmjs.com/package/sweetalert2)
- [FNS Date](https://www.npmjs.com/package/date-fns)
- [react toastify](https://www.npmjs.com/package/react-toastify)
- [Tiptap](https://tiptap.dev/)
- [ChartJs](https://www.chartjs.org/)
- [SwiperJs](https://swiperjs.com/react)
- [OpenAI](https://www.openai.com/)

## 📁 Folder Structure

```sh
Weedy
├─ public
├─ src
│  ├─ __tests__
│  │ ├─ components
│  │ └─ pages
│  ├─ assets
│  ├─ components
│  │ ├─ Button.jsx
│  │ ├─ Footer.jsx
│  │ ├─ Input.jsx
│  │ ├─ Navbar.jsx
│  │ ├─ NavbarInvitation.jsx
│  │ ├─ Sidebar.jsx
│  │ └─ Table.jsx
│  ├─ pages
│  │ ├─ auth
│  │ │ ├─ Login.jsx
│  │ │ └─ SignUp.jsx
│  │ ├─ createInvitation
│  │ ├─ dashboard
│  │ ├─ landingPage
│  │ ├─ notFound
│  │ ├─ openAI
│  │ └─ viewInvitation
│  │   ├─ FloralTheme.jsx
│  │   ├─ GreenTheme.jsx
│  │   └─ Index.jsx
│  ├─ routes
│  │  └─ Index.jsx
│  ├─ styles
│  │  └─ index.css
│  └─ utils
│    ├─ apis
│    │ ├─ auth
│    │ │ ├─ api.js
│    │ │ ├─ index.js
│    │ │ └─ types.js
│    │ ├─ rsvp
│    │ │ ├─ api.js
│    │ │ ├─ index.js
│    │ │ └─ types.js
│    │ ├─ weddings
│    │ │ └─ api.js
│    │ └─ axiosWithConfig.js
│    ├─ context
│    │ └─ token-context.jsx
│    ├─ firebase
│    │ └─ config.js
│    ├─ hooks
│    │ └─ customHooks.jsx
│    ├─ localStorageFunction.js
│    └─ swal.js
├─ .eslintrc.json
├─ .gitignore
├─ index.html
├─ package-lock.json
├─ package.json
├─ postcss.config.js
├─ tailwind.config.js
├─ vercel.json
├─ vite.config.js
└─ README.md

```

## 🧙🏻‍♂️ Led of React Team

- Nurhadi Ghifari Ramadhan ([Github](https://github.com/nurhadighi24))

## 🤖 Member

- Albar Fawwazi Ghaliba Elfauzan ([Github](https://github.com/albarelfauzan))
- Galih Purnomo ([Github](https://github.com/yustinusgalihp))
- Mochamad Irvan ([Github](https://github.com/mchmdirvan))
- Rafi Muhammad Fikri ([Github](https://github.com/Raptor-Rap))
- Ananda Dwi Rizkyta ([Github](https://github.com/anandadr5))
- Dian Oktavia Putri ([Github](https://github.com/dianoktaviaa))
- Faridhotul Nur Azizah ([Github](https://github.com/aizahfn))
