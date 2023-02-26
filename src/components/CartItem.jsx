import React from "react";
import { useSelector } from "react-redux";
import CartList from "./CartList";
function CartItem() {
  const cart = useSelector((state) => state.cart);
  const totalPrice = cart.reduce((p, c) => {
    return p + c.price;
  }, 0);
  console.log(cart);
  return (
    <div className="container grid grid-cols-2 grid-rows-1 mx-auto my-auto ">
      <div className=" border-r-2">
        {cart.map((product) => (
          <CartList key={product.id} product={product} />
        ))}
      </div>
      <div>
        <div className=" max-w-sm ml-7 mt-12 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-500 dark:border-gray-700  mb-10">
          <div className="px-5 pb-5">
            <a href="#">
              <h5 className="text-3xl font-semibold tracking-tight text-gray-900 dark:text-white">
                Your Billing
              </h5>
            </a>

            <div className="flex items-center justify-between mt-3">
              <div className="flex flex-col">
                <span className="text-2xl font-bold text-gray-900 mb-2 dark:text-white">
                  <h1>Total Item : {cart.length}</h1>
                </span>
                <div className="text-2xl font-bold text-gray-900 dark:text-white">
                  <h1>Totao Amount : {totalPrice}</h1>
                </div>
              </div>

              <a
                href="#"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Pay Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartItem;
