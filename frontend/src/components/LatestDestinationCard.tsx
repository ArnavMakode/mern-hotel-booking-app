import { Link } from "react-router-dom";
import { HotelType } from "../../../backend/src/shared/types";

type Props = {
  hotel: HotelType;
};

const LatestDestinationCard = ({
  hotel,
  priority = false,
}: Props & { priority?: boolean }) => {
  return (
    <Link
      to={`/details/${hotel._id}`}
      className="relative cursor-pointer overflow-hidden rounded-md"
    >
      <div className="aspect-[5/3] relative">
        <img
          src={`${hotel.imageUrls[0]}?q_auto,f_webp,w_800,dpr_auto`}
          alt={`${hotel.name} in ${hotel.city}`}
          loading={priority ? "eager" : "lazy"}
          decoding={priority ? "sync" : "async"}
          width={800}
          height={600}
          className="absolute inset-0 object-cover object-center"
        />
      </div>
      <div className="absolute bottom-0 p-4 bg-black bg-opacity-50 w-full rounded-b-md">
        <span className="text-white font-bold text-3xl tracking-tight">
          {hotel.name}
        </span>
        <span className="text-white tracking-tight text-sm">
          {" "}
          - {hotel.city}, {hotel.country}
        </span>
      </div>
    </Link>
  );
};
export default LatestDestinationCard;
