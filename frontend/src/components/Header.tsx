import { Link } from "react-router-dom";
import { useAppContext } from "../contexts/AppContext";
import SignoutButton from "./SignoutButton";
import { BiCalendarEvent, BiLogIn } from "react-icons/bi";
import { BsBuildings } from "react-icons/bs";

const Header = () => {
  const { isLoggedIn } = useAppContext();
  return (
    <div className="bg-blue-800 py-2">
      <div className="container mx-auto flex flex-col gap-2">
        <span className="text-xl md:text-2xl text-white tracking-tight font- font-mono font-bold">
          <Link to="/">HotelBooking.com</Link>
        </span>
        <span className="flex justify-end space-x-2 max-sm:text-xs gap-4">
          {isLoggedIn ? (
            <>
              <Link
                className="flex items-center text-white px-3 font-bold hover:bg-blue-600 rounded-2xl"
                to="/my-bookings"
              >
                <BiCalendarEvent className="mr-2" />
                My Bookings
              </Link>
              <Link
                className="flex items-center text-white px-3 font-bold hover:bg-blue-600 rounded-2xl"
                to="/my-hotels"
              >
                <BsBuildings className="mr-2" />
                My Hotels
              </Link>
              <SignoutButton />
            </>
          ) : (
            <Link
              to="/sign-in"
              className="flex items-center text-blue-600 bg-white px-3 font-bold hover:bg-gray-100 rounded-2xl gap-2"
            >
              <BiLogIn />
              Sign In
            </Link>
          )}
        </span>
      </div>
    </div>
  );
};
export default Header;
