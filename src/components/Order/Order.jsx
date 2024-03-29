import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Menu from '../Menu/Menu';
import RelatedProducts from '../RelatedProducts/RelatedProducts';
import './Order.css';
import { RiDeleteBin6Line } from "react-icons/ri";
import rectangle1 from '../../images/rectangle-1.svg';
import rectangle2 from '../../images/rectangle-2.svg';

const Order = () => {
    return (
        <div>
            <Header />
            <Menu />
            <div className='container d-md-flex mt-5'>
                <div className='row justify-content-center'>
                    <div className='col-md-6'>
                        <h6 className='form-text-color text-center'>
                            <span className='icon-color'>*</span>সঠিক ভাবে পণ্য অর্ডার করতে,অনুগ্রহ করে আপনার সম্পূর্ণ নাম, মোবাইল নম্বর, সম্পূর্ণ ঠিকানা লিখুন এবং অর্ডার কনফার্ম করুন ক্লিক করুন
                        </h6>
                        <form>
                            <div className="form-floating mb-3">
                                <label for="exampleInputEmail1" className="form-label form-text-color">আপনার নাম</label>
                                <input type="text" className="form-control form-color" id="exampleInputEmail1" aria-describedby="emailHelp" />
                            </div>
                            <div className="form-floating mb-3">
                                <label for="exampleInputEmail1" className="form-label form-text-color">আপনার মোবাইল নম্বর</label>
                                <input type="number" className="form-control form-color" id="exampleInputEmail1" aria-describedby="emailHelp" />
                            </div>
                            <div className="form-floating mb-3">
                                <textarea className="form-control form-color" placeholder="Leave a comment here" id="floatingTextarea2"></textarea>
                                <label for="floatingTextarea2" className="form-text-color">আপনার সম্পূর্ণ ঠিকানা</label>
                            </div>
                            <div className="form-floating mb-3">
                                <label for="exampleInputEmail1" className="form-label form-text-color">অর্ডার সম্পর্কে নোট</label>
                                <input type="text" className="form-control form-color" id="exampleInputEmail1" aria-describedby="emailHelp" />
                            </div>
                            
                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1" />
                                <label className="form-check-label form-text-color" for="inlineRadio1"> ঢাকার ভিতরে </label>
                            </div>
                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2" />
                                <label className="form-check-label form-text-color" for="inlineRadio2"> ঢাকার বাইরে </label>
                            </div>

                            <div className="mb-3 mt-3 form-check">
                                <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                                <label className="form-check-label form-text-color" for="exampleCheck1">I agree with the Terms and Conditions</label>
                            </div>
                            <button type='btn' className='btn w-100 mt-3 btn-color-one'> Confirm Order </button>
                        </form>
                    </div>

                    <div className='col-md-6'>
                        <h6 className='form-text-color'>Other Information</h6>
                        <table className="table table-bordered text-center">
                            <thead>
                                <tr>
                                    <th scope="col"></th>
                                    <th scope="col">Product</th>
                                    <th scope="col">Name</th>
                                    <th scope="col">Quantity</th>
                                    <th scope="col">Sub Total</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th scope="row"><RiDeleteBin6Line /></th>
                                    <td><img src={rectangle1} alt="" /></td>
                                    <td>
                                        Green color indian cotton three piece|original indian cotton three piece 1 X 1000
                                    </td>
                                    <td><button type="button" className="btn btn-quantity">+ 1 -</button></td>
                                    <td>Tk 1000.00</td>
                                </tr>
                                <tr>
                                    <th scope="row"><RiDeleteBin6Line /></th>
                                    <td><img src={rectangle2} alt="" /></td>
                                    <td>
                                        Green color indian cotton three piece|original indian cotton three piece 1 X 1000
                                    </td>
                                    <td><button type="button" className="btn btn-quantity">+ 1 -</button></td>
                                    <td>Tk 1000.00</td>
                                </tr>
                            </tbody>
                        </table>
                        <div>
                        <p className='form-text-color'>Subtotal <span className='right-span'>2000.00</span></p>
                        <p className='form-text-color'>Shipping Fee <span className='right-span'>80.00</span></p>
                        <h6 className='form-text-color'>Total <span className='right-span'>2080.00</span></h6>
                        </div>
                    </div>
                </div>
            </div>
            <RelatedProducts />
            <Footer />
        </div>
    );
};

export default Order;