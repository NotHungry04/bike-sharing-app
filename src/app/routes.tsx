import { createBrowserRouter } from "react-router";
import { Home } from "./pages/Home";
import { ListBike } from "./pages/ListBike";
import { BikeDetails } from "./pages/BikeDetails";
import { Dashboard } from "./pages/Dashboard";
import { MyBookings } from "./pages/MyBookings";
import { Layout } from "./components/Layout";

export const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        Component: Home,
      },
      {
        path: "/list-bike",
        Component: ListBike,
      },
      {
        path: "/bike/:id",
        Component: BikeDetails,
      },
      {
        path: "/dashboard",
        Component: Dashboard,
      },
      {
        path: "/bookings",
        Component: MyBookings,
      },
    ],
  },
]);
