import { Card, Rating } from "flowbite-react";
import React from "react";
// import ReactStars from "react-rating-stars-component";

function CCardProducts({ product }) {
  return (
    <div className="max-w-sm">
      <Card
        className="__style-img"
        imgAlt={product.title}
        imgSrc={product.image}
      >
        {/* <a href="#"> */}
        <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white line-clamp-1">
          {product.title}
        </h5>
        {/* </a> */}
        <div className="mt-2.5 mb-5 flex items-center">
          <Rating>
            <Rating.Star />
            <p className="ml-2 text-sm font-bold text-gray-900 dark:text-white">
              {product.rating.rate}
            </p>
            <span className="mx-1.5 h-1 w-1 rounded-full bg-gray-500 dark:bg-gray-400" />
            <span className="text-sm font-medium text-gray-900 underline hover:no-underline dark:text-white">
              {product.rating.count} reviews
            </span>
          </Rating>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold text-gray-900 dark:text-white">
            ${parseFloat(product.price)}
          </span>
          <span className="rounded-lg bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Add to cart
          </span>
        </div>
      </Card>
    </div>
  );
}

export default React.memo(CCardProducts);
