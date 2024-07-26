import React, { useContext, useState } from "react";
import { IoClose } from "react-icons/io5";
import { BookShopContext } from "../../context";
import { useNavigate } from "react-router-dom";
import { PiEyeSlashFill } from "react-icons/pi";
import { IoEyeSharp } from "react-icons/io5";

const AdminModal = () => {
  //Roots 
  const { setAdminPassword } = useContext(BookShopContext);
  const { eyesPassword, setEyesPassword } = useContext(BookShopContext);
  const { setAdminClose } = useContext(BookShopContext);
  const {dark} = useContext(BookShopContext);
  //

  //Rest
  const { inputPassword, setInputPassword } = useState('');
  const navigate = useNavigate();
  //

  const inputValue = () => {
    if (inputPassword === 123 || '123') {
      navigate("/admindetails");
      setAdminPassword(false);
      setAdminClose(true);
      setEyesPassword("");
      setInputPassword("");
    } else {
      alert("Incorrect password!");
    }
  };

  return (
    <div className="adminWindow bg-white w-[600px] h-[350px] absolute left-[400px] top-[200px]">
      <div className="modalWindowNext mt-[80px] flex items-center flex-col gap-[50px]">
        <input
          type={eyesPassword ? "text" : "password"}
          onChange={(e) => {
            setInputPassword(e.target.value);
          }}
          value={inputPassword}
          placeholder="Password..."
          className="w-[400px] h-[40px] px-[10px] border-blue-950 border-[3px] outline-none"
          style={{
            backgroundColor: dark? "#222222" : "#ffffff",
            color: dark? "#ffffff" : "#222222",
          }}
        />
        <a
          className="absolute top-[90px] right-[120px] text-[20px]"
          onClick={() => {
            setEyesPassword(!eyesPassword);
          }}
        >
          {!eyesPassword ? <IoEyeSharp /> : <PiEyeSlashFill />}
        </a>
        <button
          className="w-[250px] h-[40px] bg-blue-950 text-white rounded-[5px] tracking-[2px] text-[15px]"
          onClick={() => {
            inputValue();
          }}
        >
          Sign In
        </button>
        <h2
          className="text-[25px] absolute top-[10px] right-[10px]"
          onClick={() => {
            setAdminPassword(false);
            setInputPassword('')
          }}
        >
          <IoClose />
        </h2>
      </div>
    </div>
  );
};

export default AdminModal;
