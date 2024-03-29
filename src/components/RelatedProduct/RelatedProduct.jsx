import { Link } from 'react-router-dom';
import './RelatedProduct.css';
import { MdOutlineShoppingCart } from "react-icons/md";

const RelatedProduct = ({product}) => {
    const {image, name, price} = product;
    return (
        <div className="shadow fixed-height-card">
            <img className="w-100" src={image} alt="..." />
            <h6 className="card-title">{name}</h6>
            <p className="card-text mt-2">Price: ${price}</p>
            <Link to={`/products/${product.id}`}>
                <button className="btn btn-outline-danger w-100"><MdOutlineShoppingCart /> Add To Cart </button>
            </Link>
        </div>
    );
};

export default RelatedProduct;