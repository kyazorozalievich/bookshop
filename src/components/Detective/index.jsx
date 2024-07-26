import React, { useContext } from 'react';
import ProductCard from '../ProductCard';
import { BookShopContext } from '../../context';

const Detective = () => {
  const {detective, setDetective} = useContext(BookShopContext)
    return (
        <div className=''>
              <div className="container w-[90%] flex items-center">
              <div className="flex items-center flex-wrap gap-[30px]">
                    {
                     detective.map((el, idx)=> (
                        <ProductCard el={el} />
                     ))
                    }
                </div>
            </div>
        </div>
    );
};

export default Detective;