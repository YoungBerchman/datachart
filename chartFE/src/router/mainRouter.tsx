import { createBrowserRouter } from "react-router-dom";

import Page from "@/pages/Page";

export const mainRouter = createBrowserRouter([
  {
    path: "/",
    element: <Page />,
  },
]);
