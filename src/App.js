import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import ChatPage from "./components/ChatPage";
import LandingPage from "./components/LandingPage";
import Confirmation from "./components/Confirmation";

const router = createBrowserRouter([
  {
    path: "/",
    children: [
      {
        index: true,
        element: <LandingPage />,
      },
      {
        path: "chat",
        element: <ChatPage />,
      },
      {
        path: "confirmation",
        element: <Confirmation />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
