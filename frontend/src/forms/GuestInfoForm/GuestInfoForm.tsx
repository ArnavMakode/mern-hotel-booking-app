import { useForm } from "react-hook-form";
import DatePicker from "react-datepicker";
import { useSearchContext } from "../../contexts/SearchContext";
import { useAppContext } from "../../contexts/AppContext";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";

type Props = {
  hotelId: string;
  pricePerNight: number;
};

type GuestInfoFormData = {
  checkIn: Date;
  checkOut: Date;
  adultCount: number;
  childCount: number;
};

const GuestInfoForm = ({ hotelId, pricePerNight }: Props) => {
  const search = useSearchContext();
  const { isLoggedIn } = useAppContext();
  const navigate = useNavigate();
  const location = useLocation();
  const {
    watch,
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<GuestInfoFormData>({
    defaultValues: {
      checkIn: search.checkIn,
      checkOut: search.checkOut,
      adultCount: search.adultCount,
      childCount: search.childCount,
    },
  });

  const checkIn = watch("checkIn");
  const checkOut = watch("checkOut");

  useEffect(() => {
    if (checkOut <= checkIn) {
      const newDate = new Date(checkIn);
      newDate.setDate(checkIn.getDate() + 1);
      setValue("checkOut", newDate);
    }
  }, []);

  const minDate = new Date();
  const maxDate = new Date();
  maxDate.setFullYear(maxDate.getFullYear() + 1);

  const onSignInClick = (data: GuestInfoFormData) => {
    search.saveSearchValues(
      "",
      data.checkIn,
      data.checkOut,
      data.adultCount,
      data.childCount
    );
    navigate("/sign-in", { state: { from: location } });
  };

  const onSubmit = (data: GuestInfoFormData) => {
    search.saveSearchValues(
      "",
      data.checkIn,
      data.checkOut,
      data.adultCount,
      data.childCount
    );

    navigate(`/hotel/${hotelId}/booking`);
  };

  return (
    <div className="flex flex-col bg-blue-200 gap-4 p-4">
      <h3 className="text-md font-bold">₹{pricePerNight}</h3>
      <form
        onSubmit={
          isLoggedIn ? handleSubmit(onSubmit) : handleSubmit(onSignInClick)
        }
      >
        <div className="grid grid-cols-1 gap-4 items-center">
          <div>
            <DatePicker
              required
              selected={checkIn}
              onChange={(date) => {
                if (!date) return;
                setValue("checkIn", date as Date);
                const newDate = new Date(date);
                newDate.setDate(date.getDate() + 1);
                if (date >= checkOut) setValue("checkOut", newDate);
              }}
              selectsStart
              startDate={checkIn}
              endDate={checkOut}
              minDate={minDate}
              maxDate={maxDate}
              placeholderText="Check-in Date"
              className="min-w-full bg-white p-2 focus:outline-none"
              wrapperClassName="min-w-full"
            />
            <DatePicker
              required
              selected={checkOut}
              onChange={(date) => {
                if (!checkIn || !date) return;
                if (date > checkIn) setValue("checkOut", date as Date);
              }}
              selectsStart
              startDate={checkIn}
              endDate={checkOut}
              minDate={minDate}
              maxDate={maxDate}
              placeholderText="Check-in Date"
              className="min-w-full bg-white p-2 focus:outline-none"
              wrapperClassName="min-w-full"
            />
            <div className="flex bg-white px-2 py-1 gap-2">
              <label className="flex items-center">
                Adults:
                <input
                  className="w-full p-1 focus:outline-none font-bold"
                  type="number"
                  min={1}
                  max={10}
                  {...register("adultCount", {
                    required: "this field is required",
                    min: {
                      value: 1,
                      message: "There must be atleast one adult",
                    },
                    valueAsNumber: true,
                  })}
                />
              </label>
              <label className="flex items-center">
                Children:
                <input
                  className="w-full p-1 focus:outline-none font-bold"
                  type="number"
                  min={0}
                  max={10}
                  {...register("childCount", {
                    required: "this field is required",
                    valueAsNumber: true,
                  })}
                />
              </label>
            </div>
            {errors.adultCount && (
              <span className="text-red-500 font-semibold text-sm">
                {errors.adultCount.message}
              </span>
            )}
            {errors.childCount && (
              <span className="text-red-500 font-semibold text-sm">
                {errors.childCount.message}
              </span>
            )}
          </div>
          <button className="bg-blue-600 text-white h-full p-2 font-bold hover:bg-blue-500 text-xl">
            {isLoggedIn ? "Book Now" : "Sign in to book"}
          </button>
        </div>
      </form>
    </div>
  );
};
export default GuestInfoForm;
