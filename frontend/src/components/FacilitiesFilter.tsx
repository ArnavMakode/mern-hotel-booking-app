import { HotelFacilities } from "../config/hotel-options-config";

type Props = {
  selectedFacilities: string[];
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const FacilitiesFilter = ({ selectedFacilities, onChange }: Props) => {
  return (
    <div className="border-b border-slate-300 pb-5 max-lg:flex max-lg:flex-wrap">
      <h4 className="text-md font-bold mb-2">Facilities: </h4>
      {HotelFacilities.map((facility) => (
        <label className="flex items-center space-x-1 border-l-2 border-slate-200 pl-1">
          <input
            type="checkbox"
            className="rounded"
            value={facility}
            checked={selectedFacilities.includes(facility)}
            onChange={onChange}
          />
          <span className="pr-3">{facility}</span>
        </label>
      ))}
    </div>
  );
};
export default FacilitiesFilter;
