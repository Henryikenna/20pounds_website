import AppLayout from "./components/AppLayout";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LandingPage from "./sections/LandingPage";
import ContactUsPage from "./sections/ContactUsPage";


const router = createBrowserRouter([
  {
    element: (
      // <ProtectedRoute>
      <AppLayout />
      // </ProtectedRoute>
    ),
    children: [
      {
        path: "/",
        element: <LandingPage />,
      },
      {
        path: "contact-us",
        element: <ContactUsPage />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
