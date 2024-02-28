import { useFormContext } from "react-hook-form";
import { HotelFormData } from "./ManageHotelForm";

const GuestsSection = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext<HotelFormData>();
  return (
    <div>
      <h1 className="text-3xl font-bold mb-3">Guests</h1>
      <div className="grid grid-cols-2 gap-5 p-6 bg-gray-300">
        <label className="text-sm text-gray-700 font-semibold">
          Adults
          <input
            type="number"
            className="border rounded w-full py-2 px-3 font-normal"
            min={1}
            {...register("adultCount", { required: "This field is required" })}
          />
          {errors.adultCount?.message && (
            <span className="text-red-500 text-sm font-bold">
              {errors.adultCount.message as string}
            </span>
          )}
        </label>
        <label className="text-sm text-gray-700 font-semibold">
          Children
          <input
            type="number"
            className="border rounded w-full py-2 px-3 font-normal"
            min={0}
            {...register("childCount", { required: "This field is required" })}
          />
          {errors.childCount?.message && (
            <span className="text-red-500 text-sm font-bold">
              {errors.childCount.message as string}
            </span>
          )}
        </label>
      </div>
    </div>
  );
};
export default GuestsSection;
