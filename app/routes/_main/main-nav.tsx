import { Link, NavLink } from "@remix-run/react";

// import { siteConfig } from "@/config/site"
import { cn } from "~/lib/utils";

export function MainNav() {
  // const pathname = usePathname()

  return (
    <div className="mr-4 hidden md:flex">
      <Link to="/" className="mr-6 flex items-center space-x-2">
        {/* <Icons.logo className="h-6 w-6" /> */}
        <span className="h-6 w-6 text-orange-500 font-black">W</span>
        <span className="hidden font-bold sm:inline-block">
          {/* {siteConfig.name} */}
          Workforce
        </span>
      </Link>
      <nav className="flex items-center gap-4 text-sm lg:gap-6">
        <NavLink
          to="/docs"
          className={({ isActive }) =>
            cn(
              "transition-colors hover:text-foreground/80",
              isActive ? "text-foreground" : "text-foreground/60",
            )
          }
        >
          Docs
        </NavLink>
        <NavLink
          to="/docs/components"
          className={({ isActive }) =>
            cn(
              "transition-colors hover:text-foreground/80",
              // pathname?.startsWith("/docs/components")
              isActive ? "text-foreground" : "text-foreground/60",
            )
          }
        >
          Components
        </NavLink>
        <NavLink
          to="/themes"
          className={({ isActive }) =>
            cn(
              "transition-colors hover:text-foreground/80",
              // pathname?.startsWith("/themes")
              isActive ? "text-foreground" : "text-foreground/60",
            )
          }
        >
          Themes
        </NavLink>
        <NavLink
          to="/examples"
          className={({ isActive }) =>
            cn(
              "transition-colors hover:text-foreground/80",
              // pathname?.startsWith("/examples")
              isActive ? "text-foreground" : "text-foreground/60",
            )
          }
        >
          Examples
        </NavLink>
        <NavLink
          to="/blocks"
          className={({ isActive }) =>
            cn(
              "transition-colors hover:text-foreground/80",
              // pathname?.startsWith("/blocks")
              isActive ? "text-foreground" : "text-foreground/60",
            )
          }
        >
          Blocks
        </NavLink>
        {/* <Link
          // href={siteConfig.links.github}
          to=""
          className={cn(
            "hidden text-foreground/60 transition-colors hover:text-foreground/80 lg:block",
          )}
        >
          GitHub
        </Link> */}
      </nav>
    </div>
  );
}
