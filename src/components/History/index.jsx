import React, { useContext, useState } from "react";
import { BookShopContext } from "../../context";
import HistoryCard from "../HisoryCard";
import { GrValidate } from "react-icons/gr";
import { BsClockHistory } from "react-icons/bs";
import { CiCircleRemove } from "react-icons/ci";
import historyImg from '../../assets/images/history.webp'

const History = () => {
  const { history, setHistory,  } = useContext(BookShopContext);
  const [historyModal, setHistoryModal] = useState(false);

  const delAllHistory = () => {
    let res = history.filter((item) => item.id !== item.id);
    setHistory(res);
    localStorage.setItem("history", JSON.stringify(res));
  };

  return (
    <div className="mt-[20px]">
      <div className="container w-[90%] relative">
        <div className="flex items-center justify-between">
          <h1 className="text-[40px] flex items-center gap-[5px] font-bold">
            История Отправок <GrValidate />
          </h1>
          <h1
            className="flex items-center gap-[5px] text-[20px] cursor-pointer font-[600]"
            onClick={() => {
              setHistoryModal(true);
            }}
          >
            Очистить историю <BsClockHistory />
          </h1>
        </div>
        <div className=" history flex mt-[40px] items-center flex-wrap w-[100%] gap-[20px] overflow-scroll h-[500px]">
            {
                history.length === 0 ? (
                    <div className="flex item-center ml-[500px] gap-[10px]  flex-col">
                        <img src={historyImg} alt="" className="w-[50%] ml-[80px]"/>
                        <h1 className="text-[30px] text-cyan-700 font-[600]">История oтправок товаров пуст</h1>
                    </div>
                ) : (

                    history.map((el) => (
                      <HistoryCard el={el} />
                    ))
                )
            }
        </div>
        <div
          className=""
          style={{
            display: historyModal ? "block" : "none",
            position: "fixed",
            top: "0",
            left: "0",
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0,0,0,0.8)",
            zIndex: "100",
          }}
        >
          <div className="absolute top-[200px] left-[500px] w-[500px] gap-[20px] flex items-center flex-col pt-[50px] h-[200px] bg-white">
            <a
              className="text-[25px] text-red-600 absolute top-[10px] right-[10px] cursor-pointer"
              onClick={() => {
                setHistoryModal(false);
              }}
            >
              {" "}
              <CiCircleRemove />
            </a>
            <h1 className="text-[20px] font-[700] flex text-center">
              Вы точно хотите очистить историю <br /> отправок?
            </h1>
            <button
              className="border-2 border-solid border-black rounded-[5px] font-[500] hover:font-[800] hover:bg-blue-900 hover:text-white px-[30px] py-[5px]"
              onClick={() => {
                delAllHistory();
                setHistoryModal(false)
              }}
            >
              Потвердить
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default History;
