import { useState } from 'react';
import './Top.css'
import { useEffect } from 'react';
import Category from '../Category/Category';

const Top = () => {
    const [categories, setCategories] = useState([]);
    useEffect( () => {
        fetch('https://shuddota.com/api/products')
        .then(response => response.json())
        .then(data => setCategories(data))
    }, [] )
    return (
        <div className='container'>
            <h3 className="name mt-5">Top Categories</h3>
            <div className='category-product'>
                {
                    categories.map(category => <Category key={category.id} category={category}></Category>)
                }
            </div>
        </div>
    );
};

export default Top;