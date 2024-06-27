import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "~/components/ui/select";
import { Button } from "~/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "~/components/ui/dialog";
import { Input } from "~/components/ui/input";
import { Label } from "~/components/ui/label";
import { Textarea } from "~/components/ui/textarea";
// import {type Payment} from "./columns"
import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { DataTable } from "../../components/data-table";
import { columns } from "./columns";
import { BACKEND_URL } from "~/lib/config";

export async function loader() {
  const data = await fetch(BACKEND_URL + "/joboffer/api/v1/joboffers/", {
    method: "GET",
  });
  return json({
    jobOffers: await data.json(),
  });
}

export default function JobOffers() {
  const { jobOffers } = useLoaderData<typeof loader>();
  return (
    <div>
      <div className="flex justify-between w-full items-center pb-6 sm:px-4">
        <h1>Hello Job Offers</h1>
        <DialogDemo />
      </div>
      <div className="sm:px-4">
        <DataTable columns={columns} data={jobOffers} />
      </div>
    </div>
  );
}

export function DialogDemo() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">New</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>New Job Offer</DialogTitle>
          <DialogDescription>Create a new Job Offer here</DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Name
            </Label>
            <Input
              id="name"
              defaultValue="DevOps Engineer"
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="username" className="text-right">
              Description
            </Label>
            <Textarea
              id="description"
              // defaultValue="peduarte"
              className="col-span-3 h-44"
            />
            <p className="text-sm text-muted-foreground col-span-3 col-start-2">
              The content here will be rendered as Markdown.
            </p>
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="username" className="text-right">
              Salary
            </Label>
            <div className="col-span-3 flex gap-4">
              <Input className="" type="number" placeholder="min" />
              <Input className="" type="number" placeholder="max" />
            </div>
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="username" className="text-right">
              Mode
            </Label>
            <div className="col-span-3">
              <SelectDemo />
            </div>
          </div>
        </div>
        <DialogFooter>
          <Button type="submit">Save changes</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

export function SelectDemo() {
  return (
    <Select>
      <SelectTrigger className="w-full">
        <SelectValue placeholder="Select a mode" />
      </SelectTrigger>
      <SelectContent className="w-full">
        <SelectGroup>
          {/* <SelectLabel>Fruits</SelectLabel> */}
          <SelectItem value="in-office">In Office</SelectItem>
          <SelectItem value="remote">Remote</SelectItem>
          <SelectItem value="hybrid">Hybrid</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
