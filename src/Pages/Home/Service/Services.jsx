import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React from 'react';
import Service from './Service';

const Services = () => {

    const {
        data: services,
        isLoading,
        refetch,
      } = useQuery({
        queryKey: ["services"],
        queryFn: async () => {
          const { data } = await axios.get("service.json");
        //   const { data } = await axios.get("https://portfolio-1md-rakibul-islam.vercel.app/services"); //not creted the collection
          return data;
        },
      });

    // console.log(services);
    

    return (
        <section className='mx-10 md:mx-20'>
            <h2 className='text-4xl text-center mb-20 mx-auto text-purple-600'>Service</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-20 gap-y-28'>
                {
                   services?.map( service => <Service 
                    key={service._id}
                    service={service}
                   ></Service>
                )}

            </div>
        </section>
    );
};

export default Services;