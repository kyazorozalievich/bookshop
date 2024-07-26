import React, { useContext, useEffect, useState } from "react";
import { BookShopContext } from "../../context";
import BasketCard from "../BasketCard";
import { LiaCartArrowDownSolid } from "react-icons/lia";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { HiMiniXMark } from "react-icons/hi2";
import download from "../../assets/images/download.svg";
import { TbShoppingBag } from "react-icons/tb";
import { TbShoppingBagCheck } from "react-icons/tb";

const Basket = () => {
  //Roots
  const { basket, dark } = useContext(BookShopContext);
  const { history, setHistory } = useContext(BookShopContext);
  const { order, setOrder } = useContext(BookShopContext);
  //

  //Rest
  const naviHome = useNavigate();
  const [userName, setUserName] = useState("");
  const [userAddress, setUserAddress] = useState("");
  const [userPhone, setUserPhone] = useState("");
  const [modalOpen, setModalOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  //

  let total = basket.reduce((acc, el) => {
    let num = el.price > 300 ? (el.price / 100) * 80 * el.quantity : el.price;
    return acc + +num;
  }, 0);

  function modalWindow() {
    if (
      userName.trim() === "" ||
      userPhone.trim() === "" ||
      userAddress.trim() === "" 
    ) {
      toast.error("Заполните пустые поля!", {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
      return;
    } else if (      order.length === 0) {
      toast.error("Выберите товар для заказа!", {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
      return;
    } 
    else {
      setModalOpen(true);
    }
  }

  //telegram
  function submitForTelegram() {
    toast.success("Заказ отправлен в телеграмм!", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });

    let my_id = `-1002155692436`;
    let token = `7379926721:AAGdHk5RpkeAFr5TOZApxisySaGqta-Lws4`;
    let api_key = ` https://api.telegram.org/bot${token}/sendMessage`;

    let newProduct = {
      chat_id: my_id,
      parse_model: "html",
      text: `
        User Name:${userName}
        User Address:${userAddress}
        User Phone:${userPhone}
        date:${new Date()}
        `,
    };

    axios.post(api_key, newProduct);
    setModalOpen(false);
    setUserName("");
    setUserAddress("");
    setUserPhone("");
  }
  //telegram

  //History
  // let d = {new Date()}
  function createHistory() {
    let newProduct = {
      id: Date.now(),
      name: userName,
      address: userAddress,
      phone: userPhone,
      date: new Date().toLocaleDateString(),
    };
    let res = [...history, newProduct];
    setHistory(res);
    localStorage.setItem("history", JSON.stringify(res));
    let finOrder = order.filter((item)=> item.id !== item.id)
    setOrder(finOrder)
    localStorage.setItem('order', JSON.stringify(finOrder))
  }
  //History

  function downloadProduct() {
    setTimeout(() => {
      submitForTelegram();
      createHistory()
      setLoading(false);
    }, 2000);
  }

  return (
    // <div style={{}}>
      <div className="container  w-[90%] mb-[50px]">
        <div className="">
          {basket.length === 0 ? (
            <div className="w-[100%] h-[400px]">
              <LiaCartArrowDownSolid
                className="text-gray-400 text-[200px] flex items-center justify-center ml-[550px] mt-[100px] cursor-pointer"
                onClick={() => {
                  naviHome("/");
                }}
              />
              <h1 className="ml-[600px] text-gray-500 text-[20px]">
                Корзина Пусто!
              </h1>
            </div>
          ) : (
            <div className="flex items-center justify-between">
              <div className="">
                <div className="overflow-y-scroll  w-[700px] h-[500px] pl-[20px] pb-[20px] border-b-[3px] border-solid border-blue-950">
                  {basket.map((el) => (
                    <BasketCard el={el} />
                  ))}
                </div>
                <div className="flex items-center mt-[20px] gap-[10px]">
                  <h1 className="text-2xl font-bold text-blue-950">
                    Итоговая цена:{" "}
                  </h1>
                  <a className="text-2xl font-bold text-blue-950"> {Math.floor(total)}$</a>
                </div>
              </div>
              <div className="w-[40%] flex items-center justify-center flex-col">
                <h1 className="mb-[50px] text-2xl font-bold text-blue-950">
                  Контактные Данные
                </h1>
                <div class="relative z-0 mb-5 group ml-[70px]">
                  <input
                    type="text"
                    class="block py-2.5 px-0 w-[350px] text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    placeholder=""
                    onChange={(e) => {
                      setUserName(e.target.value);
                    }}
                    value={userName}
                  />
                  <label class="peer-focus:font-medium absolute text-[17px] text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                    ФИО*
                  </label>
                </div>
                <div class="relative z-0 mb-5 group ml-[70px]">
                  <input
                    type="text"
                    class="block py-2.5 px-0 w-[350px] text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    placeholder=""
                    onChange={(e) => {
                      setUserAddress(e.target.value);
                    }}
                    value={userAddress}
                  />
                  <label class="peer-focus:font-medium absolute text-[17px] text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                    Адрес*
                  </label>
                </div>
                <div class="relative z-0 mb-5 group ml-[70px]">
                  <input
                    type="number"
                    class="block py-2.5 px-0 w-[350px] text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    placeholder=""
                    onChange={(e) => {
                      setUserPhone(e.target.value);
                    }}
                    value={userPhone}
                  />
                  <label class="peer-focus:font-medium absolute text-[17px] text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                    Номер Телефона*
                  </label>
                </div>
                <div className="flex  mb-5 items-center justify-center gap-[10px]">
                  <div class="relative  z-0  group ml-[70px] w-[250px] h-[50px] border-2 border-solid border-gray-300 flex items-center justify-center">
                    <h1 className="text-[15px] font-[600]">
                      {order.length === 0
                        ? "Товар не Выбран ❗️"
                        : "Выбран Товар ✅"}
                    </h1>
                  </div>
                  <h1 className="w-[100px] h-[50px] border-2 border-solid flex items-center justify-center text-[20px] font-[600]  border-gray-300">
                    {order.length === 0 ? (
                      <h1 className="flex items-center gap-[5px]">
                        {order.length} {<TbShoppingBag />}
                      </h1>
                    ) : (
                      <h1 className="flex items-center gap-[5px]">
                        {order.length}
                        {<TbShoppingBagCheck />}
                      </h1>
                    )}
                  </h1>
                </div>
                <button
                  className="py-[10px] px-[50px] bg-blue-950 text-white text-[16px] rounded-[5px] "
                  onClick={() => {
                    modalWindow();
                  }}
                >
                  Отправить
                </button>
              </div>
              <ToastContainer
                position="bottom-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark"
              />

              <div
                className=""
                style={{
                  display: ` ${modalOpen ? "block" : "none"}`,
                  position: "fixed",
                  top: "0",
                  left: "0",
                  width: "100%",
                  height: "100%",
                  backgroundColor: "rgba(0,0,0,0.8)",
                  zIndex: "100",
                }}
              >
                <div className=" bg-white flex items-center flex-col gap-[30px] absolute top-[200px] right-[500px] w-[600px] h-[350px] p-[40px]">
                  {loading ? (
                    <div className="p-[40px]">
                      <center>
                        <img
                          src={download}
                          alt=""
                          className="w-[150px] h-[150px]"
                        />
                      </center>
                    </div>
                  ) : (
                    <>
                      <h1 className="text-[25px] font-bold">
                        Потвердите свои данные!
                      </h1>
                      <div className="flex items-start justify-start flex-col gap-[10px]">
                        <p className=" flex items-center">Имя: {userName}</p>
                        <p className=" flex items-center">
                          Адрес: {userAddress}
                        </p>
                        <p className=" flex items-center">
                          Телефон: {userPhone}
                        </p>
                      </div>
                      <button
                        className="py-[10px] px-[50px] bg-blue-950 text-white text-[16px] rounded-[5px]"
                        onClick={() => {
                          downloadProduct();
                          setLoading(true);
                        }}
                      >
                        Потвердить
                      </button>
                      <a
                        className="absolute top-[10px] right-[10px] text-3xl cursor-pointer"
                        onClick={() => {
                          setModalOpen(false);
                        }}
                      >
                        {<HiMiniXMark />}
                      </a>
                    </>
                  )}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    // </div>
  );
};

export default Basket;
