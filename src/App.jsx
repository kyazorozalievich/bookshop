import React, { useContext } from "react";
import Home from "./components/Home";
import Search from "./components/Search";
import Basket from "./components/Basket";
import Header from "./components/Header";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import AdminDeatils from "./components/AdminDetails";
import DetailsProduct from "./components/DetailsProduct";
import Error from "./components/Error";
import Favorite from "./components/Favorite";
import Detective from "./components/Detective";
import Scientific from "./components/Scientific";
import Fantastic from "./components/Fantastic";
import Adventure from "./components/Adventure";
import { BookShopContext } from "./context";
import History from "./components/History";
import Footer from "./components/Footer";

const App = () => {
  const {dark} = useContext(BookShopContext)
  let routers = [
    {
      id: 1,
      link: "/",
      element: <Home />,
    },
    {
      id: 2,
      link: "/search/:name",
      element: <Search />,
    },
    {
      id: 3,
      link: "/basket",
      element: <Basket />,
    },
    {
      id: 4,
      link: "/admindetails",
      element: <AdminDeatils />,
    },
    {
      id: 5,
      link: "/detailsProduct/:id",
      element: <DetailsProduct/>,
    },
    {
      id: 6,
      link: `*`,
      element: <Error/>,
    },
    {
      id: 7,
      link: `/favorite`,
      element: <Favorite/>,
    },
    {
      id: 8,
      link: "/detective",
      element: <Detective/>,
    },
    {
      id: 9,
      link: "/fantastic",
      element: <Fantastic/>,
    },
    {
      id: 10,
      link: "/adventure",
      element: <Adventure/>,
    },
    {
      id: 11,
      link: "/scientific",
      element: <Scientific/>
    },
    {
      id: 12,
      link: '/history',
      element: <History/>,
    }
  ];
  return (
    <div className="" style={{
      backgroundColor: dark? "black" : "white",
      color: dark? "white" : "black"  ,
      minHeight: '100vh',
    }}>
      <Header />
      <Routes>
        {routers.map((el) => (
          <Route path={el.link} element={el.element} key={el.id} />
        ))}
      </Routes>
      <Footer/>
    </div>
  );
};

export default App;
