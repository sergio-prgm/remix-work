import type { MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";
import { Button } from "~/components/ui/button";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <div className="font-sans p-4">
      <h1 className="text-3xl">Welcome to Workforce</h1>
      <ul className="list-disc mt-4 pl-6 space-y-2">
        <li>
          <Button variant="secondary">
            <Link to="/candidates">Candidates</Link>
          </Button>
          <Button>
            <Link to="/candidates">Candidates</Link>
          </Button>
        </li>
        <li>
          <Button className="bg-orange-500 hover:bg-orange-500/90">
            <Link to="/joboffers">Job Offers</Link>
          </Button>
        </li>
        <li>
          <Button className="bg-blue-500 hover:bg-blue-500/90">
            <Link to="/questions">Questions</Link>
          </Button>
        </li>
      </ul>
    </div>
  );
}
