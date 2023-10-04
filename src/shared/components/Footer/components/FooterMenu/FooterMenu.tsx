import "./FooterMenu.scss";

function FooterMenu() {
    return (
        <div className="footer-menu">
            <div className="menu-links">
                <a href="#contact-us" className="menu-item">
                    Contact Us
                </a>
                <a href="#terms-of-use" className="menu-item">
                    Term of Use
                </a>
                <a href="#privacy-policy" className="menu-item">
                    Privacy Policy
                </a>
            </div>
        </div>
    );
}

export default FooterMenu;
