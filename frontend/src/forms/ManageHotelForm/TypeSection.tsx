import { useFormContext } from "react-hook-form";
import { HotelTypes } from "../../config/hotel-options-config";
import { HotelFormData } from "./ManageHotelForm";

const TypeSection = () => {
  const {
    register,
    watch,
    formState: { errors },
  } = useFormContext<HotelFormData>();
  const typeWatch = watch("type");
  return (
    <div>
      <h2 className="text-2xl font-bold mb-3">Type</h2>
      <div className="grid grid-cols-3 md:grid-cols-5 gap-1">
        {HotelTypes.map((type) => (
          <label
            key={type}
            className={`cursor-pointer rounded-full py-2 text-sm font-semibold text-center
          ${typeWatch === type ? "bg-blue-300" : "bg-gray-300"}`}
          >
            <input
              type="radio"
              value={type}
              {...register("type", { required: "This field is required" })}
              className="hidden"
            />
            <span>{type}</span>
          </label>
        ))}
      </div>
      {errors.type && (
        <span className="text-red-500 text-sm font-bold">
          {errors.type.message as string}
        </span>
      )}
    </div>
  );
};
export default TypeSection;
