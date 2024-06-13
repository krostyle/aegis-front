"use client";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/app/components/ui/navigation-menu";

const Header: React.FC = () => {
  return (
    <header className="bg-background p-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-backgorund text-2xl font-bold">
          Fraud Management
        </div>
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuLink className="mx-4 hover:text-primary" href="/">
                Home
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink
                className="mx-4 hover:text-primary"
                href="/login"
              >
                Login
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink
                className="mx-4 hover:text-primary"
                href="/register"
              >
                Registrarse
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
          <NavigationMenuViewport />
        </NavigationMenu>
      </div>
    </header>
  );
};

export default Header;
