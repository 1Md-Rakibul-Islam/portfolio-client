import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";
import { Carousel } from "react-responsive-carousel";
import PreLoading from "../../../Components/Loadings/PreLoading/PreLoading";
import Review from "./Review";

const Testimonial = () => {
  const {
    data: testimonials,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["testimonials"],
    queryFn: async () => {
      const { data } = await axios.get(
        "https://portfolio-rakibul-islam.vercel.app/testimonials"
      );
      return data;
    },
  });

  if (isLoading) {
    return <PreLoading />;
  }

  return (
    <section className="section-py bg-purple-700/[5%]">
      <div className="container">
        <h2 className="text-center text-4xl text-purple-700">Testimonial</h2>
        <div>
          {
            <Carousel autoPlay={true} infiniteLoop={true} interval={2000}>
              {testimonials?.map((review) => (
                <Review review={review} />
              ))}
            </Carousel>
          }
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
