
const Footer = () => {
  return (
    <div className="bg-blue-800 py-8">
      <div className="container mx-auto flex justify-between items-center">
        <span className="text-3xl text-white tracking-tight font-bold">
          HotelBooking.com
        </span>
        <span className="text-white tracking-tight font-bold flex gap-4">
          <p className="cursor-pointer">Privacy Policy</p>
          <p className="cursor-pointer">Terms of Service</p>
        </span>
      </div>
    </div>
  );
};
export default Footer;
