import {
  createBrowserRouter,
} from "react-router-dom";
import HomeView from "../view/HomeView.jsx";
import LoginView from "../view/LoginView.jsx";
import RegisterView from "../view/RegisterView.jsx";

export const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeView />,
  },
  {
    path: '/login',
    element: <LoginView />
  },
  {
    path: '/register',
    element: <RegisterView />
  }
]);
