import { ActionFunctionArgs, json } from "@remix-run/node";
import { Form, useLoaderData } from "@remix-run/react";
import { DataTable } from "~/components/data-table";
// import { BACKEND_URL } from "~/lib/config";
import { columns } from "./columns";
import { db } from "~/lib/server/db";
import { resources, type SelectResources } from "~/lib/server/schema";
import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";
import { Label } from "~/components/ui/label";
import * as tables from "~/lib/server/schema";
import { parse } from "csv-parse/sync";

export async function loader() {
  const data = await db.query.resources.findMany({
    // limit: 20,
  });
  return json({
    // jobOffers: await data.json(),
    resources: data,
  });
}

export async function action({ request }: ActionFunctionArgs) {
  console.log("action");
  const formData = await request.formData();
  const file = formData.get("file") as File;
  const fileBuffer = await file.arrayBuffer();
  const fileText = new TextDecoder().decode(fileBuffer);
  console.log(fileText);
  const records = parse(fileText, {
    columns: true,
    skipEmptyLines: true,
  });
  records.forEach(async (record) => {
    await db.insert(tables.resources).values({
      id: record.id,
      product: record.product,
      productCategory: record.product_category,
      usageDate: new Date(parseInt(record.usage_date) * 1000),
    });
  });
  console.log("Inserted", records.length, "new rows in database.");

  return json({});
}

export default function Candidates() {
  const { resources } = useLoaderData<typeof loader>();
  console.log(resources);
  return (
    <div>
      <div className="flex justify-between w-full items-center pb-6 sm:px-4">
        <h1>Hello Job Offers</h1>
      </div>
      <Form method="post" encType="multipart/form-data">
        <Button asChild>
          <Label>
            Upload csv
            <input type="file" name="file" accept=".csv" />
          </Label>
        </Button>
        <Button type="submit">Submit</Button>
      </Form>
      <div className="sm:px-4">
        <DataTable columns={columns} data={resources as SelectResources[]} />
      </div>
    </div>
  );
}
