import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Gamestone Docs",
  description:
    "Explore detailed guides, FAQs, and developer resources to unlock the full potential of Gamestone.",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Beranda", link: "/" },
      { text: "Gabung Mitra", link: "https://gamestone.id/kemitraan" },
      {
        text: "Daftar Harga Mitra",
        link: "https://gamestone.id/kemitraan/daftar-harga",
      },
    ],

    sidebar: [
      {
        text: "Merchant Dashboard",
        items: [
          { text: "Dashboard", link: "/merchant/dashboard" },
          {
            text: "Produk",
            items: [
              {
                text: "Game",
                link: "/merchant/product/game",
              },
              {
                text: "Kategori",
                link: "/merchant/product/category",
              },
              {
                text: "Varian",
                link: "/merchant/product/variant",
              },
            ],
          },
          {
            text: "Pesanan",
            link: "/merchant/order",
          },
          {
            text: "Tema",
            link: "/merchant/theme",
          },
          {
            text: "Saldo",
            link: "/merchant/balance",
          },
          {
            text: "Level",
            link: "/merchant/level",
          },
          {
            text: "Pengaturan",
            link: "/merchant/settings",
          },
          {
            text: "FAQ",
            link: "/merchant/faq",
          },
        ],
      },
      // {
      //   text: "User Guide",
      //   items: [
      //     {
      //       text: "Cara Membeli",
      //       link: "/user/how-to-buy",
      //     },
      //     {
      //       text: "FAQ",
      //       link: "/user/faq",
      //     },
      //   ],
      // },
    ],

    socialLinks: [
      {
        icon: "instagram",
        link: "https://instagram.com/gamestone.id",
      },
      { icon: "x", link: "https://x.com/gamestoneid" },
      { icon: "facebook", link: "https://facebook.com/gamestone.id" },
      {
        icon: "threads",
        link: "https://threads.net/@gamestone.id",
      },
      {
        icon: "linkedin",
        link: "https://www.linkedin.com/company/gamestone",
      },

      { icon: "github", link: "https://github.com/GamestoneID" },
    ],
  },
  srcDir: "src",
});
