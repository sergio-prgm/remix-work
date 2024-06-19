import { Link, Outlet } from "@remix-run/react";
import { Button } from "~/components/ui/button";

export const handle = {
  breadcrumb: (disabled: boolean) =>
    disabled ? (
      <Button variant="link" disabled>
        Candidates
      </Button>
    ) : (
      <Button variant="link" asChild>
        <Link to="/candidates">Candidates</Link>
      </Button>
    ),
};

export default function CandidateBase() {
  return <Outlet />;
}
