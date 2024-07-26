import React, { useContext, useState } from "react";
import { BookShopContext } from "../../context";
import { useNavigate } from "react-router-dom";
//Icon
import { IoSearch } from "react-icons/io5";
import { IoMdCart } from "react-icons/io";
import { GrHistory } from "react-icons/gr";
import { IoMdHeart } from "react-icons/io";
import { FiSun } from "react-icons/fi";
import { FaRegMoon } from "react-icons/fa6";
import { FaRegUserCircle } from "react-icons/fa";
//

//Rest
import AdminModal from "../AdminModal";
import Search from "../Search";
//

const Header = () => {
  //Roots
  const { adminPassword, setAdminPassword } = useContext(BookShopContext);
  const { adminClose, setAdminClose } = useContext(BookShopContext);
  const { basket } = useContext(BookShopContext);
  const { favorite } = useContext(BookShopContext);
  const { dark, setDark } = useContext(BookShopContext);
  const { books, setBooks } = useContext(BookShopContext);

  //

  //Rest
  const [searchProduct, setSearchProduct] = useState("");
  const navigate = useNavigate();
  //


  function createSearchProduct() {
    if (books.map((el)=> el.name === searchProduct)) {
      navigate(`/search/${searchProduct}`);
    } 
  }

  return (
    <div className="bg-blue-950 py-[30px] z-[99] sticky top-0"
    style={{
      color: dark? 'white' : 'black',
    }}
    >
      <div className="container w-[90%] mx-auto">
        <div className="flex items-center justify-between">
          <h1
            className="text-3xl text-white cursor-pointer"
            style={{ fontFamily: "Mochiy Pop One" }}
            onClick={() => {
              navigate("/");
              setAdminClose(false);
            }}
          >
            BookShop
          </h1>
          <div className="flex items-center gap-[30px]">
            <div className="input relative">
              <input
                type="text"
                className="w-[350px] h-[40px] px-[10px] rounded-[5px] text-start  outline-none "
                placeholder="Search here"
                onChange={(e) => {
                  setSearchProduct(e.target.value);
                }}
                value={searchProduct}
              />
              <a
                className="text-gray-400 absolute cursor-pointer top-[5px] right-[10px] text-[25px]"
                onClick={() => {
                createSearchProduct()
                }}
              >
                <IoSearch />
              </a>
            </div>
            <div className="basket flex items-center flex-col relative">
              <a
                className="text-white text-[24px] cursor-pointer"
                onClick={() => {
                  navigate("/basket");
                }}
              >
                <IoMdCart />
              </a>
              <h1 className="text-[13px] text-white font-normal">Корзина</h1>
              <a
                className="py-[1px] px-[8px] absolute bottom-[35px] left-[40px] text-white text-[12px] bg-red-600  rounded-[50px] font-[600]"
                style={{
                  display: basket.length > 0 ? "block" : "none",
                }}
              >
                {basket.length}
              </a>
            </div>
            <div className="basket flex items-center flex-col relative">
              <a
                className="text-white text-[24px] cursor-pointer"
                onClick={() => {
                  navigate("/favorite");
                }}
              >
                <IoMdHeart />
              </a>
              <h1 className="text-[13px] text-white font-normal">Избранное</h1>
              <a
                className="py-[1px] px-[8px] absolute bottom-[35px] left-[40px] text-white text-[12px] bg-red-600  rounded-[50px] font-[600]"
                style={{
                  display: favorite.length > 0 ? "block" : "none",
                }}
              >
                {favorite.length}
              </a>
            </div>
            <div
              className="admin flex items-center flex-col cursor-pointer"
              style={{
                display: adminClose ? "none" : "block",
              }}
            >
              <a
                className="text-white text-[24px]"
                onClick={() => {
                  setAdminPassword(true);
                }}
              >
                <FaRegUserCircle />
              </a>

              <div
                className="adminPassword bg-gray-400 flex items-center flex-col absolute top-[200px] right-[500px] w-[600px] h-[300px]"
                style={{
                  display: ` ${adminPassword ? "block" : "none"}`,
                  position: "fixed",
                  top: "0",
                  left: "0",
                  width: "100%",
                  height: "100%",
                  backgroundColor: "rgba(0,0,0,0.8)",
                  zIndex: "100",
                }}
              >
                <AdminModal />
              </div>
              <h1 className="text-[13px] text-white font-normal">Админ</h1>
            </div>
            <div className="history flex items-center flex-col">
              <a className="text-white text-[24px] cursor-pointer"
              onClick={()=> {
                navigate('/history')
              }}
              >
                {<GrHistory />}
              </a>
              <h1 className="text-[13px] text-white font-normal">История</h1>
            </div>
            <div className="flex items-center flex-col">
              <a
                className="text-white text-[25px] cursor-pointer"
                onClick={() => {
                  setDark(!dark);
                }}
              >
                {dark ? <FaRegMoon /> : <FiSun />}
              </a>
              <h1 className="text-white text-[13px] cursor-pointer ">
                {dark ? "Темный" : "Светлый"}
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
