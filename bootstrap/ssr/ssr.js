import { jsx } from "react/jsx-runtime";
import { createRoot } from "react-dom/client";
import { createInertiaApp } from "@inertiajs/react";
import { InertiaProgress } from "@inertiajs/progress";
import "bootstrap";
createInertiaApp({
  resolve: async (name) => {
    const pages = /* @__PURE__ */ Object.assign({ "./Pages/Auth/Login.tsx": () => import("./assets/Login-m8mm3PSZ.js"), "./Pages/Home.tsx": () => import("./assets/Home-dFKJ6VIf.js") });
    const pagePath = `./Pages/${name}.tsx`;
    const page = await pages[pagePath]();
    return page.default;
  },
  setup({ el, App, props }) {
    createRoot(el).render(/* @__PURE__ */ jsx(App, { ...props }));
  }
});
InertiaProgress.init();
