import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteItem } from "../redux/reducer";

function YourCart() {
  const getData = useSelector((state) => state.counter.cart);
  console.log(getData);

  const [price, setPrice] = React.useState(0);
  console.log(price);
  const total = () => {
    let sum = 0;
    getData.map((item) => {
      return (sum = sum + item.price);
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

  return (
    <div>
      {getData.map((item) => {
        return (
          <div className="m-3">
            <div className="flex text-2xl">
              <div>
                <h2>{item.rname}</h2>
                <p>{item.price}</p>
              </div>
              <button onClick={() => DLT(item.id)} className="bg-slate-400 text-white p-1 rounded ml-5">Delete</button>
            </div>
          </div>
        );
      })}
      <h2 className="text-3xl">Total: ₹{price}</h2>
    </div>
  );
}

export default YourCart;
