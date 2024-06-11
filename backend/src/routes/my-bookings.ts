import express, { Request, Response } from "express";
import verifyToken from "../middlewares/auth";
import Hotel from "../models/hotel";
import { HotelType } from "../shared/types";

const router = express.Router();

router.get("/", verifyToken, async (req: Request, res: Response) => {
  try {
    const hotels = await Hotel.find({
      bookings: { $elemMatch: { userId: req.userId } },
    });

    const results = hotels.map((hotel) => {
      const userBooking = hotel.bookings.filter(
        (booking) => booking.userId === req.userId
      );
      const hotelWithUserBookings: HotelType = {
        ...hotel.toObject(),
        bookings: userBooking,
      };
      return hotelWithUserBookings;
    });

    res.status(200).send(results);
  } catch (error) {
    res.status(500).json({ message: "Unable to fetch bookings" });
  }
});

export default router;
