import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(10);

  return (
    <div className="self-center text-center flex flex-col">
      <h1>{count}</h1>
      <div className="inline-flex self-center">
        <button
          className="w-1/8 bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l lg:bg-black"
          onClick={() => setCount(count + 1)}
        >
          +
        </button>
        <button
          className="w-1/8 bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-r"
          onClick={() => setCount(count - 1)}
        >
          -
        </button>
      </div>
      <p className="pt-6">
        other text to
        <span className=" mx-1 -skew-y-3 bg-pink-500 relative inline-block">
          <span className="relative text-white">SHOW</span>
        </span>
        you its possible
      </p>
    </div>
  );
}

export default Counter;
