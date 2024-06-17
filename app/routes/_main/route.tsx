import { Outlet } from "@remix-run/react";
import { Navigation } from "./navigation";
import { Breadcrumbs } from "./breadcrumbs";

export default function Base() {
  return (
    <div>
      <Navigation />
      <Breadcrumbs />
      <div className="px-4">
        <Outlet />
      </div>
    </div>
  );
}
