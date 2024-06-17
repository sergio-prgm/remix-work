import { Link } from "@remix-run/react";
import { cn } from "~/lib/utils";
// import { Icons } from "@/components/icons";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "~/components/ui/navigation-menu";
import { PropsWithChildren } from "react";
import { ModeToggle } from "~/components/mode-toggle";

const components: { title: string; to: string; description: string }[] = [
  {
    title: "Questions",
    to: "/docs/primitives/alert-dialog",
    description: "Consult the current list of available questions",
  },
  {
    title: "Create Questions",
    to: "/docs/primitives/alert-dialog",
    description:
      "Generate questions based on technology, type, difficulty level, and expected completion time.",
  },
  {
    title: "Questionnaires",
    to: "/docs/primitives/hover-card",
    description: "Manage the first interview questions for a candidate.",
  },
  {
    title: "Interview guide",
    to: "/docs/primitives/hover-card",
    description: "Leverage AI to help with relevant interview questions.",
  },
];

export function Navigation() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Process</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              <li className="row-span-3">
                <NavigationMenuLink asChild>
                  <Link
                    className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                    to="/"
                  >
                    {/* <Icons.logo className="h-6 w-6" /> */}
                    <span className="h-6 w-6 text-orange-500 font-black text-xl">
                      W
                    </span>
                    <div className="mb-2 mt-4 text-lg font-medium">
                      Workforce
                    </div>
                    <p className="text-sm leading-tight text-muted-foreground">
                      Manage your interview process from one place. Enhanced by
                      AI.
                    </p>
                  </Link>
                </NavigationMenuLink>
              </li>
              <ListItem to="/candidates" title="Candidates">
                Manage candidates, upload resumes and get instant information.
              </ListItem>
              <ListItem to="/joboffers" title="Job Offers">
                Create job offers, get an assessments of candidates&apos;
                skills.
              </ListItem>
              {/* <ListItem to="/docs" title="Introduction">
                Re-usable components built using Radix UI and Tailwind CSS.
              </ListItem>
              <ListItem to="/docs/installation" title="Installation">
                How to install dependencies and structure your app.
              </ListItem>
              <ListItem to="/docs/primitives/typography" title="Typography">
                Styles for headings, paragraphs, lists...etc
              </ListItem> */}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Questions</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
              {components.map((component) => (
                <ListItem
                  key={component.title}
                  title={component.title}
                  to={component.to}
                >
                  {component.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        {/* {process.env.NODE_ENV !== "production" ? ( */}
        <NavigationMenuItem>
          <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
            <Link to="/prompts">Prompts</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
        {/* ) : (
          <></>
        )} */}
        <NavigationMenuItem>
          <ModeToggle />
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

const ListItem = (
  props: PropsWithChildren<{
    className?: string;
    title: string;
    to: string;
  }>,
) => (
  <li>
    <NavigationMenuLink asChild>
      <Link
        to={props.to}
        className={cn(
          "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
          props.className,
        )}
      >
        <div className="text-sm font-medium leading-none">{props.title}</div>
        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
          {props.children}
        </p>
      </Link>
    </NavigationMenuLink>
  </li>
);
