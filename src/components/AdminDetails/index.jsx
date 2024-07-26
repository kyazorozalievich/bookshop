import React, { useContext, useState } from "react";
import { BookShopContext } from "../../context";
import { useNavigate } from "react-router-dom";
//Icon
import { GoArrowLeft } from "react-icons/go";
//

const AdminDeatils = () => {
  //Roots
  const { setAdminClose } = useContext(BookShopContext);
  const { dark } = useContext(BookShopContext);
  const { books, setBooks } = useContext(BookShopContext);
  const { detective, setDetective } = useContext(BookShopContext);
  const { fantastic, setFantastic } = useContext(BookShopContext);
  const { adventure, setAdventure } = useContext(BookShopContext);
  const { scientific, setScientific } = useContext(BookShopContext);
  // const {history, setHistory} = useContext(BookShopContext)
  //

  //Admin
  const [inputName, setInputName] = useState("");
  const [inputPrice, setInputPrice] = useState("");
  const [inputCategory, setInputCategory] = useState("");
  const [inputDes, setInputDes] = useState("");
  const [inputUrl, setInputUrl] = useState("");
  const navigateHome = useNavigate();
  //

  const onChanges = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => setInputUrl(reader.result);
    reader.readAsDataURL(file);
  };

  function createBook() {
    let newProduct = {
      id: books.length ? books[books.length - 1].id + 1 : 1,
      name: inputName,
      price: inputPrice,
      category: inputCategory,
      description: inputDes,
      imageUrl: inputUrl,
      quantity: 1,
    };

    if (inputCategory === "Detective") {
      let res = [...detective, newProduct];
      setDetective(res);
      localStorage.setItem("detective", JSON.stringify(detective));
      let result = [...books, newProduct];
      setBooks(result);
      localStorage.setItem("books", JSON.stringify(result));
    } else if (inputCategory === "Fantastic") {
      let res = [...fantastic, newProduct];
      setFantastic(res);
      localStorage.setItem("fantastic", JSON.stringify(fantastic));
      let result = [...books, newProduct];
      setBooks(result);
      localStorage.setItem("books", JSON.stringify(result));
    } else if (inputCategory === "Adventure") {
      let res = [...adventure, newProduct];
      setAdventure(res);
      localStorage.setItem("adventure", JSON.stringify(adventure));
      let result = [...books, newProduct];
      setBooks(result);
      localStorage.setItem("books", JSON.stringify(result));
    } else if (inputCategory === "Scientific") {
      let res = [...scientific, newProduct];
      setScientific(res);
      localStorage.setItem("scientific", JSON.stringify(scientific));
      let result = [...books, newProduct];
      setBooks(result);
      localStorage.setItem("books", JSON.stringify(result));
    }

    setInputCategory("");
    setInputName("");
    setInputPrice("");
    setInputDes("");
  }

  

  return (
    <div
      className="adminDetails w-[100%] h-[625px] bg-slate-200 relative"
      style={{
        backgroundColor: dark
          ? "rgb(28, 30, 32)"
          : "rgba(133, 194, 244, 0.419)",
        color: dark ? "black" : "black",
      }}
    >
      <a
        className="absolute top-[50px] left-[100px] text-4xl cursor-pointer w-[60px] h-[60px] rounded-[50px] bg-slate-300 flex items-center justify-center"
        onClick={() => {
          setAdminClose(false);
          navigateHome("/");
        }}
      >
        <GoArrowLeft />
      </a>
      <div className="container w-[90%]">
        <div className="adminDetailsNext bg-white w-[800px] h-[500px] absolute top-[100px] left-[400px]  px-[30px] flex items-center justify-center gap-[50px]">
          <label
            for="dropzone-file"
            class="flex flex-col items-center justify-center w-[350px] h-[350px] border-2 border-gray-950 rounded-lg cursor-pointer bg-gray-50 mt-[-50px]"
          >
            <div class="flex flex-col items-center justify-center pt-5 pb-6">
              <svg
                class="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 16"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                />
              </svg>
              <p class="mb-2 text-sm text-gray-500 dark:text-gray-400">
                <span class="font-semibold">Click to upload</span> or drag and
                drop
              </p>
              <p class="text-xs text-gray-500 dark:text-gray-400">
                SVG, PNG, JPG or GIF (MAX. 800x400px)
              </p>
            </div>
            <input
              id="dropzone-file"
              type="file"
              class="hidden"
              onChange={onChanges}
            />
          </label>

          <div className="inputText flex items-center flex-col gap-[10px] mb-[40px]">
            <input
              type="text"
              placeholder="Product Name"
              className="border-2 border-blue-950 w-[290px] py-[7px]  pl-[10px] rounded-[5px]"
              onChange={(e) => setInputName(e.target.value)}
              value={inputName}
            />
            <div className="inputPrice flex items-center gap-[20px]">
              <select
                className="border-2 border-blue-950 w-[160px] py-[7px] pl-[10px] rounded-[5px]"
                onChange={(e) => setInputCategory(e.target.value)}
                value={inputCategory}
              >
                <option value="">Category</option>
                <option value="Detective">Детектив</option>
                <option value="Fantastic">Фантастика</option>
                <option value="Adventure">Приключение</option>
                <option value="Scientific">Научная</option>
              </select>
              <input
                type="Number"
                placeholder="Price"
                className="border-2 border-blue-950 w-[105px] py-[7px] pl-[10px] rounded-[5px]"
                onChange={(e) => setInputPrice(e.target.value)}
                value={inputPrice}
              />
            </div>
            <textarea
              className="border-2 border-blue-950 py-[70px] px-[60px] rounded-[5px]"
              id=""
              placeholder="Product description..."
              onChange={(e) => setInputDes(e.target.value)}
              value={inputDes}
            ></textarea>
            <button
              className="border-[3px] font-bold mt-[20px] border-blue-950 py-[7px] px-[125px] rounded-[5px]"
              onClick={() => {
                createBook();
                createHistory();
              }}
            >
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDeatils;
