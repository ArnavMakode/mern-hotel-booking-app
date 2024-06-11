import { useFormContext } from "react-hook-form";
import { HotelFormData } from "./ManageHotelForm";
import { HotelFacilities } from "../../config/hotel-options-config";

const FacilitiesSection = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext<HotelFormData>();
  return (
    <div>
      <h2 className="text-2xl font-bold mb-3">Facilities</h2>
      <div className="grid md:grid-cols-4 grid-cols-2 md:gap-3">
        {HotelFacilities.map((facility) => (
          <label
            className="text-sm text-gray-700 flex items-center gap-1"
            key={facility}
          >
            <input
              type="checkbox"
              value={facility}
              {...register("facilities", {
                validate: (facilities) =>
                  facilities && facilities.length > 0
                    ? true
                    : "At least one facility is required",
              })}
            />
            {facility}
          </label>
        ))}
      </div>
      {errors.facilities && (
        <span className="text-red-500 text-sm font-bold">
          {errors.facilities.message as string}
        </span>
      )}
    </div>
  );
};
export default FacilitiesSection;
