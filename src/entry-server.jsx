import React from "react";
import { renderToString } from "react-dom/server";
import App from "./App.jsx";
import { getRoute, allRoutes } from "./routes.jsx";
import { buildHead } from "./lib/head.js";

export function render(path) {
  const route = getRoute(path);
  const html = renderToString(<App path={path} />);
  return { head: buildHead(route.head), file: route.file, html, route };
}

export { allRoutes, getRoute };
