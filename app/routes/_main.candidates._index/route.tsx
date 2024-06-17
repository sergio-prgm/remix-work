import { Link, Outlet } from "@remix-run/react";
import { Button } from "~/components/ui/button";

export default function Candidates() {
  return (
    <div>
      <h1>Hello candidates</h1>
      <Button>
        <Link to="/candidates/new">New</Link>
      </Button>
      <Outlet />
    </div>
  );
}
