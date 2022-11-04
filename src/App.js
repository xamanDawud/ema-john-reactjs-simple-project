import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { loadersCardAndShop } from "./loaders/loadersCardAndShop";
import "./App.css";
import Inventory from "./components/Inventory/Inventory";
import Main from "./components/layouts/Main";
import Login from "./components/Login/Login";
import Order from "./components/Order/Order";
import ShopLayout from "./components/ShopLayout/ShopLayout";
import SignUp from "./components/SignUp/SignUp";
import PrivateRoutes from "./routes/PrivateRoutes";

function App() {
  let router = createBrowserRouter([
    {
      path: "/",
      element: <Main />,
      children: [
        { path: "/", element: <ShopLayout /> },
        { path: "/shop", element: <ShopLayout /> },
        {
          path: "/order",
          loader: loadersCardAndShop,
          element: <Order />,
        },
        {
          path: "/signup",
          loader: loadersCardAndShop,
          element: <SignUp />,
        },
        {
          path: "/inventory",
          element: (
            <PrivateRoutes>
              <Inventory />
            </PrivateRoutes>
          ),
        },
        { path: "/login", element: <Login /> },
      ],
    },
  ]);
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
