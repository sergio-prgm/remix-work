import { Link } from "@remix-run/react";
import { Button } from "~/components/ui/button";

export const handle = {
  breadcrumb: (disabled: boolean) =>
    disabled ? (
      <Button variant="link" disabled className="cursor-default">
        New
      </Button>
    ) : (
      <Button variant="link" asChild>
        <Link to="/candidates/new">New</Link>
      </Button>
    ),
};

export default function CandidatesNew() {
  return (
    <div>
      <h2>New Candidates</h2>
    </div>
  );
}
