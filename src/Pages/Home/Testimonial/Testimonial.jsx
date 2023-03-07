import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import PreLoading from '../../../Components/Loadings/PreLoading/PreLoading';
import Review from './Review';

const Testimonial = () => {

    const {
        data: testimonials,
        isLoading,
        refetch,
      } = useQuery({
        queryKey: ["testimonials"],
        queryFn: async () => {
          const { data } = await axios.get("https://portfolio-rakibul-islam.vercel.app/testimonials");
          return data;
        },
      });
    
      if (isLoading) {
        return <PreLoading />
      }
    
    return (
        <section className='bg-black mt-20 '>
            <h2 className='text-center pt-10 text-4xl text-purple-700'>Testimonial</h2>
            <div className='md:mx-20 mx-5'>
                {
                <Carousel 
                autoPlay={true}
                infiniteLoop={true}
                interval={2000}
                //   selectedItem={selectImg}
                >
                {
                    testimonials?.map( review => <Review
                        review= {review}
                    />)
                }
                </Carousel>
                }
            </div>
        </section>
    );
};

export default Testimonial;