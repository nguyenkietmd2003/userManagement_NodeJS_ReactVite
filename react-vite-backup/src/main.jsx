import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./pages/App.jsx";
import "./styles/global.css";
import "./index.css";
// import react router dom from 'react-router`
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import User from "./pages/user.jsx";
import HomePage from "./pages/home.jsx";
import RegisterPage from "./pages/register";
import LoginPage from "./pages/login";
import UserPage from "./pages/user.jsx";
import { AuthWrapper } from "./components/context/auth.context.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "user",
        element: <UserPage />,
      },
    ],
  },
  {
    path: "register",
    element: <RegisterPage />,
  },
  {
    path: "login",
    element: <LoginPage />,
  },
  {},
  {
    path: "*",
    element: <h1>404 Not Found</h1>,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthWrapper>
      <RouterProvider router={router} />
    </AuthWrapper>
  </StrictMode>
);
