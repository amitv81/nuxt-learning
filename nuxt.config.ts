// https://nuxt.com/docs/api/configuration/nuxt-config

export default {
  app: {
    head: {
      meta: [
        // <meta name="viewport" content="width=device-width, initial-scale=1">
        { name: "viewport", content: "width=device-width, initial-scale=1" },
      ],
      script: [
        // <script src="https://myawesome-lib.js"></script>
        // { src: "https://awesome-lib.js" },
      ],
      // link: [
      //   // <link rel="stylesheet" href="https://myawesome-lib.css">
      //   { rel: "stylesheet", href: "/assets/css/bootstrap.min.css" },
      // ],
      css: [],
      // please note that this is an area that is likely to change
      // style: [
      //   // <style type="text/css">:root { color: red }</style>
      //   { children: ":root { color: red }", type: "text/css" },
      // ],
      noscript: [
        // <noscript>JavaScript is required</noscript>
        { children: "JavaScript is required" },
      ],
    },
  },
  // Other Nuxt.js configuration options
  css: ["/assets/css/bootstrap.min.css", "/assets/css/custom.css"],
  modules: [
    [
      "@nuxtjs/google-fonts",
      {
        families: {
          Roboto: true,
          Inter: [400, 700],
          "Josefin+Sans": true,
          Lato: [100, 300],
          Raleway: {
            wght: [100, 400],
            ital: [100],
          },
          Pacifico: true,
        },
      },
    ],
  ],
};

// export default defineNuxtConfig({

//   head: {
//     title: "My First Nuxt JS Project",
//     meta: [{ charset: "utf-8" }],

//     // link: [
//     //   {
//     //     rel: "stylesheet",
//     //     href: "https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css",
//     //   },
//     // ],
//   },
//   css: ["@/assets/bootstrap/mystyle.scss"],
// });
