import React, { useContext, useEffect } from "react";
//Icon
import { TiDelete } from "react-icons/ti";
import { BsFillCartFill } from "react-icons/bs";
import { BsFillCartCheckFill } from "react-icons/bs";
import { IoMdHeart } from "react-icons/io";
//

//Images
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";
import sale from "../../assets/images/sale1.png";
//

//Rest
import { BookShopContext } from "../../context";
import { useNavigate } from "react-router-dom";
//

const ProductCard = ({ el }) => {
  //Roots
  const { basket, setBasket } = useContext(BookShopContext);
  const { books, setBooks } = useContext(BookShopContext);
  const { favorite, setFavorite } = useContext(BookShopContext);
  const { detective, setDetective } = useContext(BookShopContext);
  const { fantastic, setFantastic } = useContext(BookShopContext);
  const { adventure, setAdventure } = useContext(BookShopContext);
  const { scientific, setScientific } = useContext(BookShopContext);
  const { dark } = useContext(BookShopContext);
  //

  //Rest
  const navigate = useNavigate();
  //

  function addToBasket() {
    let findBasket = basket.find((item) => item.id === el.id);
    if (findBasket) {
      let deleteBasket = basket.filter((item) => item.id !== el.id);
      setBasket(deleteBasket);
      localStorage.setItem("basket", JSON.stringify(deleteBasket));
    } else {
      let result = [...basket, el];
      setBasket(result);
      localStorage.setItem("basket", JSON.stringify(result));
    }
  }

  function addToFavorite() {
    let findFavorite = favorite.find((item) => item.id === el.id);
    if (findFavorite) {
      let deleteFavorite = favorite.filter((item) => item.id !== el.id);
      setFavorite(deleteFavorite);
      localStorage.setItem("favorite", JSON.stringify(deleteFavorite));
    } else {
      let result = [...favorite, el];
      setFavorite(result);
      localStorage.setItem("favorite", JSON.stringify(result));
    }
  }

  let basketIcon = basket.some((item) => item.id === el.id);
  let favoriteIcon = favorite.some((item) => item.id === el.id);

  function deleteProduct() {
    let result = books.filter((item) => item.id !== el.id);
    let resDet = detective.filter((item) => item.id !== el.id);
    let resFant = fantastic.filter((item) => item.id !== el.id);
    let resAdv = adventure.filter((item) => item.id !== el.id);
    let resSci = scientific.filter((item) => item.id !== el.id);
    if (result) {
      setBooks(result);
      localStorage.setItem("books", JSON.stringify(result));
    }
    if (resDet) {
      setDetective(resDet);
      localStorage.setItem("detective", JSON.stringify(resDet));
    }
    if (resFant) {
      setFantastic(resFant);
      localStorage.setItem("fantastic", JSON.stringify(resFant));
    }
    if (resAdv) {
      setAdventure(resAdv);
      localStorage.setItem("adventure", JSON.stringify(resAdv));
    }
    if (resSci) {
      setScientific(resSci);
      localStorage.setItem("scientific", JSON.stringify(resSci));
    }
  }
  function deleteBasket() {
    let del = basket.filter((item) => item.id !== el.id);
    setBasket(del);
    localStorage.setItem("basket", JSON.stringify(del));
  }
  function deleteFavorite() {
    let del = favorite.filter((item) => item.id !== el.id);
    setFavorite(del);
    localStorage.setItem("favorite", JSON.stringify(del));
  }



  return (
    <div className="">
      <div className=" py-5">
        <div className="relative w-[249px] h-[460px]  border-2 border-solid border-gray-400 rounded-[7px]">
          {/* <div className="w-[100%] h-[350px]  bg-white"> */}
          <Zoom>
              <img
                className=" w-[100%] h-[350px]"
                src={el.imageUrl}
                alt=""
              />
          </Zoom>
          {/* </div> */}
          <div className=" p-2 flex items-center justify-between">
            {el.price > 300 ? (
              <img
                src={sale}
                alt=""
                className="absolute top-[-10px] left-[-20px] w-[100px]"
              />
            ) : null}
            <div className="">
              <strike>
                <h1 className="font-bold">
                  {el.price > 300 ? <h1>{el.price}$</h1> : null}
                </h1>
              </strike>
              <h1 className=" text-[23px] font-bold">
                {el.price > "300" ? Math.floor( (el.price * 80) / 100 ): el.price} $
              </h1>
            </div>
            <h1 className="text-[17px] absolute bottom-[10px] right-5 text-red-500">
              {el.price > 300 ? `(20%)` : null}
            </h1>
            <div className="flex gap-[20px] absolute bottom-[80px] right-[10px]">
              <a
                className=" text-[20px] cursor-pointer"
                onClick={() => {
                  addToFavorite();
                }}
              >
                {favoriteIcon ? (
                  <IoMdHeart style={{ color: "red" }} />
                ) : (
                  <IoMdHeart />
                )}
              </a>
              <a
                className=" text-[20px] cursor-pointer"
                onClick={() => {
                  addToBasket();
                }}
              >
                {basketIcon ? (
                  <BsFillCartCheckFill style={{ color: "green" }} />
                ) : (
                  <BsFillCartFill
                    style={{
                      color: dark ? "white" : "black",
                    }}
                  />
                )}
              </a>
            </div>
          </div>
          <center>
            <h2
              className="p-1 text-[18px] absolute bottom-[5px] left-[5px] cursor-pointer font-[500]"
              onClick={() => {
                navigate(`/detailsProduct/${el.id}`);
              }}
            >
              {el.name}
            </h2>
          </center>
          <a
            className="absolute text-red-500  top-[2px] right-[2px] text-2xl cursor-pointer"
            onClick={() => {
              deleteProduct();
              deleteBasket();
              deleteFavorite();
            }}
          >
            {<TiDelete />}
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
