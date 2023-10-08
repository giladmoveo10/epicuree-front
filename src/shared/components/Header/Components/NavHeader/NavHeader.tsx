import "./NavHeader.scss";

function NavHeader() {
    return (
        <div className="nav-header">
            <nav className="nav">
                <a className="menu-item" href="#ChangeToLink">
                    Restaurants
                </a>
                <a className="menu-item" href="#ChangeToLink">
                    Chefs
                </a>
            </nav>
        </div>
    );
}

export default NavHeader;
