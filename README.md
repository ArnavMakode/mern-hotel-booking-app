# HotelBooking.com

Welcome to HotelBooking.com, a MERN stack project where users can view, book, add, and edit hotels.

## Overview

HotelBooking.com provides users with a seamless experience to explore various hotels, make bookings, and manage their bookings effectively.

## Features

- User Authentication
- View different hotels
- Book hotels
- Add new hotels
- Edit existing hotels

## Visit the Website

You can visit the website [here](https://mern-hotel-booking-app-z6qw.onrender.com/) to explore the features and functionalities.

# Setting Up the MERN Booking App

This guide will walk you through the process of setting up the MERN Booking App on your local machine.

## Prerequisites

Before you begin, ensure you have Node.js installed on your system.

## Cloning the Repository

Start by cloning the repository to your local machine:

```bash
git clone https://github.com/ArnavMakode/mern-hotel-booking-app.git
cd mern-hotel-booking-app
```

## Backend Configuration

1. **Environment Files**: Navigate to the `backend` folder and create two files: `.env` and `.env.e2e`. Add the following contents to both files:

   ```plaintext
   MONGODB_CONNECTION_STRING=

   JWT_SECRET_KEY=
   FRONTEND_URL=

   # Cloudinary Variables
   CLOUDINARY_CLOUD_NAME=
   CLOUDINARY_API_KEY=
   CLOUDINARY_API_SECRET=

   # Stripe
   STRIPE_API_KEY=
   ```

2. **MongoDB Setup**:

   - Sign up for an account at [MongoDB Atlas](https://www.mongodb.com/cloud/atlas).
   - Create a new cluster and follow the instructions to set up a new database.
   - Once set up, obtain your MongoDB connection string and add it to the `MONGODB_CONNECTION_STRING` variable in your `.env` files.
   - For the `.env.e2e` setup see "running automated tests" below

3. **Cloudinary Setup**:

   - Create an account at [Cloudinary](https://cloudinary.com/).
   - Navigate to your dashboard to find your cloud name, API key, and API secret.
   - Add these details to the respective `CLOUDINARY_*` variables in your `.env` files.

4. **Stripe Setup**:

   - Sign up for a Stripe account at [Stripe](https://stripe.com/).
   - Find your API keys in the Stripe dashboard.
   - Add your Stripe API key to the `STRIPE_API_KEY` variable in your `.env` files.

5. **JWT_SECRET_KEY**:

   - This just needs to be any long, random string. You can google "secret key generator".

6. **Frontend URL**:
   - The `FRONTEND_URL` should point to the URL where your frontend application is running (typically `http://localhost:3000` or `http://localhost:5173/` if you're running it locally).

## Frontend Configuration

1. **Environment Files**: Navigate to the `frontend` folder and create a file: `.env`:

   ```plaintext
   VITE_API_BASE_URL=
   VITE_STRIPE_PUB_KEY=
   ```

2. **VITE_API_BASE_URLL**:
   - The `VITE_API_BASE_URL` should point to the URL where your backend application is running (typically `http://localhost:7000` if you're running it locally).

## Running the Application

1. **Backend**:

   - Navigate to the `backend` directory.
   - Install dependencies: `npm install`.
   - Start the server in development mode: `npm run dev`.
   - Start the server in production mode: first `npm run build` then `npm start`.

2. **Frontend**:
   - Open a new terminal and navigate to the `frontend` directory.
   - Install dependencies: `npm install`.
   - Start the frontend application: `npm run dev`.
   - The application should now be running on `http://localhost:5173` but verify this in your command line terminal

## Running Automated Tests

1.  **MongoDB Setup**:
    - You will ideally want to create a new mongoDb database for your tests to run against. This is to keep the data stable
    - Sign up for an account at [MongoDB Atlas](https://www.mongodb.com/cloud/atlas).
    - Create a new project (e.g e2e tests)
    - Create a new cluster and follow the instructions to set up a new database.
    - Once set up, obtain your MongoDB connection string and add it to the `MONGODB_CONNECTION_STRING` variable in your `.env.e2e` file.
2.  **Adding Test Data into MongoDB**:

    - Go to backend directory and run command `npm run e2e` to connect server to test database.
    - Now start the frontend using `npm run dev`.
    - Start the website.
    - Go to `Sign in` page Go to `create new account` link in the bottom which takes you to User Registration page.
    - Do registration with email: `1@1.com` and password as `password`.
    - After signing in go to `My-Hotels` link and click `Add Hotels`.
    - Now add few hotels by filling the form on add-hotels page.
    - Add this info in add hotel form:
        ```plaintext
         hotel 1:
         name:The Himalayan Hideaway"
         city:"Manali"
         country:"India"
         description:"Experience the magic of the Himalayas at The Himalayan Hideaway, a cha…"
         type:"Hiking Resort"
         adultCount:4
         childCount:4
         facilities:"Free WiFi","Parking", "Family Rooms","Spa"
         pricePerNight:3000
         starRating:4
         imageUrls: add any random image

         hotel 2:
         name:"Test Hotel"
         city:"Test City"
         country:"Test Country"
         description:"This id the description for the test hotel"
         type:"Budget"
         adultCount:2
         childCount:3
         facilities:"Free WiFi","Parking"
         pricePerNight:100
         starRating:3
         imageUrls: add any random images
        ```

4.  **Running tests**
    - In VS Code install the [Playwright extension](https://marketplace.visualstudio.com/items?itemName=ms-playwright.playwright)
    - Navigate to the `e2e-tests` directory.
    - Install dependencies: `npm install`.
    - Start the frontend and backend server using the steps above
    - [Using the Playwright extension to run the tests](https://playwright.dev/docs/getting-started-vscode#running-tests)
