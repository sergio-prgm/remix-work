import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "~/components/ui/breadcrumb";
import { Fragment } from "react/jsx-runtime";
import { CustomMatch } from "./route";

export function Breadcrumbs({ matches }: { matches: CustomMatch[] }) {
  return (
    <Breadcrumb>
      <BreadcrumbList className="px-4">
        {matches
          .filter((match) => match.handle && match.handle.breadcrumb)
          .map((match, index, arr) => (
            <Fragment key={index}>
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <BreadcrumbPage>
                    {match.handle.breadcrumb(arr.length === index + 1, match)}
                  </BreadcrumbPage>
                </BreadcrumbLink>
              </BreadcrumbItem>
              {index === arr.length - 1 ? <></> : <BreadcrumbSeparator />}
            </Fragment>
          ))}
        {/* {segments.map((segment, i) => {
          return (
            <Fragment key={i}>
              <BreadcrumbItem>
                {i === segments.length - 1 ? (
                  <BreadcrumbPage>{segment}</BreadcrumbPage>
                ) : (
                  <BreadcrumbLink asChild>
                    <Link
                      to={i !== 0 ? segments.slice(0, i + 1).join("/") : "/"}
                    >
                      {segment === "" ? "Home" : segment}
                    </Link>
                  </BreadcrumbLink>
                )}
              </BreadcrumbItem>
              {i === segments.length - 1 ? <></> : <BreadcrumbSeparator />}
            </Fragment>
          );
        })} */}
      </BreadcrumbList>
    </Breadcrumb>
  );
}
