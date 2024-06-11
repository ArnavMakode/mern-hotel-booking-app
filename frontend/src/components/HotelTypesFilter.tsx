import { HotelTypes } from "../config/hotel-options-config";

type Props = {
  selectedHotelTypes: string[];
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const HotelTypesFilter = ({ selectedHotelTypes, onChange }: Props) => {
  return (
    <div className="border-b border-slate-300 lg:pb-5 pb-2">
      <h4 className="text-md font-bold lg:mb-2">Hotel Type: </h4>
      <div className="max-lg:flex max-lg:w-full max-lg:overflow-x-auto">
        {HotelTypes.map((hotelType) => (
          <label className="flex items-center space-x-2 pl-1 min-w-fit">
            <input
              type="checkbox"
              className="rounded"
              value={hotelType}
              checked={selectedHotelTypes.includes(hotelType)}
              onChange={onChange}
            />
            <span className="pr-3">{hotelType}</span>
          </label>
        ))}
      </div>
    </div>
  );
};
export default HotelTypesFilter;
