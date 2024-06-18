import { LoaderFunctionArgs, json } from "@remix-run/node";
import { Link, useLoaderData } from "@remix-run/react";
import { Button } from "~/components/ui/button";

export const handle = {
  breadcrumb: (disabled: boolean, { data }: { data: typeof loader }) => {
    return disabled ? (
      <Button variant="link" disabled className="cursor-default">
        {data.name}
      </Button>
    ) : (
      <Button variant="link" asChild>
        <Link to="/candidates/new">{data.name}</Link>
      </Button>
    );
  },
};

export async function loader({ params }: LoaderFunctionArgs) {
  const name = "Big Name From DB - " + params.id;
  return json({ name });
}

export default function CandidatesNew() {
  const { name } = useLoaderData<typeof loader>();
  return (
    <div>
      <h2>{name}</h2>
    </div>
  );
}
