import { BsGithub } from "react-icons/bs";

const Footer = () => {
  return (
    <div className="bg-blue-800 py-8">
      <div className="container mx-auto flex flex-col gap-4">
        <span className="text-white tracking-tight font-bold flex justify-around items-center gap-4">
          <p className="cursor-pointer">Privacy Policy</p>
          <p className="cursor-pointer">Terms of Service</p>
        </span>
        <span className="text-center text-white tracking-tight">
          Copyright © 2024 HotelBooking.com™. All rights reserved.
        </span>
        <span className="text-center text-white tracking-tight">
          Created by Arnav Makode
        </span>
        <span className="flex justify-center items-center text-white gap-2">
          <BsGithub />
          <a
            href="https://github.com/ArnavMakode/mern-hotel-booking-app"
            className="hover:underline"
          >
            GitHub link
          </a>
        </span>
        <span className="font-bold text-white tracking-tight text-xl text-center font-mono">
          HotelBooking.com
        </span>
      </div>
    </div>
  );
};
export default Footer;
