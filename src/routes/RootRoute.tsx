import { Outlet, ScrollRestoration } from "react-router-dom";

export default function RootRoute() {
  return (
    <>
      <Outlet />
      <ScrollRestoration />
    </>
  );
}
