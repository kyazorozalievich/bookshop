import React, { useContext } from "react";
import { BookShopContext } from "../../context";
import ProductCard from "../ProductCard";

const Product = () => {
  //Roots
  const { books, setBooks } = useContext(BookShopContext);
  const {dark} = useContext(BookShopContext)
  //


  const productSort = (e) => {
    let res = e.target.value
    const SortProduct = books.slice().sort((a, b) => {
        if(res === 'expensive'){
           return  a.price - b.price
        }
        else if (res === 'cheap') {
          return  b.price - a.price
        } 
        else if (res === 'A-Z') {
            return a.name.localeCompare(b.name)
        }
        else if (res === 'Z-A') {
            return b.name.localeCompare(a.name)
        }
    })
    setBooks(SortProduct)
    
}


  return (
    <div>
      <div className="container w-[90%] mt-[50px]">
        <div className="flex items-center justify-between ">
            <h1 className="text-[40px] font-bold">Возможно, Вам понравится</h1>
            <select className="mt-5 border-2 border-solid w-[140px] h-[30px] border-gray-800 rounded-[5px] outline-none text-[18px] font-[600]" id="" onChange={productSort }
            style={{
              backgroundColor: dark? '#212121' : '#ffffff',
              color: dark? '#ffffff' : '#212121',
            }}
            >
          <option value="expensive">expensive</option>
          <option value="cheap">cheap</option>
          <option value="A-Z">A-Z</option>
          <option value="Z-A">Z-A</option>
        </select>
        </div>
        <div className=" flex flex-wrap gap-[30px] mt-[30px]">
          {books.map((el) => (
            <ProductCard el={el} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Product;