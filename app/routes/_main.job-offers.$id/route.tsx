import { ActionFunctionArgs, LoaderFunctionArgs, json } from "@remix-run/node";
import { Link, redirect, useLoaderData } from "@remix-run/react";
import Markdown from "react-markdown";
import { Button } from "~/components/ui/button";
import { Slider } from "~/components/ui/slider";
import { BACKEND_URL } from "~/lib/config";
import { cn } from "~/lib/utils";

export async function loader({ params }: LoaderFunctionArgs) {
  const id = params.id;
  const data = await fetch(BACKEND_URL + `/joboffer/api/v1/joboffers/${id}`, {
    method: "GET",
    cache: "force-cache",
  });
  return json({ id, jobOffer: await data.json() });
}

export async function action({ request }: ActionFunctionArgs) {
  const data = await fetch("", {
    method: "POST",
  });
  console.log(await data.json());
  return redirect("/");
  // return redirect(`/job-offers/${}`)
}

export const handle = {
  breadcrumb: (disabled: boolean, { data }: { data: typeof loader }) => {
    console.log(data);
    return disabled ? (
      <Button variant="link" disabled className="cursor-default">
        {data.jobOffer.name}
      </Button>
    ) : (
      <Button variant="link" asChild>
        <Link to="/candidates/new">{data.name}</Link>
      </Button>
    );
  },
};
const typeClasses = {
  h2: "scroll-m-20  pb-2 text-3xl font-semibold tracking-tight first:mt-0",
  h3: "scroll-m-20 text-2xl font-semibold tracking-tight",
  p: "leading-7 [&:not(:first-child)]:mt-6 text-md",
  ul: "my-6 ml-6 list-disc [&>li]:mt-2",
};

// const formatChildren = (element: keyof typeof typeClasses) => {
//   return typeClasses[element].split(" ").map((cl) => `[&>${element}]:${cl}`);
//   // .join(" ");
// };

export default function JobOfferDetails() {
  const { id, jobOffer } = useLoaderData<typeof loader>();
  console.log(jobOffer);
  return (
    <div className="px-4">
      <div className="pb-2 border-b grid grid-cols-3">
        <div className="col-span-2">
          <h2 className={typeClasses.h2}>{jobOffer.name}</h2>
          <strong>
            {jobOffer.min_salary}€ - {jobOffer.max_salary}€
          </strong>
        </div>
        <Button variant="link" className="block w-fit col-span-1" asChild>
          <Link to={`/job-offers/${id}/assessments`}>Top Candidates</Link>
        </Button>
      </div>
      <div className="grid grid-cols-6 gap-8">
        {/* <div
        className={`${formatChildren("p")} ${formatChildren("h2")} ${formatChildren("h3")}`}
      > */}
        <div
          className={cn(
            "col-span-4 pt-6",
            "[&>h2]:scroll-m-20 [&>h2]:pb-1 [&>h2]:text-3xl [&>h2]:font-semibold [&>h2]:tracking-tight [&>h2]:first:mt-0",
            "[&>h3]:scroll-m-20 [&>h3]:text-2xl [&>h3]:font-semibold [&>h3]:tracking-tight",
            "[&>p]:[&:not(:first-child)]:mt-4 [&>p]:mb-6 [&>p]:text-md",
            "[&>ul]:mt-4 [&>ul]:mb-6 [&>ul]:ml-6 [&>ul]:list-disc [&>ul]:[&>li]:mt-2",
          )}
        >
          <Markdown
          // className={cn(
          //   ...formatChildren("h2"),
          //   ...formatChildren("h3"),
          //   ...formatChildren("p"),
          // )}
          >
            {jobOffer.description}
          </Markdown>
        </div>
        <div className="py-6 col-span-2 space-y-4">
          {/* <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
            Actions
          </h3> */}
          <Button>Analyze resumes</Button>
          <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
            Skills
          </h3>
          <ul>
            {jobOffer.skills.map(
              (skill: { id: number; name: string; weight: number }) => (
                <li key={skill.id} className="pb-4 leading-tight">
                  {skill.name}{" "}
                  <Slider
                    max={100}
                    step={1}
                    defaultValue={[skill.weight]}
                    className="pt-4 w-[60%]"
                  />
                </li>
              ),
            )}
          </ul>
        </div>
      </div>
      {/* </div> */}
    </div>
  );
}
