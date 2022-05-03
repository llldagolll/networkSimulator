import Flow from "./pages/Flow";
import SubFlow from "./components/Flow/SubFlow";

export const routes = [
  { path: "/", element: <Flow /> },
  { path: "/sub", element: <SubFlow /> },
];
