import { useQuery } from "react-query";
import * as apiClient from "../api-client";
import LatestDestinationCard from "../components/LatestDestinationCard";
import LatestDestinationsShimmer from "../components/LatestDestinationsShimmer";

const Home = () => {
  const { data: hotels, isLoading } = useQuery("fetchHotels", () =>
    apiClient.fetchHotels()
  );

  if (isLoading) return <LatestDestinationsShimmer />

  const topRowHotels = hotels?.slice(0, 2) || [];
  const botttomRowHotels = hotels?.slice(2) || [];
  return (
    <div className="space-y-3">
      <h2 className="text-3xl font-bold">Latest Destinations</h2>
      <p>Most recent destinations added by our hosts</p>
      <div className="grid gap-4">
        <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
          {topRowHotels.map((hotel) => (
            <LatestDestinationCard key={hotel._id} hotel={hotel} priority={true} />
          ))}
        </div>
        <div className="grid lg:grid-cols-3 gap-4">
          {botttomRowHotels.map((hotel) => (
            <LatestDestinationCard key={hotel._id} hotel={hotel} />
          ))}
        </div>
      </div>
    </div>
  );
};
export default Home;
