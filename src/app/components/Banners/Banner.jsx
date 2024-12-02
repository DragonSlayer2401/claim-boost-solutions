'use client';
import { useState } from 'react';

const Banner = ({ title, children }) => {
  const [show, setShow] = useState(true);
  return (
    <>
      {show && (
        <div className="fixed bottom-3 left-1/2 -translate-x-1/2 p-4 bg-yellow-50 border border-yellow-300 rounded-md shadow-lg">
          <h1 className="text-2xl font-bold text-yellow-800">{title}</h1>
          <hr />
          <p className="mt-1 text-yellow-700 text-lg">{children}</p>
          <div className="flex justify-end">
            <button
              onClick={() => setShow(false)}
              className="ml-4 bg-transparent rounded-md text-lg text-yellow-500 hover:text-yellow-600 border !border-yellow-500 !hover:border-yellow-600 p-2"
            >
              Dismiss
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Banner;
