import React from "react";
import Cardsdata from "./Data";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../redux/reducer";
import YourCart from "./YourCart";

function Cards() {
  const getData = useSelector((state) => state.counter.cart);
  console.log(getData);

  const dispatch = useDispatch();

  const sendData = (e) => {
    console.log(e);
    dispatch(addToCart(e));
  };

  return (
    <div className="flex mr-20 ml-20 mt-10 justify-around">
      <div>
        {Cardsdata.map((item) => {
          return (
            <div>
              <h2 className="text-3xl">{item.rname}</h2>
              <img className="w-[300px]" src={item.imgdata} />
              <button
                onClick={() => sendData(item)}
                className="h-[60px] bg-slate-300 rounded-xl w-full"
              >
                Add to Cart
              </button>
            </div>
          );
        })}
      </div>
      <YourCart />
    </div>
  );
}

export default Cards;
