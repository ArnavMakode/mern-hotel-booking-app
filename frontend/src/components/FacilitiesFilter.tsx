import { HotelFacilities } from "../config/hotel-options-config";

type Props = {
  selectedFacilities: string[];
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const FacilitiesFilter = ({ selectedFacilities, onChange }: Props) => {
  return (
    <div className="border-b border-slate-300 lg:pb-5 pb-2">
      <h4 className="text-md font-bold lg:mb-2">Facilities: </h4>
      <div className="max-lg:flex max-lg:w-full max-lg:overflow-x-auto">
        {HotelFacilities.map((facility) => (
          <label className="flex items-center space-x-1 pl-1 min-w-fit">
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
    </div>
  );
};
export default FacilitiesFilter;
