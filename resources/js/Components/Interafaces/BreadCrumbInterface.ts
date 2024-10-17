export default interface BreadcrumbItem {
    label: string;
    href?: string;
    active?: boolean;
};
export interface BreadcrumbProps {
    mainTitle: string;
    breadcrumbs: BreadcrumbItem[];
};