import React from "react";

const CarouselItem = ({img, i}) => {
    console.log(img, i);
  return (
    <div className="w-auto h-72">
      <img className="" src={img[i]} />
    </div>
  );
};

export default CarouselItem;
