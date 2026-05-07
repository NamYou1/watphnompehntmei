import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../Layout/RootLayout";
import {
  Home,
  About,
  Contact,
  Activities,
  Purpose,
  ErrorPage,
  ActivitiesDetail,
  LessonDhama,
  Article,
  ArticleDetail,
} from "../components/Pages";

const routes = createBrowserRouter([
      {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "purpose",
        element: <Purpose />,
      },
      {
        path: "activities",
        element: <Activities />,
      },
      {
        path: "activities/:id",
        element: <ActivitiesDetail />,
      },
      {
        path: "dhama-lessons",
        element: <LessonDhama />,
      },
      {
        path: "article",
        element: <Article />,
      },
      {
        path: "article/:id",
        element: <ArticleDetail />,
      },
      // {
      //   path: "dashboard",
      //   element: <Dashboard />
      // },
    ],
  },

  {
    path: "*",
    element: <ErrorPage />,
  },
])

export default routes;