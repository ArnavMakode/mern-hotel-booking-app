const LatestDestinationsShimmer = () => {
  return (
    <div className="space-y-3">
      {/* Heading */}
      <div className="h-8 w-1/3 bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 rounded-full animate-pulse"></div>

      {/* Subtext */}
      <div className="h-4 w-1/2 bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 rounded-full animate-pulse mb-6"></div>

      {/* Hotels Grid */}
      <div className="grid gap-4">
        <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
          {[...Array(2)].map((_, i) => (
            <div
              key={i}
              className="h-64 bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 rounded-lg animate-pulse"
            ></div>
          ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-4">
          {[...Array(3)].map((_, i) => (
            <div
              key={i}
              className="h-64 bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 rounded-lg animate-pulse"
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default LatestDestinationsShimmer;
