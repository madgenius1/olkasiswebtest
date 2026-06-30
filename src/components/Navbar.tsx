"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FiMenu, FiX, FiChevronDown } from "react-icons/fi";
import Button from "./ui/Button";
import { cn } from "@/lib/utils";

const navItems = [
  {
    label: "Products",
    href: "/products/olkasis-app",
    children: [
      { label: "Olkasis App", href: "/products/olkasis-app" },
      { label: "ETFs", href: "/products/etfs" },
      { label: "Asset Management", href: "/products/asset-management" },
      { label: "Wealth Advisory", href: "/products/wealth-advisory" },
    ],
  },
  {
    label: "Who We Serve",
    href: "/who-we-serve/individuals",
    children: [
      { label: "Individuals", href: "/who-we-serve/individuals" },
      { label: "Institutions", href: "/who-we-serve/institutions" },
      { label: "Diaspora", href: "/who-we-serve/diaspora" },
      { label: "Financial Advisors", href: "/who-we-serve/advisors" },
    ],
  },
  { label: "Regulatory", href: "/regulatory" },
  {
    label: "Company",
    href: "/about",
    children: [
      { label: "Our Story", href: "/about" },
      { label: "Contact Us", href: "/contact" },
      { label: "Partner With Us", href: "/partners" },
    ],
  },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const isHome = pathname === "/";

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled || !isHome
          ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100"
          : "bg-transparent",
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <Link href="/" className="flex items-center gap-2 shrink-0">
            {/* <div className="w-8 h-8 bg-forest rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">O</span>
            </div> */}
            <div>
              <div
                className={cn(
                  "font-bold text-xl leading-none transition-colors",
                  scrolled || !isHome ? "text-[#0a4f3c]" : "text-white",
                )}
              >
                Olkasis Capital
              </div>
              <div className="text-xs pt-1 leading-none text-[#c9a84c]">
                Olkasis App · Investment · Wealth
              </div>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() =>
                  item.children && setActiveDropdown(item.label)
                }
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  href={item.href}
                  className={cn(
                    "flex items-center gap-1 px-4 py-2 rounded-full text-sm font-medium transition-colors",
                    scrolled || !isHome
                      ? "text-gray-700 hover:text-forest hover:bg-gray-50"
                      : "text-white/90 hover:text-white hover:bg-white/10",
                  )}
                >
                  {item.label}
                  {item.children && <FiChevronDown className="w-3.5 h-3.5" />}
                </Link>
                {item.children && activeDropdown === item.label && (
                  <div className="absolute top-full left-0 mt-1 w-52 bg-white rounded-2xl shadow-xl border border-gray-100 py-2 z-50">
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="block px-4 py-2.5 text-sm text-gray-700 hover:text-[#0a4f3c] hover:bg-[#f8f5ef] transition-colors"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-3">
            <Link href="/investor-relations" className="cursor-pointer">
              <Button
                variant="ghost"
                size="md"
                className={cn(
                  !(scrolled || !isHome) && "text-white hover:bg-white/10 px-6",
                )}
              >
                Investors
              </Button>
            </Link>
            <Link href="/products/zanari" className="cursor-auto">
              <Button size="md" className="px-6">Join Waitlist</Button>
            </Link>
          </div>

          <button
            className={cn(
              "lg:hidden p-2 rounded-lg transition-colors",
              scrolled || !isHome ? "text-gray-700" : "text-white",
            )}
            onClick={() => setOpen(!open)}
          >
            {open ? (
              <FiX className="w-6 h-6" />
            ) : (
              <FiMenu className="w-6 h-6" />
            )}
          </button>
        </div>

        {open && (
          <div className="lg:hidden bg-white border-t border-gray-100 py-4 min-h-screen space-y-1">
            {navItems.map((item) => (
              <div key={item.label}>
                <Link
                  href={item.href}
                  className="block px-4 py-2.5 text-sm font-medium text-gray-800 hover:text-[#0a4f3c] hover:bg-[#f8f5ef] rounded-lg"
                >
                  {item.label}
                </Link>
                {item.children && (
                  <div className="ml-4 mt-1 space-y-1">
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="block px-4 py-2 text-sm text-gray-600 hover:text-[#0a4f3c] hover:bg-[#f8f5ef] rounded-lg"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className="px-4 py-6 flex flex-col gap-2">
              <Link href="/investor-relations">
                <Button variant="outline" size="lg" className="w-full">
                  Investors
                </Button>
              </Link>
              <Link href="/products/zanari">
                <Button size="lg" className="w-full">
                  Join Waitlist
                </Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
