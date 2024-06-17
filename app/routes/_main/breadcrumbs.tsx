import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "~/components/ui/breadcrumb";
import { Fragment } from "react/jsx-runtime";

import { Link, useLocation } from "@remix-run/react";

export function Breadcrumbs() {
  const location = useLocation();
  const segments = location.pathname.split("/");

  return (
    <Breadcrumb>
      <BreadcrumbList className="px-4">
        {segments.map((segment, i) => {
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
        })}
      </BreadcrumbList>
    </Breadcrumb>
  );
}
