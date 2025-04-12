import React, { useContext, useEffect } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "./Title";
import { useState } from "react";
import ProductItem from "./ProductItem";

const LatestCollection = () => {
  const { products } = useContext(ShopContext);
  const [latestProducts, setLatestProducts] = useState([]);
  useEffect(() => {
    setLatestProducts(products.slice(0, 10));
  }, [products]);

  return (
    <div className="my-10">
      <div className="text-center py-8 text-3xl">
        <Title text1={"LATEST"} text2={"COLLECTIONS"} />
        <p className="w-3/4 m-auto text-xs sm:test-sm md:text-base text-gray-600 ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, cum
          debitis dignissimos, enim asperiores harum accusamus ullam ipsa,
          repellendus libero vitae nesciunt. Quos, libero! Id nihil in maxime,
          dicta assumenda provident ullam delectus aut!
        </p>
      </div>
      {/* rendering products*/}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-y-6">
        {latestProducts.map((item, index) => (
          <ProductItem  key={index}
          id={item._id}
          image={item.image}
          name={item.name}
          price={item.price}/>
        ))}
      </div>
    </div>
  );
};

export default LatestCollection;
