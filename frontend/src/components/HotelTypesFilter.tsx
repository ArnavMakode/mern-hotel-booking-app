import { HotelTypes } from "../config/hotel-options-config";

type Props = {
  selectedHotelTypes: string[];
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const HotelTypesFilter = ({ selectedHotelTypes, onChange }: Props) => {
  return (
    <div className="border-b border-slate-300 pb-5 max-lg:flex max-lg:flex-wrap">
      <h4 className="text-md font-bold mb-2">Hotel Type: </h4>
      {HotelTypes.map((hotelType) => (
        <label className="flex items-center space-x-2 border-l-2 border-slate-200 pl-1">
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
  );
};
export default HotelTypesFilter;
