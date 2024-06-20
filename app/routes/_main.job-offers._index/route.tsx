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
import { DataTable } from "./data-table";
import { columns } from "./columns";

export async function loader() {
  return json({
    jobOffers: [
      {
        id: 1,
        name: "Software Engineer",
        max_salary: 120000,
        min_salary: 80000,
        qualified: 28,
        unqualified: 22,
        created_at: "2024-01-01",
      },
      {
        id: 2,
        name: "Data Scientist",
        max_salary: 150000,
        min_salary: 100000,
        qualified: 35,
        unqualified: 15,
        created_at: "2024-01-05",
      },
      {
        id: 3,
        name: "Product Manager",
        max_salary: 180000,
        min_salary: 120000,
        qualified: 40,
        unqualified: 10,
        created_at: "2024-01-10",
      },
      {
        id: 4,
        name: "Marketing Manager",
        max_salary: 160000,
        min_salary: 100000,
        qualified: 32,
        unqualified: 18,
        created_at: "2024-01-15",
      },
      {
        id: 5,
        name: "Sales Representative",
        max_salary: 140000,
        min_salary: 90000,
        qualified: 25,
        unqualified: 25,
        created_at: "2024-01-20",
      },
      {
        id: 6,
        name: "HR Manager",
        max_salary: 130000,
        min_salary: 90000,
        qualified: 30,
        unqualified: 20,
        created_at: "2024-01-25",
      },
      {
        id: 7,
        name: "Operations Manager",
        max_salary: 160000,
        min_salary: 120000,
        qualified: 38,
        unqualified: 12,
        created_at: "2024-02-01",
      },
      {
        id: 8,
        name: "Financial Analyst",
        max_salary: 120000,
        min_salary: 80000,
        qualified: 28,
        unqualified: 22,
        created_at: "2024-02-05",
      },
      {
        id: 9,
        name: "IT Support Specialist",
        max_salary: 100000,
        min_salary: 60000,
        qualified: 25,
        unqualified: 25,
        created_at: "2024-02-10",
      },
      {
        id: 10,
        name: "Graphic Designer",
        max_salary: 90000,
        min_salary: 60000,
        qualified: 20,
        unqualified: 30,
        created_at: "2024-02-15",
      },
      {
        id: 11,
        name: "Web Developer",
        max_salary: 110000,
        min_salary: 80000,
        qualified: 30,
        unqualified: 20,
        created_at: "2024-02-20",
      },
      {
        id: 12,
        name: "Digital Marketing Specialist",
        max_salary: 130000,
        min_salary: 100000,
        qualified: 35,
        unqualified: 15,
        created_at: "2024-02-25",
      },
      {
        id: 13,
        name: "Business Analyst",
        max_salary: 140000,
        min_salary: 110000,
        qualified: 38,
        unqualified: 12,
        created_at: "2024-03-01",
      },
      {
        id: 14,
        name: "Accountant",
        max_salary: 100000,
        min_salary: 70000,
        qualified: 25,
        unqualified: 25,
        created_at: "2024-03-05",
      },
      {
        id: 15,
        name: "Data Analyst",
        max_salary: 110000,
        min_salary: 80000,
        qualified: 32,
        unqualified: 18,
        created_at: "2024-03-10",
      },
      {
        id: 16,
        name: "IT Project Manager",
        max_salary: 160000,
        min_salary: 120000,
        qualified: 40,
        unqualified: 10,
        created_at: "2024-03-15",
      },
      {
        id: 17,
        name: "Quality Assurance Engineer",
        max_salary: 120000,
        min_salary: 90000,
        qualified: 35,
        unqualified: 15,
        created_at: "2024-03-20",
      },
      {
        id: 18,
        name: "Network Administrator",
        max_salary: 100000,
        min_salary: 70000,
        qualified: 25,
        unqualified: 25,
        created_at: "2024-03-25",
      },
      {
        id: 19,
        name: "Cybersecurity Specialist",
        max_salary: 140000,
        min_salary: 110000,
        qualified: 38,
        unqualified: 10,
        created_at: "2024-05-22",
      },
    ],
  });
}

export default function Candidates() {
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
