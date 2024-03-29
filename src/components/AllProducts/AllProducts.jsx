import { useEffect, useState } from 'react';
import AllProduct from '../AllProduct/AllProduct';
import './AllProducts.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';

const AllProducts = () => {
    const [allproducts, setAllProducts] = useState([]);
    useEffect( () => {
        fetch('https://shuddota.com/api/products')
        .then(response => response.json())
        .then(data => setAllProducts(data))
    }, [] )
    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 5,
        initialSlide: 1,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: false
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2
            }
          }
        ]
      };
    return (
        <div>
            <div className='container'>
                <h3 className="name mt-5">All Products</h3>
                <Slider {...settings}>
                    {
                        allproducts.map(allproduct => <AllProduct key={allproduct.id} allproduct={allproduct}></AllProduct>)
                    }
                </Slider>
            </div>
            <div className='d-flex justify-content-center'>
                <a className='load-btn mt-5 btn' href="#">Load More</a>
            </div>
        </div>
    );
};

export default AllProducts;