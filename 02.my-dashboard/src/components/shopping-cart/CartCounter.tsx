"use client";

import { useState } from "react";

export const CartCounter = () => {
  const [counter, setCounter] = useState(5);

  return (
    <>
      <span className="text-7xl">{counter}</span>
      <div className="flex space-x-4  ">
        <button
          onClick={() => setCounter(counter - 1)}
          className="px-4 py-2 bg-gray-900 text-white rounded hover:bg-gray-600 transition-all  "
        >
          -
        </button>
        <button
          onClick={() => setCounter(counter + 1)}
          className="px-4 py-2 bg-gray-900 text-white rounded hover:bg-gray-600 transition-all  "
        >
          +
        </button>
      </div>
    </>
  );
};
