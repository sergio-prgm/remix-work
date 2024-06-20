import { Link, Outlet } from "@remix-run/react";
import { Button } from "~/components/ui/button";

export const handle = {
  breadcrumb: (disabled: boolean) =>
    disabled ? (
      <Button variant="link" disabled>
        Job Offers
      </Button>
    ) : (
      <Button variant="link" asChild>
        <Link to="/candidates">Job Offers</Link>
      </Button>
    ),
};

export default function CandidateBase() {
  return <Outlet />;
}
