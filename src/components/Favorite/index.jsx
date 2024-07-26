import React, { useContext } from "react";
import { BookShopContext } from "../../context";
import ProductCard from "../ProductCard";
import { TbHeartDown } from "react-icons/tb";
import { useNavigate } from "react-router-dom";

const Favorite = () => {
  //Roots
  const { favorite } = useContext(BookShopContext);
  //

  //Rest
  const navigate = useNavigate()
  //
  return (
    <div>
      <div className="container w-[90%]">
        <div className="mt-50px ">
          <div className="flex flex-wrap gap-[30px]">
            {favorite.length === 0 ? (
                <div className="flex items-center flex-col ml-[550px] mt-[100px] h-[500px] cursor-pointer"
                onClick={()=> {
                    navigate('/')
                }}
                >
                    <a className="text-[200px] text-gray-400 ">
                      <TbHeartDown />
                    </a>
                    
                    <h1 className="text-[20px] text-gray-500 ">Избранное Пусто!</h1>
                </div>
            ) : (
              favorite.map((el) => <ProductCard el={el} />)
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Favorite;
