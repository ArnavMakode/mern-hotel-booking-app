import { FormEvent, useState } from "react";
import { useSearchContext } from "../contexts/SearchContext";
import { MdTravelExplore } from "react-icons/md";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useNavigate } from "react-router-dom";

const SearchBar = () => {
  const navigate = useNavigate();
  const search = useSearchContext();
  const [destination, setDestination] = useState<string>(search.destination);
  const [checkIn, setCheckIn] = useState<Date>(search.checkIn);
  const [checkOut, setCheckOut] = useState<Date>(search.checkOut);
  const [adultCount, setAdultCount] = useState<number>(search.adultCount);
  const [childCount, setChildCount] = useState<number>(search.childCount);

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    search.saveSearchValues(
      destination,
      checkIn,
      checkOut,
      adultCount,
      childCount
    );
    navigate("/search");
  };

  const minDate = new Date();
  const maxDate = new Date();
  maxDate.setFullYear(minDate.getFullYear() + 1);

  return (
    <form
      onSubmit={handleSubmit}
      className="-mt-8 p-1 bg-yellow-400 rounded shadow-md lg:flex grid grid-cols-2 items-center gap-1 w-fit"
    >
      <div className="flex flex-row items-center bg-white p-2">
        <MdTravelExplore size={25} className="mr-2" />
        <input
          placeholder="where are you going?"
          className="text-md w-full max-sm:text-sm"
          value={destination}
          onChange={(event) => setDestination(event.target.value)}
        />
      </div>
      <div className="flex bg-white px-1 py-1">
        <label className="flex items-center">
          Adults:
          <input
            className="w-full p-1 focus:outline-none font-bold max-sm:text-sm"
            type="number"
            min={1}
            max={10}
            value={adultCount}
            onChange={(event) => setAdultCount(parseInt(event.target.value))}
          />
        </label>
        <label className="flex items-center">
          Children:
          <input
            className="w-full p-1 focus:outline-none font-bold max-sm:text-sm"
            type="number"
            min={0}
            max={10}
            value={childCount}
            onChange={(event) => setChildCount(parseInt(event.target.value))}
          />
        </label>
      </div>
      <div>
        <DatePicker
          selected={checkIn}
          onChange={(date) => {
            if (!date) return;
            setCheckIn(date);
            const newDate = new Date(date);
            newDate.setDate(date.getDate() + 1);
            if (date >= checkOut) setCheckOut(newDate);
          }}
          selectsStart
          startDate={checkIn}
          endDate={checkOut}
          minDate={minDate}
          maxDate={maxDate}
          placeholderText="Check-in Date"
          className="bg-white p-2 focus:outline-none max-sm:text-sm w-full"
          wrapperClassName="w-full"
        />
      </div>
      <div>
        <DatePicker
          selected={checkOut}
          onChange={(date: Date) => {
            if (!checkIn || !date) return;
            if (date > checkIn) setCheckOut(date);
          }}
          selectsStart
          startDate={checkIn}
          endDate={checkOut}
          minDate={minDate}
          maxDate={maxDate}
          placeholderText="Check-out Date"
          className="bg-white p-2 focus:outline-none max-sm:text-sm w-full"
          wrapperClassName="w-full"
        />
      </div>
      <button className="bg-blue-600 text-white h-full p-1 font-bold max-sm:text-sm text-xl hover:bg-blue-500 rounded col-span-full">
        Search
      </button>
    </form>
  );
};
export default SearchBar;
