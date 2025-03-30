import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/layout";
import DummyComponent from "./components/dummy";

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [{ path: "/:index", element: <DummyComponent /> }],
  },
]);

export default function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}
