import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { DataTable } from "~/components/data-table";
import { BACKEND_URL } from "~/lib/config";
import { columns } from "./columns";

export async function loader() {
  const data = await fetch(BACKEND_URL + "/candidate/api/v1/candidates", {
    method: "GET",
  });
  return json({
    jobOffers: await data.json(),
  });
}

export default function Candidates() {
  const { jobOffers } = useLoaderData<typeof loader>();
  console.log(jobOffers)
  return (
    <div>
      <div className="flex justify-between w-full items-center pb-6 sm:px-4">
        <h1>Hello Job Offers</h1>
      </div>
      <div className="sm:px-4">
        <DataTable columns={columns} data={jobOffers} />
      </div>
    </div>
  );
}
