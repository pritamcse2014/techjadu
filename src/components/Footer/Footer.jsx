import './Footer.css'
import logo from '../../images/logo.svg'
import { IoLocationOutline } from "react-icons/io5";
import { CiMail } from "react-icons/ci";
import { MdOutlineLocalPhone } from "react-icons/md";
import facebook from '../../images/facebook.svg';
import linkdin from '../../images/linkdin.svg';
import twitter from '../../images/twitter.svg';
import mail from '../../images/mail.svg';

const Footer = () => {
    return (
        <div>
            <footer className="footer-20192">
                <div className="site-section">
                    <div className="container">
                    <div className="row">
                        <div className="col-sm-12 col-md-3">
                        <img className='mt-5' src={logo} alt="Logo" />
                        <p className='text-black mt-3'>
                            <small>Techjodo.com | Online Shopping In Bangladesh With Home Delivery</small>
                        </p>
                        </div>
                        <div className="col-sm-12 col-md-3">
                        <h4 className='name-text mb-5'>About Us</h4>
                        <ul className="list-unstyled links">
                            <li><a href="#">Position and authority.</a></li>
                            <li><a href="#">Our employees.</a></li>
                            <li><a href="#">Position and authority.</a></li>
                            <li><a href="#">Position and authority.</a></li>
                        </ul>
                        </div>
                        <div className="col-sm-12 col-md-3">
                        <h4 className='name-text mb-5'>Contact Us</h4>
                        <ul className="list-unstyled links">
                            <li><a href="#"><IoLocationOutline /> Dhaka,Bangladesh</a></li>
                            <li><a href="#"><CiMail /> info@gmail.com</a></li>
                            <li><a href="#"><MdOutlineLocalPhone /> 098 583930</a></li>
                        </ul>
                        </div>
                        <div className="col-sm-12 col-md-3">
                        <h4 className='name-text mb-5'>Social Page</h4>
                        <ul className="list-unstyled social">
                            <li><img src={facebook} alt="Facebook" /></li>
                            <li><img src={linkdin} alt="Linkdin" /></li>
                            <li><img src={twitter} alt="Twitter" /></li>
                            <li><img src={mail} alt="Mail" /></li>
                        </ul>
                        </div>
                    </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;