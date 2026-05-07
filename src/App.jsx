import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { LanguageProvider } from "./context/LanguageContext";
import { ThemeProvider } from "./context/ThemeContext";
import routes from "./routes";
// import RootLayout from "./Layout/RootLayout";
// import {
//   Home,
//   About,
//   Contact,
//   Activities,
//   Purpose,
//   ErrorPage,
//   ActivitiesDetail,
//   LessonDhama,
//   Article,
//   ArticleDetail,
// } from "./components/Pages";
// const routerdom = createBrowserRouter([
//   {
//     path: "/",
//     element: <RootLayout />,
//     errorElement: <ErrorPage />,
//     children: [
//       {
//         index: true,
//         element: <Home />,
//       },
//       {
//         path: "about",
//         element: <About />,
//       },
//       {
//         path: "contact",
//         element: <Contact />,
//       },
//       {
//         path: "purpose",
//         element: <Purpose />,
//       },
//       {
//         path: "activities",
//         element: <Activities />,
//       },
//       {
//         path: "activities/:id",
//         element: <ActivitiesDetail />,
//       },
//       {
//         path: "dhama-lessons",
//         element: <LessonDhama />,
//       },
//       {
//         path: "article",
//         element: <Article />,
//       },
//       {
//         path: "article/:id",
//         element: <ArticleDetail />,
//       },
//       // {
//       //   path: "dashboard",
//       //   element: <Dashboard />
//       // },
//     ],
//   },

//   {
//     path: "*",
//     element: <ErrorPage />,
//   },
// ]);
const App = () => {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <RouterProvider router={routes} />
      </LanguageProvider>
    </ThemeProvider>
  );
};
export default App;
