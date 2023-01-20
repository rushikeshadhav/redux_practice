import React from "react";
import { useDispatch } from "react-redux";

function Card({ name, img }) {
  const dispatch = useDispatch();
  const sendData = (e) =>{

  }
  return (
    <div>
      <h2 className="text-3xl">{name}</h2>
      <img className="w-[300px]" src={img} />
      <button
        onClick={sendData()}
        className="h-[60px] bg-slate-300 rounded-xl w-full"
      >
        Add to Cart
      </button>
    </div>
  );
}

export default Card;
