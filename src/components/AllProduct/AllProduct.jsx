import { Link } from 'react-router-dom';
import './AllProduct.css';
import { MdOutlineShoppingCart } from "react-icons/md";

const AllProduct = ({allproduct}) => {
    const {image, name, discount_price, price} = allproduct;
    return (
        <div className="shadow fixed-height-card">
            <img className="w-100" src={image} alt="..." />
            <h6 className="card-title">{name}</h6>
            <div className="d-flex justify-content-center gap-2">
                <p className="card-text mt-2 text-danger bold"><b>${discount_price}</b></p>
                <del className="card-text mt-2">${price}</del>
            </div>
            <Link to={`/products/${allproduct.id}`}>
                <button className="btn btn-outline-danger w-100"><MdOutlineShoppingCart /> Add To Cart </button>
            </Link>
        </div>
    );
};

export default AllProduct;