import React, { useContext } from "react";
import { BookShopContext } from "../../context";
import { MdOutlineDateRange } from "react-icons/md";
import { SlArrowRight } from "react-icons/sl";
import { CiCircleRemove } from "react-icons/ci";

const HistoryCard = ({ el }) => {
  const { order, setOrder, history, setHistory } = useContext(BookShopContext);

  const delHistory = () => {
    let res = history.filter((item)=> item.id !== el.id)
    setHistory(res)
    localStorage.setItem('history', JSON.stringify(res))
  }

  return (
    <div className="">
      <div className="w-[300px] relative h-[200px] flex items-start gap-[5px] flex-col border-2 p-3 border-solid border-gray-200 rounded-[10px]">
        <a className="absolute top-[5px] text-[20px] hover:text-red-600 cursor-pointer right-[5px]"
        onClick={()=> {
            delHistory()
        }}
        >
          <CiCircleRemove />
        </a>
        <h1 className=" text-gray-900 font-[700] mb-[20px] border-gray-300 flex items-center ">
          Заказ Отправлен ✅
        </h1>
        <h5 className="text-gray-600">
          Имя: <span>{el.name}</span>
        </h5>
        <h5 className="text-gray-600">
          Номер Телефона: <span>{el.phone}</span>
        </h5>
        <h5 className="text-gray-600">
          Адрес: <span>{el.address}</span>
        </h5>
        <h1 className="absolute bottom-[5px] right-[20px] flex items-center gap-[5px]">
          <MdOutlineDateRange />
          {el.date}
        </h1>
      </div>
    </div>
  );
};

export default HistoryCard;
