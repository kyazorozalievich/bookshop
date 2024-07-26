import React, { useContext, useState } from "react";
import { BookShopContext } from "../../context";
import { RiDeleteBinFill } from "react-icons/ri";

const BasketCard = ({ el }) => {
  const { basket, setBasket, order, setOrder  } = useContext(BookShopContext);

  const deleteBasket = () => {
    let del = basket.filter((item) => item.id !== el.id);
    setBasket(del);
    localStorage.setItem("basket", JSON.stringify(del));
  };

  const incrementQuantity = () => {
    let changeQuantity = basket.map((item) =>
      item.id === el.id ? { ...item, quantity: item.quantity + 1 } : item
    );
    setBasket(changeQuantity);
  };
  const DicrementQuantity = () => {
    let changeQuantity = basket.map((item) =>
      item.id === el.id ? { ...item, quantity: item.quantity > 1 ? item.quantity-1 : 1 } : item
    );
    setBasket(changeQuantity);
  };
  function productOrder() {
    let findOrder = order.find((item)=> item.id == el.id)
    if (findOrder) {
      let delOrder = order.filter((item)=> item.id !== el.id)
      setOrder(delOrder)
      localStorage.setItem('order', JSON.stringify(delOrder))
    } else {
      let res = [...order, el]
      setOrder(res)
      localStorage.setItem('order', JSON.stringify(res))
    }
  }

  let click = order.some((item)=> item.id === el.id)


  return (
    <div className="mt-[50px] border-2 border-solid p-[20px] border-blue-950  w-[650px] rounded-[5px] ">
      <div className="container">
        <div className=" flex items-center  gap-[40px]">
          <img src={el.imageUrl} alt="" className="w-[220px] h-[300px]" />
          <div className="flex items-start flex-col gap-[20px]">
            <h1 className="text-[30px] text-gray-950 font-[600]">{el.name}</h1>
            <h1 className="text-2xl text-gray-950 font-[600]">{el.price > 300 ? Math.floor( el.price * 80 / 100 * el.quantity ): Math.floor(el.price * el.quantity)}$</h1>
            <div className="flex items-center mb-[20px]">
              <button
                onClick={() => {
                  DicrementQuantity();
                }}
                className="decrement w-[40px]  h-[30px] bg-gray-950 text-white flex items-center justify-center "
              >
                -
              </button>
              <h1 className="flex items-center justify-center w-[50px] h-[30px] border-2 border-solid border-gray-950">
                {el.quantity}
              </h1>
              <button
                onClick={() => {
                  incrementQuantity();
                }}
                className="increment w-[40px]  h-[30px] bg-gray-950 text-white flex items-center justify-center "
              >
                +
              </button>
            </div>
            <div className="w-[150px] h-[40px] cursor-pointer border-black border-2 border-solid flex items-center justify-center rounded-[5px]"
            onClick={()=> {
              productOrder()
            }}
            style={{
              border: click ? '2px solid green ' : '2px solid black',
            }}
            >
              <h1 className="text-[15px] font-[600]"
              style={{
                color: click ? 'green' : 'black',
              }}
              >{click ? 'Товар добавлен ✅' : 'Добавить Товар +'}</h1>
            </div>
            <a
              className="deleteBasket flex items-center justify-center text-[18px] font-[600] gap-[5px]"
              onClick={() => {
                deleteBasket();
              }}
            >
              Удалить <span>{<RiDeleteBinFill />}</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BasketCard;
