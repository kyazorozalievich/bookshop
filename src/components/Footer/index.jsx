import React from "react";
import { FaTelegram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import insta from "../../assets/images/insta.webp";
import wats from "../../assets/images/wats.webp";

const Footer = () => {
  function telegram() {
    window.open(`https://web.telegram.org/a/#-1001167188175`);
  }
  function facebook() {
    window.open(`https://www.facebook.com/share/CuT36nhqauQqj8ta/?mibextid=LQQJ4d`);
  }
  function instagram() {
    window.open(`https://www.instagram.com/book.by.moony/?igsh=MWk1endmNDNzMHltOQ%3D%3D`);
  }
  function watsapp() {
    window.open(`https://web.whatsapp.com/#`);
  }
  return (
    <div className="bg-blue-950  h-[200px] text-white pt-[30px] text-[15px] ">
      <div className="container w-[90%] ">
        <div className="flex items-start justify-between font-[400]">
          <h1
            className="text-[25px] mt-[50px]"
            style={{ fontFamily: "Mochiy Pop One" }}
          >
            BookShop
          </h1>
          <div className="flex items-start gap-[20px] flex-col ">
            <h1 className=" ">Способ оплаты</h1>
            <h1 className=" ">Условия доставки</h1>
            <h1 className=" ">Правила покупки</h1>
          </div>
          <div className="flex items-start flex-col gap-[20px] mb-[50px]">
            <h1 className=" ">FAQ</h1>
            <h1 className=" ">О нас</h1>
          </div>
          <div className="flex items-start flex-col gap-[5px]  ">
            <h1 className=" ">Связаться с нами:</h1>
            <h1 className=" ">+996 995 255 592</h1>
            <h1 className=" ">+996 995 255 592</h1>
            <h1 className=" ">+996 995 255 592</h1>
            <div className="flex items-center gap-[10px]">
              <a className="text-[18px] text-blue-500 cursor-pointer"
              onClick={()=> {
                telegram()
              }}
              >
                <FaTelegram />
              </a>
              <a className="text-[18px] text-blue-700 cursor-pointer"
              onClick={()=> {
                facebook()
              }}
              >
                <FaFacebook />
              </a>
              <img src={insta} alt="" className="w-[30px] cursor-pointer" 
              onClick={()=> {
                instagram()
              }}
              />
              <img src={wats} alt="" className="w-[20px] cursor-pointer" 
              onClick={()=> {
                watsapp()
              }}
              />
            </div>
          </div>
          <div className="">
            <h1 className="text-[20px] font-[600]">Адрес</h1>
            <p className="w-[300px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius in
              dolor viverra feugiat neque, sed in. Mattis volutpat malesuada
              velit parturient aliquam, est. Mauris vitae velit laoreet faucibus
              nec amet velit.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
