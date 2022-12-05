import { Dropdown } from "flowbite-react";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import CCardProducts from "../../../components/CCardProducts";
import CLoading from "../../../components/CLoading";
import { fetchAllProducts } from "../../../redux/controller/products.slice";

function Products() {
  const { allProducts, loading } = useSelector((state) => state.products);
  const dispatch = useDispatch();
  const [category, setCategory] = useState("All Categories");
  const navigate = useNavigate();
  const location = useLocation();

  // console.log(location);

  useEffect(() => {
    dispatch(fetchAllProducts(location.search));
  }, [location]);

  const objDropdown = [
    {
      title: "All Categories",
      queryParams: "all",
    },
    {
      title: "Electronics",
      queryParams: "electronics",
    },
    {
      title: "Jewelery",
      queryParams: "jewelery",
    },
    {
      title: "Men's Clothing",
      queryParams: "men's%20clothing",
    },
    {
      title: "Women's clothing",
      queryParams: "women's%20clothing",
    },
  ];

  return (
    <div>
      <div className="container mx-auto pt-10">
        <div className="pb-4">
          <span className="font-medium leading-tight text-4xl mt-0 mb-2 text-blue-600">
            View Products
          </span>
          <Dropdown onChange={(e) => console.log(e)} label={category}>
            <Dropdown.Header>View Products</Dropdown.Header>
            {objDropdown.map((e, i) => {
              return (
                <Dropdown.Item
                  key={i}
                  onClick={() => {
                    setCategory(e.title);
                    navigate(`/products?category=${e.queryParams}`);
                  }}
                >
                  {e.title}
                </Dropdown.Item>
              );
            })}
          </Dropdown>
        </div>

        <div className="-mx-4 flex flex-wrap">
          {!loading ? (
            allProducts?.map((e) => {
              return (
                <div
                  key={e.id}
                  className="w-full px-4 ms:w-1/2 md:w-1/3 xl:w-1/5 relative mb-8"
                >
                  <CCardProducts product={e} />
                </div>
              );
            })
          ) : (
            <CLoading />
          )}
        </div>
      </div>
    </div>
  );
}

export default React.memo(Products);
