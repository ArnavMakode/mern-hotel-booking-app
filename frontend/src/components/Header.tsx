import { Link } from "react-router-dom";
import { useAppContext } from "../contexts/AppContext";
import SignoutButton from "./SignoutButton";

const Header = () => {
  const { isLoggedIn } = useAppContext();
  return (
    <div className="bg-blue-800 py-6">
      <div className="container mx-auto flex justify-between">
        <span className="text-3xl text-white tracking-tight font-bold">
          <Link to="/">HotelBooking.com</Link>
        </span>
        <span className="flex space-x-2">
          {isLoggedIn ? (
            <>
              <Link
                className="flex items-center text-white px-3 font-bold hover:bg-blue-600"
                to="/my-bookings"
              >
                My Bookings
              </Link>
              <Link
                className="flex items-center text-white px-3 font-bold hover:bg-blue-600"
                to="/my-hotels"
              >
                My Hotels
              </Link>
              <SignoutButton />
            </>
          ) : (
            <Link
              to="/sign-in"
              className="flex items-center text-blue-600 bg-white px-3 font-bold hover:bg-gray-100"
            >
              Sign In
            </Link>
          )}
        </span>
      </div>
    </div>
  );
};
export default Header;
