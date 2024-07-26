import React, { useContext, useEffect, useState } from "react";
import { BookShopContext } from "../../context";
import DetailsCard from "../DetailsCard";
import { useParams } from "react-router-dom";

const DetilsProduct = () => {
  //Roots
  const { books } = useContext(BookShopContext);
  const { detective, setDetective } = useContext(BookShopContext);
  const { fantastic, setFantastic } = useContext(BookShopContext);
  const { adventure, setAdventure } = useContext(BookShopContext);
  const { scientific, setScientific } = useContext(BookShopContext);
  // const {detail, setDetail} = useContext(BookShopContext)
  //

  //Rest
  const [params, setparams] = useState("");
  const { id } = useParams();
  //

  
  function ParamId() {
    const newId = books.find((el) => el.id == id);
    const newDet = detective.find((el) => el.id == id);
    const newFant = fantastic.find((el) => el.id == id);
    const newAdv = adventure.find((el) => el.id == id);
    const newSci = scientific.find((el) => el.id == id);

    if (newId) {
      setparams(newId);
    } else if (newDet) {
      setDetective(newDet);
    } else if (newFant) {
      setFantastic(newFant);
    } else if (newAdv) {
      setAdventure(newAdv);
    } else if (newSci) {
      setScientific(newSci);
    } else {
      console.log("Not found");
    }
  }

  useEffect(() => {
    ParamId();
  });

  return (
    <div className="h-[575px]">
      <div className="container">
        <div className="">{<DetailsCard el={params} />}</div>
      </div>
    </div>
  );
};

export default DetilsProduct;
