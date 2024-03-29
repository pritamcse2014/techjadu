import { useState } from 'react';
import './Fashion.css'
import { useEffect } from 'react';
import Fas from '../Fas/Fas';

const Fashion = () => {
    const [fashion, setFashion] = useState([]);
    useEffect( () => {
        fetch('https://shuddota.com/api/products')
        .then(response => response.json())
        .then(data => setFashion(data))
    }, [] )
    return (
        <div className='container'>
            <h3 className="name mt-5">Fashion Category</h3>
            <div className='category-product'>
                {
                    fashion.map(fas => <Fas key={fas.id} fas={fas}></Fas>)
                }
            </div>
        </div>
    );
};

export default Fashion;