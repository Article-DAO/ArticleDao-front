import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import ProposalDetail from "./components/proposal/ProposalDetail";
import WhiteUser from "./components/Whitelist/WhiteUser";
import Challenge from "./pages/Challenge";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Proposal from "./pages/Proposal";
import Whitelist from "./pages/Whitelist";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <Home />,
      },

      {
        path: "proposals",
        element: <Proposal />,
      },
      {
        path: "proposals/:proposalTitle",
        element: <ProposalDetail />,
      },

      {
        path: "whitelist",
        element: <Whitelist />,
      },
      {
        path: "whitelist/:userId",
        element: <WhiteUser />,
      },

      {
        path: "challenge",
        element: <Challenge />,
      },
      {
        path: "profile",
        element: <Profile />,
      },
    ],
  },
]);

export default router;
