import React from "react";
import { Link } from "@inertiajs/react";
import menuItems from "./Menus";
import { usePage } from '@inertiajs/react'
const Sidebar: React.FC = () => {
    const { url, component } = usePage()
    
    
    const select = (el: any, all = false) => {
        el = el.trim();
        if (all) {
            return [...document.querySelectorAll(el)];
        } else {
            return document.querySelector(el);
        }
    };

    const on = (type: any, el: any, listener: any, all = false) => {
        if (all) {
            select(el, all).forEach((e: any) =>
                e.addEventListener(type, listener)
            );
        } else {
            select(el, all).addEventListener(type, listener);
        }
    };
    if (select(".toggle-sidebar-btn")) {
        on("click", ".toggle-sidebar-btn", function () {
            select("body").classList.toggle("toggle-sidebar");
        });
    }

    return (
        <>
            <aside id="sidebar" className="sidebar">
                <ul className="sidebar-nav" id="sidebar-nav">
                    {menuItems.map((item, index) => (
                        <li key={index} className="nav-item">
                            {item.subMenu ? (
                                <>
                                    <Link
                                        className="nav-link collapsed"
                                        data-bs-target={`#menu-${index}`}
                                        data-bs-toggle="collapse"
                                        href="#"
                                    >
                                        <i className={item.icon}></i>
                                        <span>{item.title}</span>
                                        <i className="bi bi-chevron-down ms-auto"></i>
                                    </Link>
                                    <ul
                                        id={`menu-${index}`}
                                        className="nav-content collapse"
                                        data-bs-parent="#sidebar-nav"
                                    >
                                        {item.subMenu.map(
                                            (subItem, subIndex) => (
                                                <li key={subIndex}>
                                                    <Link href={subItem.href}>
                                                        <i className="bi bi-circle"></i>
                                                        <span>
                                                            {subItem.title}
                                                        </span>
                                                    </Link>
                                                </li>
                                            )
                                        )}
                                    </ul>
                                </>
                            ) : (
                                <Link className={`nav-link ${url === item.href ? '' : 'collapsed'}`} href={item?.href??'#'}>
                                    <i className={item.icon}></i>
                                    <span>{item.title}</span>
                                </Link>
                            )}
                        </li>
                    ))}
                </ul>
            </aside>
        </>
    );
};

export default Sidebar;
