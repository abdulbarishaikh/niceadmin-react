import React from "react";
import { createRoot } from "react-dom/client";
import { createInertiaApp } from "@inertiajs/react";
import { InertiaProgress } from "@inertiajs/progress";
import { InertiaPage } from "./types";
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import 'bootstrap';
import "bootstrap-icons/font/bootstrap-icons.css";
import '../css/app.css';

createInertiaApp({
    resolve: async (name) => {
        const pages = import.meta.glob("./Pages/**/*.tsx");
        const pagePath = `./Pages/${name}.tsx`;
        
        const page = (await pages[pagePath]()) as InertiaPage; // Type assertion
        return page.default;
    },
    setup({ el, App, props }) {
        createRoot(el).render(<App {...props} />);
    },
});

InertiaProgress.init();
