import { Link } from "@inertiajs/react";
import { BreadcrumbProps } from "../Interafaces/BreadCrumbInterface";

const BreadCrumb: React.FC<BreadcrumbProps> = ({ mainTitle, breadcrumbs }) => {
    return (
        <div className="pagetitle">
            <h1>{mainTitle}</h1>
            <nav>
                <ol className="breadcrumb">
                    {breadcrumbs.map((item, index) => (
                        <li
                            key={index}
                            className={`breadcrumb-item ${
                                item.active ? "active" : ""
                            }`}
                        >
                            {item.href && !item.active ? (
                                <Link href={item.href}>{item.label}</Link>
                            ) : (
                                <span>{item.label}</span>
                            )}
                        </li>
                    ))}
                </ol>
            </nav>
        </div>
    );
};
export default BreadCrumb;
