import React from 'react';
import rectangle from '../../images/rectangle.svg';
import star from '../../images/star.svg';
import group1 from '../../images/group-1.svg';
import group2 from '../../images/group-2.svg';
import group3 from '../../images/group-3.svg';
import size from '../../images/size.svg';
import { MdOutlineShoppingBasket } from "react-icons/md";
import { MdOutlineShoppingCart } from "react-icons/md";
import { MdOutlineLocalPhone } from "react-icons/md";
import { IoShareSocialOutline } from "react-icons/io5";
import './ProductDetails.css';
import RelatedProducts from '../RelatedProducts/RelatedProducts';
import Header from '../Header/Header';
import Menu from '../Menu/Menu';
import Footer from '../Footer/Footer';
import { Link } from 'react-router-dom';

const ProductDetails = () => {
    const product = {
        name: 'Green color indian cotton three piece',
        price: 1000.00,
        availability: 'In Stock',
        imageUrl: 'product-image-url.jpg',
        colors: ['Red', 'Blue', 'Green'],
        sizes: ['S', 'M', 'L', 'XL'],
        quantity: 10,
        reviews: [
          { rating: 5 },
          { rating: 3 },
        ],
    };
    return (
        <div>
            <Header />
            <Menu />
            <div className='d-lg-flex container'>
                <img src={rectangle} alt="" />
                <div>
                    <h3 className='mt-5'>Green color indian cotton three piece</h3>
                    <div className='d-lg-inline-flex'>
                        <img src={star} alt="" />
                        <p className='mt-3'> 5 Reviews </p>
                    </div>
                    <p className='text-color'>৳1000.00</p>
                    <p>Availability : <span className='text-color'>In Stock</span></p>
                    <h6>Color: <img src={group1} alt="" /> <img src={group2} alt="" /> <img src={group3} alt="" /></h6>
                    <h6>Size: <img src={size} alt="" /></h6>
                    <div className='d-lg-inline-flex'>
                        <h6>Quantity: <button type="button" class="btn btn-quantity">+ 1 -</button></h6>
                    </div>
                    <div>
                        <Link to={"/order"}>
                            <button type='btn' className='btn w-100 mt-3 btn-color-one'><MdOutlineShoppingBasket /> অর্ডার করুন </button>
                        </Link>
                    </div>
                    <div>
                        <button type='btn' className="btn w-100 mt-3 btn-color-two"><MdOutlineShoppingCart /> Add To Cart </button>
                    </div>
                    <div>
                        <button type='btn' className="btn w-100 mt-3 btn-color-three"><MdOutlineLocalPhone />অর্ডার করতে কল করুন 01947990483 </button>
                    </div>
                    <div className='mt-3'>
                        বিঃদ্রঃ- ছবি এবং বর্ণনার সাথে পণ্যের মিল থাকা সত্যেও আপনি পণ্য গ্রহন করতে না চাইলে কুরিয়ার
                        <br />
                        চার্জ ১২০ টাকা কুরিয়ার ডেলিভারি ম্যানকে প্রদান করে পণ্য সাথে সাথে রিটার্ন করবেন। পরে কোন
                        <br />
                        কমপ্লেইন/রিটার্ন গ্রহণযোগ্য নয়!
                    </div>
                    <div className='mt-3'>
                        <table className="table table-bordered text-center">
                            <tbody>
                                <tr>
                                    <td>ঢাকায় ডেলিভারি চার্জ</td>
                                    <td>৳ ৮০.০০</td>
                                </tr>
                                <tr>
                                    <td>ঢাকার বাইরে ডেলিভারি চার্জ</td>
                                    <td>৳ ১৬০.০০</td>
                                </tr>
                                <tr>
                                    <td>বিকাশ, নগদ, রকেট, নাম্বার :</td>
                                    <td>০১৯********</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <button type="button" className="btn btn-light mt-2 btn-share border-0"><IoShareSocialOutline /> Share </button>
                </div>
            </div>
            <RelatedProducts />
            <Footer />
        </div>
    );
};

export default ProductDetails;