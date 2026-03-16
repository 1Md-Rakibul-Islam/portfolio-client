import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const Education = () => {
  const { data: educations, isLoading } = useQuery({
    queryKey: ["education"],
    queryFn: async () => {
      const { data } = await axios.get("education.json");
      return data;
    },
  });

  return (
    <div className="relative col-span-12 sm:px-4 px-10 space-y-6 md:col-span-8 xl:col-span-9">
      <div className="col-span-12 space-y-12 relative px-4 sm:space-y-8 before:absolute before:top-2 before:bottom-0 before:w-0.5 before:-left-3 before:bg-gray-700">
        {educations?.map((edu, idx) => (
          <div
            key={idx}
            className="flex flex-col relative before:absolute before:top-2 before:w-4 before:h-4 before:rounded-full before:left-[-35px] before:z-[1] before:bg-purple-700"
          >
            <h3 className="text-xl font-semibold tracking-wide">
              {edu.degree}
            </h3>

            <h4 className="text-lg text-gray-300 my-2 tracking-wide">
              {edu.institution}
            </h4>

            <time className="text-xs tracking-wide uppercase text-gray-400">
              {edu.duration}
            </time>

            {edu.grade && (
              <p className="text-sm text-gray-400 mt-1">{edu.grade}</p>
            )}

            <ul className="mt-5 space-y-2 list-disc list-inside text-gray-300">
              {edu.description.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Education;
