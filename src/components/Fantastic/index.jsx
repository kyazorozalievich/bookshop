import React, { useContext } from 'react';
import { BookShopContext } from '../../context';
import ProductCard from '../ProductCard';

const Fantastic = () => {
    const {fantastic, setFantastic} = useContext(BookShopContext)
    return (
        <div className=''>
             <div className="container w-[90%] flex items-center">
                <div className="flex items-center flex-wrap gap-[30px]">
                    {
                     fantastic.map((el, idx)=> (
                        <ProductCard el={el} />
                     ))
                    }
                </div>
            </div>
        </div>
    );
};

export default Fantastic;