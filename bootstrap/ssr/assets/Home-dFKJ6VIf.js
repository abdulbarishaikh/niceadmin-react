import { jsx, Fragment, jsxs } from "react/jsx-runtime";
import { Head } from "@inertiajs/react";
const Header = () => {
  return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsxs(
    "header",
    {
      id: "header",
      className: "header fixed-top d-flex align-items-center",
      children: [
        /* @__PURE__ */ jsxs("div", { className: "d-flex align-items-center justify-content-between", children: [
          /* @__PURE__ */ jsxs(
            "a",
            {
              href: "index.html",
              className: "logo d-flex align-items-center",
              children: [
                /* @__PURE__ */ jsx("img", { src: "assets/img/logo.png", alt: "" }),
                /* @__PURE__ */ jsx("span", { className: "d-none d-lg-block", children: "NiceAdmin" })
              ]
            }
          ),
          /* @__PURE__ */ jsx("i", { className: "bi bi-list toggle-sidebar-btn" })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "search-bar", children: /* @__PURE__ */ jsxs(
          "form",
          {
            className: "search-form d-flex align-items-center",
            method: "POST",
            action: "#",
            children: [
              /* @__PURE__ */ jsx(
                "input",
                {
                  type: "text",
                  name: "query",
                  placeholder: "Search",
                  title: "Enter search keyword"
                }
              ),
              /* @__PURE__ */ jsx("button", { type: "submit", title: "Search", children: /* @__PURE__ */ jsx("i", { className: "bi bi-search" }) })
            ]
          }
        ) }),
        /* @__PURE__ */ jsx("nav", { className: "header-nav ms-auto", children: /* @__PURE__ */ jsxs("ul", { className: "d-flex align-items-center", children: [
          /* @__PURE__ */ jsx("li", { className: "nav-item d-block d-lg-none", children: /* @__PURE__ */ jsx(
            "a",
            {
              className: "nav-link nav-icon search-bar-toggle ",
              href: "#",
              children: /* @__PURE__ */ jsx("i", { className: "bi bi-search" })
            }
          ) }),
          /* @__PURE__ */ jsxs("li", { className: "nav-item dropdown", children: [
            /* @__PURE__ */ jsxs(
              "a",
              {
                className: "nav-link nav-icon",
                href: "#",
                "data-bs-toggle": "dropdown",
                children: [
                  /* @__PURE__ */ jsx("i", { className: "bi bi-bell" }),
                  /* @__PURE__ */ jsx("span", { className: "badge bg-primary badge-number", children: "4" })
                ]
              }
            ),
            /* @__PURE__ */ jsxs("ul", { className: "dropdown-menu dropdown-menu-end dropdown-menu-arrow notifications", children: [
              /* @__PURE__ */ jsxs("li", { className: "dropdown-header", children: [
                "You have 4 new notifications",
                /* @__PURE__ */ jsx("a", { href: "#", children: /* @__PURE__ */ jsx("span", { className: "badge rounded-pill bg-primary p-2 ms-2", children: "View all" }) })
              ] }),
              /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("hr", { className: "dropdown-divider" }) }),
              /* @__PURE__ */ jsxs("li", { className: "notification-item", children: [
                /* @__PURE__ */ jsx("i", { className: "bi bi-exclamation-circle text-warning" }),
                /* @__PURE__ */ jsxs("div", { children: [
                  /* @__PURE__ */ jsx("h4", { children: "Lorem Ipsum" }),
                  /* @__PURE__ */ jsx("p", { children: "Quae dolorem earum veritatis oditseno" }),
                  /* @__PURE__ */ jsx("p", { children: "30 min. ago" })
                ] })
              ] }),
              /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("hr", { className: "dropdown-divider" }) }),
              /* @__PURE__ */ jsxs("li", { className: "notification-item", children: [
                /* @__PURE__ */ jsx("i", { className: "bi bi-x-circle text-danger" }),
                /* @__PURE__ */ jsxs("div", { children: [
                  /* @__PURE__ */ jsx("h4", { children: "Atque rerum nesciunt" }),
                  /* @__PURE__ */ jsx("p", { children: "Quae dolorem earum veritatis oditseno" }),
                  /* @__PURE__ */ jsx("p", { children: "1 hr. ago" })
                ] })
              ] }),
              /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("hr", { className: "dropdown-divider" }) }),
              /* @__PURE__ */ jsxs("li", { className: "notification-item", children: [
                /* @__PURE__ */ jsx("i", { className: "bi bi-check-circle text-success" }),
                /* @__PURE__ */ jsxs("div", { children: [
                  /* @__PURE__ */ jsx("h4", { children: "Sit rerum fuga" }),
                  /* @__PURE__ */ jsx("p", { children: "Quae dolorem earum veritatis oditseno" }),
                  /* @__PURE__ */ jsx("p", { children: "2 hrs. ago" })
                ] })
              ] }),
              /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("hr", { className: "dropdown-divider" }) }),
              /* @__PURE__ */ jsxs("li", { className: "notification-item", children: [
                /* @__PURE__ */ jsx("i", { className: "bi bi-info-circle text-primary" }),
                /* @__PURE__ */ jsxs("div", { children: [
                  /* @__PURE__ */ jsx("h4", { children: "Dicta reprehenderit" }),
                  /* @__PURE__ */ jsx("p", { children: "Quae dolorem earum veritatis oditseno" }),
                  /* @__PURE__ */ jsx("p", { children: "4 hrs. ago" })
                ] })
              ] }),
              /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("hr", { className: "dropdown-divider" }) }),
              /* @__PURE__ */ jsx("li", { className: "dropdown-footer", children: /* @__PURE__ */ jsx("a", { href: "#", children: "Show all notifications" }) })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("li", { className: "nav-item dropdown", children: [
            /* @__PURE__ */ jsxs(
              "a",
              {
                className: "nav-link nav-icon",
                href: "#",
                "data-bs-toggle": "dropdown",
                children: [
                  /* @__PURE__ */ jsx("i", { className: "bi bi-chat-left-text" }),
                  /* @__PURE__ */ jsx("span", { className: "badge bg-success badge-number", children: "3" })
                ]
              }
            ),
            /* @__PURE__ */ jsxs("ul", { className: "dropdown-menu dropdown-menu-end dropdown-menu-arrow messages", children: [
              /* @__PURE__ */ jsxs("li", { className: "dropdown-header", children: [
                "You have 3 new messages",
                /* @__PURE__ */ jsx("a", { href: "#", children: /* @__PURE__ */ jsx("span", { className: "badge rounded-pill bg-primary p-2 ms-2", children: "View all" }) })
              ] }),
              /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("hr", { className: "dropdown-divider" }) }),
              /* @__PURE__ */ jsx("li", { className: "message-item", children: /* @__PURE__ */ jsxs("a", { href: "#", children: [
                /* @__PURE__ */ jsx(
                  "img",
                  {
                    src: "assets/img/messages-1.jpg",
                    alt: "",
                    className: "rounded-circle"
                  }
                ),
                /* @__PURE__ */ jsxs("div", { children: [
                  /* @__PURE__ */ jsx("h4", { children: "Maria Hudson" }),
                  /* @__PURE__ */ jsx("p", { children: "Velit asperiores et ducimus soluta repudiandae labore officia est ut..." }),
                  /* @__PURE__ */ jsx("p", { children: "4 hrs. ago" })
                ] })
              ] }) }),
              /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("hr", { className: "dropdown-divider" }) }),
              /* @__PURE__ */ jsx("li", { className: "message-item", children: /* @__PURE__ */ jsxs("a", { href: "#", children: [
                /* @__PURE__ */ jsx(
                  "img",
                  {
                    src: "assets/img/messages-2.jpg",
                    alt: "",
                    className: "rounded-circle"
                  }
                ),
                /* @__PURE__ */ jsxs("div", { children: [
                  /* @__PURE__ */ jsx("h4", { children: "Anna Nelson" }),
                  /* @__PURE__ */ jsx("p", { children: "Velit asperiores et ducimus soluta repudiandae labore officia est ut..." }),
                  /* @__PURE__ */ jsx("p", { children: "6 hrs. ago" })
                ] })
              ] }) }),
              /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("hr", { className: "dropdown-divider" }) }),
              /* @__PURE__ */ jsx("li", { className: "message-item", children: /* @__PURE__ */ jsxs("a", { href: "#", children: [
                /* @__PURE__ */ jsx(
                  "img",
                  {
                    src: "assets/img/messages-3.jpg",
                    alt: "",
                    className: "rounded-circle"
                  }
                ),
                /* @__PURE__ */ jsxs("div", { children: [
                  /* @__PURE__ */ jsx("h4", { children: "David Muldon" }),
                  /* @__PURE__ */ jsx("p", { children: "Velit asperiores et ducimus soluta repudiandae labore officia est ut..." }),
                  /* @__PURE__ */ jsx("p", { children: "8 hrs. ago" })
                ] })
              ] }) }),
              /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("hr", { className: "dropdown-divider" }) }),
              /* @__PURE__ */ jsx("li", { className: "dropdown-footer", children: /* @__PURE__ */ jsx("a", { href: "#", children: "Show all messages" }) })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("li", { className: "nav-item dropdown pe-3", children: [
            /* @__PURE__ */ jsxs(
              "a",
              {
                className: "nav-link nav-profile d-flex align-items-center pe-0",
                href: "#",
                "data-bs-toggle": "dropdown",
                children: [
                  /* @__PURE__ */ jsx(
                    "img",
                    {
                      src: "assets/img/profile-img.jpg",
                      alt: "Profile",
                      className: "rounded-circle"
                    }
                  ),
                  /* @__PURE__ */ jsx("span", { className: "d-none d-md-block dropdown-toggle ps-2", children: "K. Anderson" })
                ]
              }
            ),
            /* @__PURE__ */ jsxs("ul", { className: "dropdown-menu dropdown-menu-end dropdown-menu-arrow profile", children: [
              /* @__PURE__ */ jsxs("li", { className: "dropdown-header", children: [
                /* @__PURE__ */ jsx("h6", { children: "Kevin Anderson" }),
                /* @__PURE__ */ jsx("span", { children: "Web Designer" })
              ] }),
              /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("hr", { className: "dropdown-divider" }) }),
              /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsxs(
                "a",
                {
                  className: "dropdown-item d-flex align-items-center",
                  href: "users-profile.html",
                  children: [
                    /* @__PURE__ */ jsx("i", { className: "bi bi-person" }),
                    /* @__PURE__ */ jsx("span", { children: "My Profile" })
                  ]
                }
              ) }),
              /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("hr", { className: "dropdown-divider" }) }),
              /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsxs(
                "a",
                {
                  className: "dropdown-item d-flex align-items-center",
                  href: "users-profile.html",
                  children: [
                    /* @__PURE__ */ jsx("i", { className: "bi bi-gear" }),
                    /* @__PURE__ */ jsx("span", { children: "Account Settings" })
                  ]
                }
              ) }),
              /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("hr", { className: "dropdown-divider" }) }),
              /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsxs(
                "a",
                {
                  className: "dropdown-item d-flex align-items-center",
                  href: "pages-faq.html",
                  children: [
                    /* @__PURE__ */ jsx("i", { className: "bi bi-question-circle" }),
                    /* @__PURE__ */ jsx("span", { children: "Need Help?" })
                  ]
                }
              ) }),
              /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("hr", { className: "dropdown-divider" }) }),
              /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsxs(
                "a",
                {
                  className: "dropdown-item d-flex align-items-center",
                  href: "#",
                  children: [
                    /* @__PURE__ */ jsx("i", { className: "bi bi-box-arrow-right" }),
                    /* @__PURE__ */ jsx("span", { children: "Sign Out" })
                  ]
                }
              ) })
            ] })
          ] })
        ] }) })
      ]
    }
  ) });
};
const Sidebar = () => {
  return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsx("aside", { id: "sidebar", className: "sidebar", children: /* @__PURE__ */ jsxs("ul", { className: "sidebar-nav", id: "sidebar-nav", children: [
    /* @__PURE__ */ jsx("li", { className: "nav-item", children: /* @__PURE__ */ jsxs("a", { className: "nav-link ", href: "index.html", children: [
      /* @__PURE__ */ jsx("i", { className: "bi bi-grid" }),
      /* @__PURE__ */ jsx("span", { children: "Dashboard" })
    ] }) }),
    /* @__PURE__ */ jsxs("li", { className: "nav-item", children: [
      /* @__PURE__ */ jsxs(
        "a",
        {
          className: "nav-link collapsed",
          "data-bs-target": "#components-nav",
          "data-bs-toggle": "collapse",
          href: "#",
          children: [
            /* @__PURE__ */ jsx("i", { className: "bi bi-menu-button-wide" }),
            /* @__PURE__ */ jsx("span", { children: "Components" }),
            /* @__PURE__ */ jsx("i", { className: "bi bi-chevron-down ms-auto" })
          ]
        }
      ),
      /* @__PURE__ */ jsxs(
        "ul",
        {
          id: "components-nav",
          className: "nav-content collapse ",
          "data-bs-parent": "#sidebar-nav",
          children: [
            /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsxs("a", { href: "components-alerts.html", children: [
              /* @__PURE__ */ jsx("i", { className: "bi bi-circle" }),
              /* @__PURE__ */ jsx("span", { children: "Alerts" })
            ] }) }),
            /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsxs("a", { href: "components-accordion.html", children: [
              /* @__PURE__ */ jsx("i", { className: "bi bi-circle" }),
              /* @__PURE__ */ jsx("span", { children: "Accordion" })
            ] }) }),
            /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsxs("a", { href: "components-badges.html", children: [
              /* @__PURE__ */ jsx("i", { className: "bi bi-circle" }),
              /* @__PURE__ */ jsx("span", { children: "Badges" })
            ] }) }),
            /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsxs("a", { href: "components-breadcrumbs.html", children: [
              /* @__PURE__ */ jsx("i", { className: "bi bi-circle" }),
              /* @__PURE__ */ jsx("span", { children: "Breadcrumbs" })
            ] }) }),
            /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsxs("a", { href: "components-buttons.html", children: [
              /* @__PURE__ */ jsx("i", { className: "bi bi-circle" }),
              /* @__PURE__ */ jsx("span", { children: "Buttons" })
            ] }) }),
            /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsxs("a", { href: "components-cards.html", children: [
              /* @__PURE__ */ jsx("i", { className: "bi bi-circle" }),
              /* @__PURE__ */ jsx("span", { children: "Cards" })
            ] }) }),
            /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsxs("a", { href: "components-carousel.html", children: [
              /* @__PURE__ */ jsx("i", { className: "bi bi-circle" }),
              /* @__PURE__ */ jsx("span", { children: "Carousel" })
            ] }) }),
            /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsxs("a", { href: "components-list-group.html", children: [
              /* @__PURE__ */ jsx("i", { className: "bi bi-circle" }),
              /* @__PURE__ */ jsx("span", { children: "List group" })
            ] }) }),
            /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsxs("a", { href: "components-modal.html", children: [
              /* @__PURE__ */ jsx("i", { className: "bi bi-circle" }),
              /* @__PURE__ */ jsx("span", { children: "Modal" })
            ] }) }),
            /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsxs("a", { href: "components-tabs.html", children: [
              /* @__PURE__ */ jsx("i", { className: "bi bi-circle" }),
              /* @__PURE__ */ jsx("span", { children: "Tabs" })
            ] }) }),
            /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsxs("a", { href: "components-pagination.html", children: [
              /* @__PURE__ */ jsx("i", { className: "bi bi-circle" }),
              /* @__PURE__ */ jsx("span", { children: "Pagination" })
            ] }) }),
            /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsxs("a", { href: "components-progress.html", children: [
              /* @__PURE__ */ jsx("i", { className: "bi bi-circle" }),
              /* @__PURE__ */ jsx("span", { children: "Progress" })
            ] }) }),
            /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsxs("a", { href: "components-spinners.html", children: [
              /* @__PURE__ */ jsx("i", { className: "bi bi-circle" }),
              /* @__PURE__ */ jsx("span", { children: "Spinners" })
            ] }) }),
            /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsxs("a", { href: "components-tooltips.html", children: [
              /* @__PURE__ */ jsx("i", { className: "bi bi-circle" }),
              /* @__PURE__ */ jsx("span", { children: "Tooltips" })
            ] }) })
          ]
        }
      )
    ] }),
    /* @__PURE__ */ jsxs("li", { className: "nav-item", children: [
      /* @__PURE__ */ jsxs(
        "a",
        {
          className: "nav-link collapsed",
          "data-bs-target": "#forms-nav",
          "data-bs-toggle": "collapse",
          href: "#",
          children: [
            /* @__PURE__ */ jsx("i", { className: "bi bi-journal-text" }),
            /* @__PURE__ */ jsx("span", { children: "Forms" }),
            /* @__PURE__ */ jsx("i", { className: "bi bi-chevron-down ms-auto" })
          ]
        }
      ),
      /* @__PURE__ */ jsxs(
        "ul",
        {
          id: "forms-nav",
          className: "nav-content collapse ",
          "data-bs-parent": "#sidebar-nav",
          children: [
            /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsxs("a", { href: "forms-elements.html", children: [
              /* @__PURE__ */ jsx("i", { className: "bi bi-circle" }),
              /* @__PURE__ */ jsx("span", { children: "Form Elements" })
            ] }) }),
            /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsxs("a", { href: "forms-layouts.html", children: [
              /* @__PURE__ */ jsx("i", { className: "bi bi-circle" }),
              /* @__PURE__ */ jsx("span", { children: "Form Layouts" })
            ] }) }),
            /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsxs("a", { href: "forms-editors.html", children: [
              /* @__PURE__ */ jsx("i", { className: "bi bi-circle" }),
              /* @__PURE__ */ jsx("span", { children: "Form Editors" })
            ] }) }),
            /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsxs("a", { href: "forms-validation.html", children: [
              /* @__PURE__ */ jsx("i", { className: "bi bi-circle" }),
              /* @__PURE__ */ jsx("span", { children: "Form Validation" })
            ] }) })
          ]
        }
      )
    ] }),
    /* @__PURE__ */ jsxs("li", { className: "nav-item", children: [
      /* @__PURE__ */ jsxs(
        "a",
        {
          className: "nav-link collapsed",
          "data-bs-target": "#tables-nav",
          "data-bs-toggle": "collapse",
          href: "#",
          children: [
            /* @__PURE__ */ jsx("i", { className: "bi bi-layout-text-window-reverse" }),
            /* @__PURE__ */ jsx("span", { children: "Tables" }),
            /* @__PURE__ */ jsx("i", { className: "bi bi-chevron-down ms-auto" })
          ]
        }
      ),
      /* @__PURE__ */ jsxs(
        "ul",
        {
          id: "tables-nav",
          className: "nav-content collapse ",
          "data-bs-parent": "#sidebar-nav",
          children: [
            /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsxs("a", { href: "tables-general.html", children: [
              /* @__PURE__ */ jsx("i", { className: "bi bi-circle" }),
              /* @__PURE__ */ jsx("span", { children: "General Tables" })
            ] }) }),
            /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsxs("a", { href: "tables-data.html", children: [
              /* @__PURE__ */ jsx("i", { className: "bi bi-circle" }),
              /* @__PURE__ */ jsx("span", { children: "Data Tables" })
            ] }) })
          ]
        }
      )
    ] }),
    /* @__PURE__ */ jsxs("li", { className: "nav-item", children: [
      /* @__PURE__ */ jsxs(
        "a",
        {
          className: "nav-link collapsed",
          "data-bs-target": "#charts-nav",
          "data-bs-toggle": "collapse",
          href: "#",
          children: [
            /* @__PURE__ */ jsx("i", { className: "bi bi-bar-chart" }),
            /* @__PURE__ */ jsx("span", { children: "Charts" }),
            /* @__PURE__ */ jsx("i", { className: "bi bi-chevron-down ms-auto" })
          ]
        }
      ),
      /* @__PURE__ */ jsxs(
        "ul",
        {
          id: "charts-nav",
          className: "nav-content collapse ",
          "data-bs-parent": "#sidebar-nav",
          children: [
            /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsxs("a", { href: "charts-chartjs.html", children: [
              /* @__PURE__ */ jsx("i", { className: "bi bi-circle" }),
              /* @__PURE__ */ jsx("span", { children: "Chart.js" })
            ] }) }),
            /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsxs("a", { href: "charts-apexcharts.html", children: [
              /* @__PURE__ */ jsx("i", { className: "bi bi-circle" }),
              /* @__PURE__ */ jsx("span", { children: "ApexCharts" })
            ] }) }),
            /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsxs("a", { href: "charts-echarts.html", children: [
              /* @__PURE__ */ jsx("i", { className: "bi bi-circle" }),
              /* @__PURE__ */ jsx("span", { children: "ECharts" })
            ] }) })
          ]
        }
      )
    ] }),
    /* @__PURE__ */ jsxs("li", { className: "nav-item", children: [
      /* @__PURE__ */ jsxs(
        "a",
        {
          className: "nav-link collapsed",
          "data-bs-target": "#icons-nav",
          "data-bs-toggle": "collapse",
          href: "#",
          children: [
            /* @__PURE__ */ jsx("i", { className: "bi bi-gem" }),
            /* @__PURE__ */ jsx("span", { children: "Icons" }),
            /* @__PURE__ */ jsx("i", { className: "bi bi-chevron-down ms-auto" })
          ]
        }
      ),
      /* @__PURE__ */ jsxs(
        "ul",
        {
          id: "icons-nav",
          className: "nav-content collapse ",
          "data-bs-parent": "#sidebar-nav",
          children: [
            /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsxs("a", { href: "icons-bootstrap.html", children: [
              /* @__PURE__ */ jsx("i", { className: "bi bi-circle" }),
              /* @__PURE__ */ jsx("span", { children: "Bootstrap Icons" })
            ] }) }),
            /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsxs("a", { href: "icons-remix.html", children: [
              /* @__PURE__ */ jsx("i", { className: "bi bi-circle" }),
              /* @__PURE__ */ jsx("span", { children: "Remix Icons" })
            ] }) }),
            /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsxs("a", { href: "icons-boxicons.html", children: [
              /* @__PURE__ */ jsx("i", { className: "bi bi-circle" }),
              /* @__PURE__ */ jsx("span", { children: "Boxicons" })
            ] }) })
          ]
        }
      )
    ] }),
    /* @__PURE__ */ jsx("li", { className: "nav-heading", children: "Pages" }),
    /* @__PURE__ */ jsx("li", { className: "nav-item", children: /* @__PURE__ */ jsxs(
      "a",
      {
        className: "nav-link collapsed",
        href: "users-profile.html",
        children: [
          /* @__PURE__ */ jsx("i", { className: "bi bi-person" }),
          /* @__PURE__ */ jsx("span", { children: "Profile" })
        ]
      }
    ) }),
    /* @__PURE__ */ jsx("li", { className: "nav-item", children: /* @__PURE__ */ jsxs("a", { className: "nav-link collapsed", href: "pages-faq.html", children: [
      /* @__PURE__ */ jsx("i", { className: "bi bi-question-circle" }),
      /* @__PURE__ */ jsx("span", { children: "F.A.Q" })
    ] }) }),
    /* @__PURE__ */ jsx("li", { className: "nav-item", children: /* @__PURE__ */ jsxs(
      "a",
      {
        className: "nav-link collapsed",
        href: "pages-contact.html",
        children: [
          /* @__PURE__ */ jsx("i", { className: "bi bi-envelope" }),
          /* @__PURE__ */ jsx("span", { children: "Contact" })
        ]
      }
    ) }),
    /* @__PURE__ */ jsx("li", { className: "nav-item", children: /* @__PURE__ */ jsxs(
      "a",
      {
        className: "nav-link collapsed",
        href: "pages-register.html",
        children: [
          /* @__PURE__ */ jsx("i", { className: "bi bi-card-list" }),
          /* @__PURE__ */ jsx("span", { children: "Register" })
        ]
      }
    ) }),
    /* @__PURE__ */ jsx("li", { className: "nav-item", children: /* @__PURE__ */ jsxs(
      "a",
      {
        className: "nav-link collapsed",
        href: "pages-login.html",
        children: [
          /* @__PURE__ */ jsx("i", { className: "bi bi-box-arrow-in-right" }),
          /* @__PURE__ */ jsx("span", { children: "Login" })
        ]
      }
    ) }),
    /* @__PURE__ */ jsx("li", { className: "nav-item", children: /* @__PURE__ */ jsxs(
      "a",
      {
        className: "nav-link collapsed",
        href: "pages-error-404.html",
        children: [
          /* @__PURE__ */ jsx("i", { className: "bi bi-dash-circle" }),
          /* @__PURE__ */ jsx("span", { children: "Error 404" })
        ]
      }
    ) }),
    /* @__PURE__ */ jsx("li", { className: "nav-item", children: /* @__PURE__ */ jsxs(
      "a",
      {
        className: "nav-link collapsed",
        href: "pages-blank.html",
        children: [
          /* @__PURE__ */ jsx("i", { className: "bi bi-file-earmark" }),
          /* @__PURE__ */ jsx("span", { children: "Blank" })
        ]
      }
    ) })
  ] }) }) });
};
const year = () => {
  const today = /* @__PURE__ */ new Date();
  const year2 = today.getFullYear();
  return year2;
};
const Footer = () => {
  return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsxs("footer", { id: "footer", className: "footer", children: [
    /* @__PURE__ */ jsxs("div", { className: "copyright", children: [
      "© Copyright ",
      year(),
      /* @__PURE__ */ jsx("strong", { children: /* @__PURE__ */ jsx("span", { children: "Skc Infotech" }) }),
      ". All Rights Reserved"
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "credits", children: [
      "Designed by",
      " ",
      /* @__PURE__ */ jsx("a", { href: "#", children: "Skc Infotech" })
    ] })
  ] }) });
};
const Layout = ({ children }) => {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(Header, {}),
    /* @__PURE__ */ jsx(Sidebar, {}),
    /* @__PURE__ */ jsx("main", { id: "main", className: "main", children }),
    /* @__PURE__ */ jsx(Footer, {})
  ] });
};
const BreadCrumb = ({ mainTitle, breadcrumbs }) => {
  return /* @__PURE__ */ jsxs("div", { className: "pagetitle", children: [
    /* @__PURE__ */ jsx("h1", { children: mainTitle }),
    /* @__PURE__ */ jsx("nav", { children: /* @__PURE__ */ jsx("ol", { className: "breadcrumb", children: breadcrumbs.map((item, index) => /* @__PURE__ */ jsx(
      "li",
      {
        className: `breadcrumb-item ${item.active ? "active" : ""}`,
        children: item.href && !item.active ? /* @__PURE__ */ jsx("a", { href: item.href, children: item.label }) : /* @__PURE__ */ jsx("span", { children: item.label })
      },
      index
    )) }) })
  ] });
};
const Home = () => {
  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Dashboard", active: true }
  ];
  return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsxs(Layout, { children: [
    /* @__PURE__ */ jsx(Head, { title: "Home" }),
    /* @__PURE__ */ jsx(BreadCrumb, { mainTitle: "Dashboard", breadcrumbs }),
    /* @__PURE__ */ jsx("section", { className: "section dashboard", children: /* @__PURE__ */ jsx("div", { className: "row", children: /* @__PURE__ */ jsx("div", { className: "col-lg-8", children: /* @__PURE__ */ jsxs("div", { className: "row", children: [
      /* @__PURE__ */ jsx("div", { className: "col-xxl-4 col-md-6", children: /* @__PURE__ */ jsxs("div", { className: "card info-card sales-card", children: [
        /* @__PURE__ */ jsxs("div", { className: "filter", children: [
          /* @__PURE__ */ jsx(
            "a",
            {
              className: "icon",
              href: "#",
              "data-bs-toggle": "dropdown",
              children: /* @__PURE__ */ jsx("i", { className: "bi bi-three-dots" })
            }
          ),
          /* @__PURE__ */ jsxs("ul", { className: "dropdown-menu dropdown-menu-end dropdown-menu-arrow", children: [
            /* @__PURE__ */ jsx("li", { className: "dropdown-header text-start", children: /* @__PURE__ */ jsx("h6", { children: "Filter" }) }),
            /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(
              "a",
              {
                className: "dropdown-item",
                href: "#",
                children: "Today"
              }
            ) }),
            /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(
              "a",
              {
                className: "dropdown-item",
                href: "#",
                children: "This Month"
              }
            ) }),
            /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(
              "a",
              {
                className: "dropdown-item",
                href: "#",
                children: "This Year"
              }
            ) })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "card-body", children: [
          /* @__PURE__ */ jsxs("h5", { className: "card-title", children: [
            "Sales ",
            /* @__PURE__ */ jsx("span", { children: "| Today" })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "d-flex align-items-center", children: [
            /* @__PURE__ */ jsx("div", { className: "card-icon rounded-circle d-flex align-items-center justify-content-center", children: /* @__PURE__ */ jsx("i", { className: "bi bi-cart" }) }),
            /* @__PURE__ */ jsxs("div", { className: "ps-3", children: [
              /* @__PURE__ */ jsx("h6", { children: "145" }),
              /* @__PURE__ */ jsx("span", { className: "text-success small pt-1 fw-bold", children: "12%" }),
              " ",
              /* @__PURE__ */ jsx("span", { className: "text-muted small pt-2 ps-1", children: "increase" })
            ] })
          ] })
        ] })
      ] }) }),
      /* @__PURE__ */ jsx("div", { className: "col-xxl-4 col-md-6", children: /* @__PURE__ */ jsxs("div", { className: "card info-card revenue-card", children: [
        /* @__PURE__ */ jsxs("div", { className: "filter", children: [
          /* @__PURE__ */ jsx(
            "a",
            {
              className: "icon",
              href: "#",
              "data-bs-toggle": "dropdown",
              children: /* @__PURE__ */ jsx("i", { className: "bi bi-three-dots" })
            }
          ),
          /* @__PURE__ */ jsxs("ul", { className: "dropdown-menu dropdown-menu-end dropdown-menu-arrow", children: [
            /* @__PURE__ */ jsx("li", { className: "dropdown-header text-start", children: /* @__PURE__ */ jsx("h6", { children: "Filter" }) }),
            /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(
              "a",
              {
                className: "dropdown-item",
                href: "#",
                children: "Today"
              }
            ) }),
            /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(
              "a",
              {
                className: "dropdown-item",
                href: "#",
                children: "This Month"
              }
            ) }),
            /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(
              "a",
              {
                className: "dropdown-item",
                href: "#",
                children: "This Year"
              }
            ) })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "card-body", children: [
          /* @__PURE__ */ jsxs("h5", { className: "card-title", children: [
            "Revenue",
            " ",
            /* @__PURE__ */ jsx("span", { children: "| This Month" })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "d-flex align-items-center", children: [
            /* @__PURE__ */ jsx("div", { className: "card-icon rounded-circle d-flex align-items-center justify-content-center", children: /* @__PURE__ */ jsx("i", { className: "bi bi-currency-dollar" }) }),
            /* @__PURE__ */ jsxs("div", { className: "ps-3", children: [
              /* @__PURE__ */ jsx("h6", { children: "$3,264" }),
              /* @__PURE__ */ jsx("span", { className: "text-success small pt-1 fw-bold", children: "8%" }),
              " ",
              /* @__PURE__ */ jsx("span", { className: "text-muted small pt-2 ps-1", children: "increase" })
            ] })
          ] })
        ] })
      ] }) }),
      /* @__PURE__ */ jsx("div", { className: "col-xxl-4 col-xl-12", children: /* @__PURE__ */ jsxs("div", { className: "card info-card customers-card", children: [
        /* @__PURE__ */ jsxs("div", { className: "filter", children: [
          /* @__PURE__ */ jsx(
            "a",
            {
              className: "icon",
              href: "#",
              "data-bs-toggle": "dropdown",
              children: /* @__PURE__ */ jsx("i", { className: "bi bi-three-dots" })
            }
          ),
          /* @__PURE__ */ jsxs("ul", { className: "dropdown-menu dropdown-menu-end dropdown-menu-arrow", children: [
            /* @__PURE__ */ jsx("li", { className: "dropdown-header text-start", children: /* @__PURE__ */ jsx("h6", { children: "Filter" }) }),
            /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(
              "a",
              {
                className: "dropdown-item",
                href: "#",
                children: "Today"
              }
            ) }),
            /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(
              "a",
              {
                className: "dropdown-item",
                href: "#",
                children: "This Month"
              }
            ) }),
            /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(
              "a",
              {
                className: "dropdown-item",
                href: "#",
                children: "This Year"
              }
            ) })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "card-body", children: [
          /* @__PURE__ */ jsxs("h5", { className: "card-title", children: [
            "Customers",
            " ",
            /* @__PURE__ */ jsx("span", { children: "| This Year" })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "d-flex align-items-center", children: [
            /* @__PURE__ */ jsx("div", { className: "card-icon rounded-circle d-flex align-items-center justify-content-center", children: /* @__PURE__ */ jsx("i", { className: "bi bi-people" }) }),
            /* @__PURE__ */ jsxs("div", { className: "ps-3", children: [
              /* @__PURE__ */ jsx("h6", { children: "1244" }),
              /* @__PURE__ */ jsx("span", { className: "text-danger small pt-1 fw-bold", children: "12%" }),
              " ",
              /* @__PURE__ */ jsx("span", { className: "text-muted small pt-2 ps-1", children: "decrease" })
            ] })
          ] })
        ] })
      ] }) }),
      /* @__PURE__ */ jsx("div", { className: "col-12", children: /* @__PURE__ */ jsx("div", { className: "card", children: /* @__PURE__ */ jsxs("div", { className: "filter", children: [
        /* @__PURE__ */ jsx(
          "a",
          {
            className: "icon",
            href: "#",
            "data-bs-toggle": "dropdown",
            children: /* @__PURE__ */ jsx("i", { className: "bi bi-three-dots" })
          }
        ),
        /* @__PURE__ */ jsxs("ul", { className: "dropdown-menu dropdown-menu-end dropdown-menu-arrow", children: [
          /* @__PURE__ */ jsx("li", { className: "dropdown-header text-start", children: /* @__PURE__ */ jsx("h6", { children: "Filter" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(
            "a",
            {
              className: "dropdown-item",
              href: "#",
              children: "Today"
            }
          ) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(
            "a",
            {
              className: "dropdown-item",
              href: "#",
              children: "This Month"
            }
          ) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(
            "a",
            {
              className: "dropdown-item",
              href: "#",
              children: "This Year"
            }
          ) })
        ] })
      ] }) }) })
    ] }) }) }) })
  ] }) });
};
export {
  Home as default
};
