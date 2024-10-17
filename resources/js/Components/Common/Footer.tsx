import year from "@/Helpers/CommonHelper";

const Footer = () => {
    return (
        <>
            <footer id="footer" className="footer">
                <div className="copyright">
                    &copy; Copyright {year()}
                    <strong>
                        <span>Skc Infotech</span>
                    </strong>
                    . All Rights Reserved
                </div>
                <div className="credits">
                    Designed by{" "}
                    <a href="#">Skc Infotech</a>
                </div>
            </footer>
        </>
    );
};

export default Footer;