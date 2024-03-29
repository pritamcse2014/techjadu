import { useEffect, useState } from 'react';
import './Sell.css'
import 'react-multi-carousel/lib/styles.css';
import ProductCard from '../ProductCard/ProductCard';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';

const Sell = () => {
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
        <div className='container'>
            <h3 className="name mt-5">Flash Sell</h3>
            <Slider {...settings}>
                {
                    products.map(product => <ProductCard key={product.id} product={product}></ProductCard>)
                }
            </Slider>
        </div>
    );
};

export default Sell;
