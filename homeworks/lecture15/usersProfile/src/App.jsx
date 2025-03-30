import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./routes/layout";
import Login from "./routes/login";
import Home from "./routes/home"
import Users from "./routes/users"
import Profile from './routes/profile';

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [{ path: "/", element: <Home /> },
      { path: "/login", element: <Login /> },
      { path: "/users", element: <Users /> },
      { path: "/profile/:index", element: <Profile /> },
    ],
      
  },
]);

export default function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}