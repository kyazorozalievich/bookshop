import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { BookShopContext } from "../../context";
import ProductCard from "../ProductCard";

const Search = () => {
  const { name } = useParams();
  const { books } = useContext(BookShopContext);
  const { search, setSearch } = useContext(BookShopContext);

  function addToSearch() {
    const filSearch = books.filter((item) => item.name === name);
    setSearch(filSearch);
    localStorage.setItem("search", JSON.stringify(filSearch));
  }

  useEffect(() => {
    addToSearch();
  }, [books]);

  return (
    <div>
      <div className="container  w-[90%]">
        {search.map((el, id) => (
          <ProductCard el={el}  key={id}/>
        ))}
      </div>
    </div>
  );
};

export default Search;
