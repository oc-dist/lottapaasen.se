import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const navigationLinks = [
  {
    name: "Om oss",
    url: "/",
  },
  {
    name: "Meny",
    url: "/sponsors",
  },
  {
    name: "Öppettider",
    url: "/practice-schedule",
  },
  {
    name: "Galleri",
    url: "/gallery",
  },
  {
    name: "Kontakta oss",
    url: "/contact",
  },
];

export default function Navigation() {
  const router = useRouter();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const isActiveLink = (url: string) => {
    if (url === "/" && router.pathname === "/") {
      return true;
    }
    return router.pathname === url;
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="relative">
      {/* Desktop Navigation */}
      <div className="hidden md:flex items-center space-x-1">
        {navigationLinks.map((link) => (
          <Link
            key={link.url}
            href={link.url}
            className={`px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200 hover:bg-primary/10 hover:text-primary ${
              isActiveLink(link.url)
                ? "bg-primary text-primary-foreground"
                : "text-foreground"
            }`}
          >
            {link.name}
          </Link>
        ))}
      </div>

      {/* Mobile Navigation Button */}
      <div className="md:hidden">
        <Button
          variant="ghost"
          size="sm"
          onClick={toggleMobileMenu}
          className="p-2"
          aria-label="Toggle navigation menu"
        >
          {isMobileMenuOpen ? (
            <X className="h-5 w-5" />
          ) : (
            <Menu className="h-5 w-5" />
          )}
        </Button>
      </div>

      {/* Mobile Navigation Menu */}
      {isMobileMenuOpen && (
        <div className="absolute top-full right-0 mt-2 w-48 bg-card border border-border rounded-md shadow-lg z-50 md:hidden">
          <div className="py-2">
            {navigationLinks.map((link) => (
              <Link
                key={link.url}
                href={link.url}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`block px-4 py-2 text-sm font-medium transition-colors duration-200 hover:bg-primary/10 hover:text-primary ${
                  isActiveLink(link.url)
                    ? "bg-primary text-primary-foreground"
                    : "text-foreground"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}