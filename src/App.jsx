import React from "react";
import { getRoute } from "./routes.jsx";
import Layout from "./components/Chrome.jsx";

export default function App({ path }) {
  const route = getRoute(path);
  return <Layout popup={route.popup}>{route.element}</Layout>;
}
