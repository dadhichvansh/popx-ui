import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LandingScreen from "./pages/LandingScreen";
import LoginScreen from "./pages/LoginScreen";
import SignupScreen from "./pages/SignupScreen";
import ProfileScreen from "./pages/ProfileScreen";
import Layout from "./components/layout/Layout";

function App() {
  const router = createBrowserRouter([
    { path: "/", element: <LandingScreen /> },
    { path: "/login", element: <LoginScreen /> },
    { path: "/register", element: <SignupScreen /> },
    { path: "/profile", element: <ProfileScreen /> },
    { path: "*", element: <div>404 Page Not Found</div> },
  ]);

  return (
    <Layout>
      <RouterProvider router={router} />
    </Layout>
  );
}

export default App;
