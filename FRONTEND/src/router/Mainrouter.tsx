import EconomicScreen from "@/screen/EconomicScreen";
import HomeScreen from "@/screen/HomeScreen";
import { PopulationScreen } from "@/screen/PopulationScreen";
import { createBrowserRouter } from "react-router-dom";

import Layout from "@/Layout/Layout";

export const mainRouter = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <HomeScreen />,
      },
      {
        index: true,
        path: "economic",
        element: <EconomicScreen />,
      },
      {
        index: true,
        path: "population",
        element: <PopulationScreen />,
      },
    ],
  },
]);
