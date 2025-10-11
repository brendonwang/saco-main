import * as React from "react";
import * as NavigationMenuPrimitive from "@radix-ui/react-navigation-menu";

import { cn } from "~/lib/utils";

const NavigationMenu = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Root>
>(({ className, children, ...props }, ref) => (
  <NavigationMenuPrimitive.Root
    ref={ref}
    className={cn(
      "relative z-30 flex max-w-max flex-1 items-center justify-center",
      className
    )}
    {...props}
  >
    <NavigationMenuPrimitive.List className="group flex flex-1 list-none items-center justify-center space-x-6 text-sm font-semibold text-neutral-600">
      {children}
    </NavigationMenuPrimitive.List>
    <NavigationMenuPrimitive.Viewport className="invisible absolute left-0 top-full hidden" />
  </NavigationMenuPrimitive.Root>
));
NavigationMenu.displayName = NavigationMenuPrimitive.Root.displayName;

const NavigationMenuItem = NavigationMenuPrimitive.Item;

const NavigationMenuLink = NavigationMenuPrimitive.Link;

export { NavigationMenu, NavigationMenuItem, NavigationMenuLink };
