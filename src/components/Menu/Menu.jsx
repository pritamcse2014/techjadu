import './Menu.css';

const Menu = () => {
    return (
        <div className='container-fluid bg-dark'>
            <nav className="navbar navbar-expand navbar-dark container">
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <a className="nav-link border-start border-end border-light px-4 py-0 text-light" href="#">Home</a>
                        </li>
                        <li className="nav-item active">
                            <a className="nav-link border-end border-light px-4 py-0 text-light" href="#">Shop</a>
                        </li>
                        <li className="nav-item active">
                            <a className="nav-link border-end border-light px-4 py-0 text-light" href="#">Collection</a>
                        </li>
                        <li className="nav-item active">
                            <a className="nav-link border-end border-light px-4 py-0 text-light" href="#">Contact</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
};

export default Menu;