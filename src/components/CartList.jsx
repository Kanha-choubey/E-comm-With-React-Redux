import React from "react";
import { useDispatch } from "react-redux";
import { remove } from "../features/authen/cartSlice";

function CartList({ product }) {
  const { image, price, title, id } = product;
  const dispatch = useDispatch();
  const handleDelete = () => {
    dispatch(remove(id));
    console.log(id);
  };

  return (
    <div>
      <div className="w-full max-w-sm ml-7 mt-12 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-500 dark:border-gray-700  mb-10">
        <a href="#">
          <img
            className="p-8 rounded-t-lg"
            src={image}
            alt="product image"
            style={{ width: "60%", height: "60%" }}
          />
        </a>
        <div className="px-5 pb-5">
          <a href="#">
            <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
              {title}
            </h5>
          </a>

          <div className="flex items-center justify-between">
            <span className="text-3xl font-bold text-gray-900 dark:text-white">
              ${price}
            </span>
            <a
              onClick={handleDelete}
              href="#"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Remove
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartList;
