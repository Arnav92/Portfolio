import { Link, useLocation } from "wouter";
import { cn } from "@/lib/utils";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const navigation = [
  { name: "Home", href: "/" },
  { name: "Projects", href: "/projects" },
  { name: "About", href: "/about" },
  // { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [location] = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
      <nav className="border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-8">
            <div className="flex">
              <div className="flex-shrink-0 flex items-center">
                <span className="text-xl font-bold">Portfolio</span>
              </div>
              {/* Desktop menu */}
              <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                {navigation.map((item) => (
                    <Link key={item.href} href={item.href}>
                      <a
                          className={cn(
                              "inline-flex items-center px-1 pt-1 border-b-2",
                              location === item.href
                                  ? "border-primary text-primary font-medium"
                                  : "border-transparent text-muted-foreground hover:text-foreground"
                          )}
                      >
                        {item.name}
                      </a>
                    </Link>
                ))}
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="sm:hidden flex items-center">
              <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                <Menu className="h-6 w-6" />
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
            <div className="sm:hidden border-t">
              <div className="pt-2 pb-3 space-y-1">
                {navigation.map((item) => (
                    <Link key={item.href} href={item.href}>
                      <a
                          className={cn(
                              "block pl-3 pr-4 py-2 text-base font-medium",
                              location === item.href
                                  ? "border-l-4 border-primary text-primary bg-primary/5"
                                  : "border-l-4 border-transparent text-muted-foreground hover:text-foreground hover:bg-muted"
                          )}
                          onClick={() => setMobileMenuOpen(false)}
                      >
                        {item.name}
                      </a>
                    </Link>
                ))}
              </div>
            </div>
        )}
      </nav>
  );
}