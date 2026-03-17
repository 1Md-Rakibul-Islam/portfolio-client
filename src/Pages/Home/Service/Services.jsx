import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Service from "./Service";

const Services = () => {
  const {
    data: services,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["services"],
    queryFn: async () => {
      const { data } = await axios.get("service.json");
      return data;
    },
  });

  return (
    <section className="section-py overflow-x-hidden bg-purple-700/[5%]">
      <div className="container">
        <h2 className="text-4xl text-center mb-24 text-purple-600">Service</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-6 sm:gap-x-8 md:gap-x-10 lg:gap-x-12 xl:gap-x-15 lg:gap-y-24 gap-y-20">
          {services?.map((service, idx) => (
            <Service key={idx} service={service} idx={idx + 1} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
