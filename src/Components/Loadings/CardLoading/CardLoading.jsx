import React from "react";

const CardLoading = () => {
  return (
    <section className="min-h-screen md:my-40 section-py grid grid-cols-1 justify-center items-center gap-5 md:gap-10 md:grid-cols-2 lg:grid-cols-3 md:mx-20 mx-5">
      {[0, 1, 2, 3, 4, 5].map((card) => (
        <div className="flex flex-col rounded shadow-md animate-pulse h-[480px]">
          <div className="h-48 rounded-t bg-gray-700"></div>
          <div className="flex-1 px-4 py-8 space-y-4 sm:p-8 bg-gray-900">
            <div className="w-full h-6 rounded bg-gray-700"></div>
            <div className="w-full h-6 rounded bg-gray-700"></div>
            <div className="w-3/4 h-6 rounded bg-gray-700"></div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default CardLoading;
