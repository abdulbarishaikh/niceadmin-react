import { jsxs, jsx } from "react/jsx-runtime";
import { Head } from "@inertiajs/react";
const Login = () => {
  return /* @__PURE__ */ jsxs("div", { children: [
    /* @__PURE__ */ jsx(Head, { title: "Login" }),
    /* @__PURE__ */ jsx("main", { children: /* @__PURE__ */ jsx("div", { className: "container", children: /* @__PURE__ */ jsx("section", { className: "section register min-vh-100 d-flex flex-column align-items-center justify-content-center py-4", children: /* @__PURE__ */ jsx("div", { className: "container", children: /* @__PURE__ */ jsx("div", { className: "row justify-content-center", children: /* @__PURE__ */ jsxs("div", { className: "col-lg-4 col-md-6 d-flex flex-column align-items-center justify-content-center", children: [
      /* @__PURE__ */ jsx("div", { className: "d-flex justify-content-center py-4", children: /* @__PURE__ */ jsxs(
        "a",
        {
          href: "index.html",
          className: "logo d-flex align-items-center w-auto",
          children: [
            /* @__PURE__ */ jsx(
              "img",
              {
                src: "assets/img/logo.png",
                alt: ""
              }
            ),
            /* @__PURE__ */ jsx("span", { className: "d-none d-lg-block", children: "NiceAdmin" })
          ]
        }
      ) }),
      /* @__PURE__ */ jsx("div", { className: "card mb-3", children: /* @__PURE__ */ jsxs("div", { className: "card-body", children: [
        /* @__PURE__ */ jsxs("div", { className: "pt-4 pb-2", children: [
          /* @__PURE__ */ jsx("h5", { className: "card-title text-center pb-0 fs-4", children: "Login to Your Account" }),
          /* @__PURE__ */ jsx("p", { className: "text-center small", children: "Enter your username & password to login" })
        ] }),
        /* @__PURE__ */ jsxs("form", { className: "row g-3 needs-validation", children: [
          /* @__PURE__ */ jsxs("div", { className: "col-12", children: [
            /* @__PURE__ */ jsx(
              "label",
              {
                htmlFor: "yourUsername",
                className: "form-label",
                children: "Username"
              }
            ),
            /* @__PURE__ */ jsxs("div", { className: "input-group has-validation", children: [
              /* @__PURE__ */ jsx(
                "span",
                {
                  className: "input-group-text",
                  id: "inputGroupPrepend",
                  children: "@"
                }
              ),
              /* @__PURE__ */ jsx(
                "input",
                {
                  type: "text",
                  name: "username",
                  className: "form-control",
                  id: "yourUsername",
                  required: true
                }
              ),
              /* @__PURE__ */ jsx("div", { className: "invalid-feedback", children: "Please enter your username." })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "col-12", children: [
            /* @__PURE__ */ jsx(
              "label",
              {
                htmlFor: "yourPassword",
                className: "form-label",
                children: "Password"
              }
            ),
            /* @__PURE__ */ jsx(
              "input",
              {
                type: "password",
                name: "password",
                className: "form-control",
                id: "yourPassword",
                required: true
              }
            ),
            /* @__PURE__ */ jsx("div", { className: "invalid-feedback", children: "Please enter your password!" })
          ] }),
          /* @__PURE__ */ jsx("div", { className: "col-12", children: /* @__PURE__ */ jsxs("div", { className: "form-check", children: [
            /* @__PURE__ */ jsx(
              "input",
              {
                className: "form-check-input",
                type: "checkbox",
                name: "remember",
                value: "true",
                id: "rememberMe"
              }
            ),
            /* @__PURE__ */ jsx(
              "label",
              {
                className: "form-check-label",
                htmlFor: "rememberMe",
                children: "Remember me"
              }
            )
          ] }) }),
          /* @__PURE__ */ jsx("div", { className: "col-12", children: /* @__PURE__ */ jsx(
            "button",
            {
              className: "btn btn-primary w-100",
              type: "submit",
              children: "Login"
            }
          ) }),
          /* @__PURE__ */ jsx("div", { className: "col-12", children: /* @__PURE__ */ jsxs("p", { className: "small mb-0", children: [
            "Don't have account?",
            " ",
            /* @__PURE__ */ jsx("a", { href: "pages-register.html", children: "Create an account" })
          ] }) })
        ] })
      ] }) }),
      /* @__PURE__ */ jsxs("div", { className: "credits", children: [
        "Designed by",
        " ",
        /* @__PURE__ */ jsx("a", { href: "https://bootstrapmade.com/", children: "BootstrapMade" })
      ] })
    ] }) }) }) }) }) })
  ] });
};
export {
  Login as default
};
