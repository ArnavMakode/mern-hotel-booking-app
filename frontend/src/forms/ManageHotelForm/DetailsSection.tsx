import { useFormContext } from "react-hook-form";
import { HotelFormData } from "./ManageHotelForm";

const DetailsSection = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext<HotelFormData>();
  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-3xl font-bold mb-3">Add Hotel</h1>
      <label className="text-gray-700 text-sm font-bold flex-1">
        Name
        <input
          type="text"
          className="border rounded w-full py-1 px-2 font-normal"
          {...register("name", { required: "this field is required" })}
        />
        {errors.name && (
          <span className="text-red-500">{errors.name.message as string}</span>
        )}
      </label>
      <div className="flex gap-4">
        <label className="text-gray-700 text-sm font-bold flex-1">
          City
          <input
            type="text"
            className="border rounded w-full py-1 px-2 font-normal"
            {...register("city", { required: "this field is required" })}
          />
          {errors.city && (
            <span className="text-red-500">
              {errors.city.message as string}
            </span>
          )}
        </label>
        <label className="text-gray-700 text-sm font-bold flex-1">
          Country
          <input
            type="text"
            className="border rounded w-full py-1 px-2 font-normal"
            {...register("country", { required: "this field is required" })}
          />
          {errors.country && (
            <span className="text-red-500">
              {errors.country.message as string}
            </span>
          )}
        </label>
      </div>
      <label className="text-gray-700 text-sm font-bold flex-1">
        Description
        <textarea
          rows={10}
          className="border rounded w-full py-1 px-2 font-normal"
          {...register("description", { required: "this field is required" })}
        />
        {errors.description && (
          <span className="text-red-500">
            {errors.description.message as string}
          </span>
        )}
      </label>
      <label className="text-gray-700 text-sm font-bold max-w-[50%]">
        Price Per Night
        <input
          type="number"
          min={0}
          className="border rounded w-full py-1 px-2 font-normal"
          {...register("pricePerNight", { required: "this field is required" })}
        />
        {errors.pricePerNight && (
          <span className="text-red-500">
            {errors.pricePerNight.message as string}
          </span>
        )}
      </label>
      <label className="text-gray-700 text-sm font-bold max-w-[50%]">
        Star Rating
        <select
          {...register("starRating", { required: "this field is required" })}
          className="border rounded w-full text-gray-700 p-2 font-normal"
        >
          <option value="" className="text-sm font-bold">
            {" "}
            Select as Rating
          </option>
          {[1, 2, 3, 4, 5].map((num) => (
            <option value={num} key={num}>
              {num}
            </option>
          ))}
        </select>
        {errors.pricePerNight && (
          <span className="text-red-500 text-sm font-bold">
            {errors.pricePerNight.message}
          </span>
        )}
      </label>
    </div>
  );
};
export default DetailsSection;
