import React, { useContext } from 'react';
import { BookShopContext } from '../../context';
import ProductCard from '../ProductCard';

const Scientific = () => {
    const {scientific, setScientific} = useContext(BookShopContext)
    return (
        <div className=''>
                <div className="container w-[90%] flex items-center">
                <div className="flex items-center flex-wrap gap-[30px]">
                    {
                     scientific.map((el, idx)=> (
                        <ProductCard el={el} />
                     ))
                    }
                </div>
            </div>
        </div>
    );
};

export default Scientific;