import '../Header/Header'
import logo from '../../images/logo.svg'
import { IoSearchSharp } from "react-icons/io5";
import { MdOutlinePhone } from "react-icons/md";
import { IoCartOutline } from "react-icons/io5";
import './Header.css';

const Header = () => {
    return (
        <div className="container">
            <nav className="navbar navbar-expand-lg navbar-light">
                <div className="container-fluid">
                    <a href="/"><img src={logo} alt="Logo" /></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <form className="d-flex" role="search">
                                <input className="form-control search" type="search" placeholder="Search" aria-label="Search" />
                                <button className="btn btn-color" type="submit">
                                    <IoSearchSharp />
                                </button>
                            </form>
                        </ul>
                        <div className='me-5'>
                            <MdOutlinePhone /> 01947990483
                        </div>
                        <div>
                            <button type="button" className="btn btn-dark btn-cart">
                                <IoCartOutline /> Cart
                            </button>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;