import { Dropdown } from "flowbite-react";
import React from "react";
import CCardProducts from "../../../components/CCardProducts";
import CLoading from "../../../components/CLoading";
import useApi from "../../../hooks/useAPI";

function Products() {
  const { loading, data } = useApi("products");
 
  return (
    <div>
      <div className="container mx-auto pt-10">
        <div className="pb-4">
          <span class="font-medium leading-tight text-4xl mt-0 mb-2 text-blue-600">
            View Products
          </span>
          <Dropdown label="Dropdown">
            <Dropdown.Header>
            View Products
            </Dropdown.Header>
            <Dropdown.Item>All Categories</Dropdown.Item>
            <Dropdown.Item>Electronics</Dropdown.Item>
            <Dropdown.Item>Jewelery</Dropdown.Item>
            <Dropdown.Item>Men's Clothing</Dropdown.Item>
            <Dropdown.Item>Women's clothing</Dropdown.Item>
          </Dropdown>
        </div>
        <div className="-mx-4 flex flex-wrap justify-center">
          {!loading ? (
            data?.map((e) => {
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
