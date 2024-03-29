import { useEffect, useState } from 'react';
import './RelatedProducts.css'
import 'react-multi-carousel/lib/styles.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import RelatedProduct from '../RelatedProduct/RelatedProduct';

const RelatedProducts = () => {
    const [products, setProducts] = useState([]);
    useEffect( () => {
        fetch('https://shuddota.com/api/products')
        .then(response => response.json())
        .then(data => setProducts(data))
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
              dots: true
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
        <div className='container'>
            <h3 className="name mt-5">Related Products</h3>
            <Slider {...settings}>
                {
                    products.map(product => <RelatedProduct key={product.id} product={product}></RelatedProduct>)
                }
            </Slider>
        </div>
    );
};

export default RelatedProducts;