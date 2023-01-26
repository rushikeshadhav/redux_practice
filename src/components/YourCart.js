import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteItem, addToCart, decrement } from "../redux/reducer";

function YourCart() {
  const getData = useSelector((state) => state.counter.cart);
  // console.log(getData);

  const [price, setPrice] = React.useState(0);
  const total = () => {
    let sum = 0;
    getData.map((item) => {
      return (
        sum = sum + item.qnty * item.price
      );
    });
    setPrice(sum);
  };

  React.useEffect(() => {
    total();
  }, [total]);

  const dispatch = useDispatch();

  const DLT = (id) => {
    dispatch(deleteItem(id))
  }
  const ADD = (item) => {
    dispatch(addToCart(item))
  }

  const DEC = (item) => {
    dispatch(decrement(item))
  }

  return (
    <div>
      {getData.map((item) => {
        return (
          <div className="m-2" key={item.id}>
            <div className="flex text-2xl">
              <div>
                <h2>{item.rname}</h2>
                <p>₹ {item.price}</p>
                <p>Quantity: {item.qnty}</p>
              </div>
              <button className="bg-slate-500 text-white px-4 mx-4 my-6 rounded-xl" onClick={() => DEC(item)}>-</button>
              <button className="bg-slate-500 text-white px-4 mx-4 my-6 rounded-xl" onClick={() => ADD(item)}>+</button>
              <button onClick={() => DLT(item.id)} className="bg-slate-400 text-white p-1 my-5 rounded ml-5">Delete</button>
            </div>
          </div>
        );
      })}
      <h2 className="text-3xl">Total: ₹{price}</h2>
    </div>
  );
}

export default YourCart;
