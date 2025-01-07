import React, { useEffect, useState } from "react";
import { BookShopContext } from ".";

const RootContext = ({ children }) => {
  //Header part
  const [adminClose, setAdminClose] = useState(false);
  const [basket, setBasket] = useState([]);
  const [favorite, setFavorite] = useState([]);
  const [dark, setDark] = useState(false);
  const [search, setSearch] = useState([]);
  const [books, setBooks] = useState([]);
  const [history, setHistory] = useState([]);
  const getBasket = () => {
    let basket = JSON.parse(localStorage.getItem("basket")) || [];
    setBasket(basket);
  };
  const getFavorite = () => {
    let favorite = JSON.parse(localStorage.getItem("favorite")) || []; 
    setFavorite(favorite);
  };
  const getHistory = () => {
    let result = JSON.parse(localStorage.getItem("history")) || [];
    setHistory(result);
  };
  //

  //Home part
  const [detective, setDetective] = useState([]);
  const [fantastic, setFantastic] = useState([]);
  const [adventure, setAdventure] = useState([]);
  const [scientific, setScientific] = useState([]);
  const getDetective = () => {
    let res = JSON.parse(localStorage.getItem("detective")) || [];
    setDetective(res);
  };
  const getFantastic = () => {
    let res = JSON.parse(localStorage.getItem("fantastic")) || [];
    setFantastic(res);
  };
  const getAdventure = () => {
    let res = JSON.parse(localStorage.getItem("adventure")) || [];
    setAdventure(res);
  };
  const getScientific = () => {
    let res = JSON.parse(localStorage.getItem("scientific")) || [];
    setScientific(res);
  };
  const getSearch = () => {
    let result = JSON.parse(localStorage.getItem("search")) || [];
    setSearch(result);
  };

  //Admin part
  const [adminPassword, setAdminPassword] = useState(false);
  const [eyesPassword, setEyesPassword] = useState(false);
  const [details, setDetail] = useState([]);
  const [order, setOrder] = useState([]);
  const [rest, setRest] = useState([]);
  const getProduct = () => {
    let result = JSON.parse(localStorage.getItem("books")) || [];
    setBooks(result);
  };
  const getOrder = () => {
    let result = JSON.parse(localStorage.getItem("order")) || [];
    setOrder(result);
  };
  //

  useEffect(() => {
    getProduct(),
      getBasket(),
      getFavorite(),
      getDetective(),
      getFantastic(),
      getAdventure(),
      getScientific(),
      getSearch(),
      getOrder(),
      getHistory();
  }, []);

  return (
    <BookShopContext.Provider
      value={{
        //Header
        adminClose,
        setAdminClose,
        books,
        setBooks,
        basket,
        setBasket,
        favorite,
        setFavorite,
        dark,
        setDark,
        search,
        setSearch,
        history,
        setHistory,
        //

        //Home part
        detective,
        setDetective,
        fantastic,
        setFantastic,
        adventure,
        setAdventure,
        scientific,
        setScientific,
        //

        //Admin Part
        adminPassword,
        setAdminPassword,
        eyesPassword,
        setEyesPassword,
        details,
        setDetail,
        order,
        setOrder,
        rest,
        setRest,
        //
      }}
    >
      {children}
    </BookShopContext.Provider>
  );
};

export default RootContext;
