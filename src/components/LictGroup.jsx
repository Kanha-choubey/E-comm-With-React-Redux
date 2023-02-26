import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fatchProducts } from "../features/authen/listSlice";
import ListItem from "./ListItem";

function LictGroup() {
  const dispatch = useDispatch();
  const { products, isError, isLoading, isSuccess } = useSelector(
    (state) => state.list
  );

  useEffect(() => {
    dispatch(fatchProducts());
  }, []);

  if (isLoading) {
    <h1>Loading...</h1>;
  }
  if (isError) {
    return <h1>somthing went wrong...</h1>;
  }
  return (
    <>
      <div className="container grid grid-cols-3 lg:gap-3   ">
        {products.map((product) => (
          <ListItem key={product.id} product={product} />
        ))}

        <hr />
      </div>
    </>
  );
}

export default LictGroup;
