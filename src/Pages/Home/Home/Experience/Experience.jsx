import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const Experience = () => {
  const {
    data: experiences,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["experience"],
    queryFn: async () => {
      const { data } = await axios.get("experience.json");
      return data;
    },
  });

  return (
    <div className="relative col-span-12 sm:px-4 px-10 space-y-6 md:col-span-8 xl:col-span-9">
      <div className="col-span-12 space-y-12 relative px-4 sm:space-y-8 before:absolute before:top-2 before:bottom-0 before:w-0.5 before:-left-3 before:bg-gray-700">
        {experiences?.map((exp, idx) => (
          <div
            key={idx}
            className="flex flex-col relative before:absolute before:top-2 before:w-4 before:h-4 before:rounded-full before:left-[-35px] before:z-[1] before:bg-purple-700"
          >
            <h3 className="text-xl font-semibold tracking-wide">{exp?.role}</h3>

            <h4 className="text-lg text-gray-300 my-2 tracking-wide">
              {exp?.company} – {exp?.location} ({exp?.type})
            </h4>

            <time className="text-xs tracking-wide uppercase text-gray-400">
              {exp?.duration}
            </time>

            <ul className="mt-5 space-y-1 list-disc list-inside text-gray-300">
              {exp?.description.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
