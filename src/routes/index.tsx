import { RouterProvider, createBrowserRouter } from "react-router-dom";
import RootRoute from "./RootRoute";
import StoryListRoute from "./StoryListRoute";
import StoryRoute from "./StoryRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootRoute />,
    children: [
      {
        path: "/",
        element: <StoryListRoute />,
      },
      {
        path: "/:id",
        element: <StoryRoute />,
      },
    ],
  },
]);

export default function Router() {
  return <RouterProvider router={router} />;
}
