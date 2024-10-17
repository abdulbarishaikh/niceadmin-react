type SubMenu = {
    title: string;
    href: string;
    icon?: string;
};

type MenuItem = {
    title: string;
    href?: string;
    icon: string;
    subMenu?: SubMenu[];
};

export default MenuItem;