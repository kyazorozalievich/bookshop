import React, { useContext, useState } from "react";
import { BookShopContext } from "../../context";
import { useNavigate } from "react-router-dom";

const DetailsCard = ({ el }) => {
  //Roots
  const { basket, setBasket } = useContext(BookShopContext);
  const {dark} = useContext(BookShopContext)
  //

  //Rest
  const naviBasket = useNavigate();
  //

  function addToBasket() {
    let findBasket = basket.find((item) => item.id === el.id);
    if (findBasket) {
      let deleteBasket = basket.filter((item) => item.id !== el.id);
      setBasket(deleteBasket);
      localStorage.setItem("basket", JSON.stringify(deleteBasket));
    } else {
      naviBasket("/basket");
      let result = [...basket, el];
      setBasket(result);
      localStorage.setItem("basket", JSON.stringify(result));
    }
  }

  const incrementQuantity = () => {
    let changeQuantity = basket.map((item) =>
      item.id === el.id ? { ...item, quantity: item.quantity + 1 } : item
    );
    setBasket(changeQuantity);
  };
  const DicrementQuantity = () => {
    let changeQuantity = basket.map((item) =>
      item.id === el.id
        ? { ...item, quantity: item.quantity > 1 ? item.quantity - 1 : 1 }
        : item
    );
    setBasket(changeQuantity);
  };

  return (
    <div className="container w-[90%] mt-[50px] mb-[50px]  ">
      <div className=" flex items-center gap-[50px] w-[400px] h-[500px] ">
        <img src={el?.imageUrl} alt="" className="w-[100%]" />
        <div className="flex items-start flex-col gap-[10px]">
          <h2 className="text-[35px] font-[600]">{el?.name}</h2>
          <p className="text-2xl font-bold">{el?.price * el?.quantity}$</p>
          <h2 className=" my-[20px] text-[18px]">{el?.category}</h2>
          <div className="flex items-center mb-[20px]">
            <button
              className="decrement w-[30px]  h-[20px] bg-gray-950 text-white flex items-center justify-center "
              style={{
                backgroundColor: dark? "white" : "black",
                color: dark? "black" : "white",
              }}
              onClick={() => {
                DicrementQuantity();
              }}
            >
              -
            </button>
            <h1 className="flex items-center justify-center w-[40px] h-[20px] border-2 border-solid border-gray-950"
             style={{
              border: dark? "black" : "white",
              border: '2px solid'
            }}
            >
              {el?.quantity}
            </h1>
            <button
              className="increment w-[30px]  h-[20px] bg-gray-950 text-white flex items-center justify-center "
              style={{
                backgroundColor: dark? "white" : "black",
                color: dark? "black" : "white",
              }}
              onClick={() => {
                incrementQuantity();
              }}
            >
              +
            </button>
          </div>
          <h3 className="text-[18px]">Описание</h3>
          <p className="text-[13px] w-[400px]">{el?.description}</p>
          <div className="buttons flex items-center justify-center flex-col gap-[10px] mt-[40px]">
            <button
              className="text-[12px] font-[700] w-[170px] h-[35px] border-2 border-solid border-gray-900"
              onClick={() => {
                addToBasket();
              }}
              style={{
                border: dark? "black" : "white",
                border: '2px solid'
              }}
            >
              Добавить в корзину
            </button>
            <button className="text-[12px] font-[700] w-[170px] h-[35px] border-2 border-solid border-gray-900"
                style={{
                  border: dark? "black" : "white",
                  border: '2px solid'
                }}
            >
              Купить сейчас
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsCard;
