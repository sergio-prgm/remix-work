import { Link, Outlet, useMatches, type UIMatch } from "@remix-run/react";
import { Navigation } from "./navigation";
import { Breadcrumbs } from "./breadcrumbs";
import { Button } from "~/components/ui/button";
import { MainNav } from "./main-nav";
import { SiteHeader } from "./header";

export const handle = {
  breadcrumb: (disabled: boolean) => (
    <Button variant="link" disabled={disabled} asChild>
      <Link to="/">Home</Link>
    </Button>
  ),
};

export interface CustomMatch extends UIMatch<unknown, unknown> {
  handle: { breadcrumb: (disabled: boolean, data?: unknown) => JSX.Element };
}

export default function Base() {
  const matches = useMatches() as CustomMatch[];
  return (
    <div>
      {/* <Navigation /> */}
      {/* <MainNav /> */}
      <SiteHeader />

      {/* <Breadcrumbs /> */}
      <Breadcrumbs matches={matches} />
      <div className="px-4">
        <Outlet />
      </div>
    </div>
  );
}
