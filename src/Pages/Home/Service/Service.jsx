const Service = ({ service, idx }) => {
  const { title, description } = service;
  return (
    <div
      className="relative flex flex-col items-center text-center rounded-md hover:shadow-2xl text-gray-100 p-6 
        border-b border-gray-200/30 bg-white/20 navmorphism backdrop-blur-xl"
    >
      <div className="absolute -top-12 border bg-gray-900 p-5 rounded-full w-[100px] h-[100px] bg-body flex items-center justify-center">
        <span class="text-4xl font-bold text-purple-700">{idx}</span>
      </div>
      <h2 className="mt-16 z-50 text-3xl font-semibold mb-8 tracking-wide">
        {title}
      </h2>
      <p className="text-gray-400">{description}</p>
    </div>
  );
};

export default Service;
