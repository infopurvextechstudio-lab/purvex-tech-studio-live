export interface NavChild {
  title: string;
  href: string;
}

export interface NavItem {
  title: string;
  href?: string;
  children?: NavChild[];
}

export const navigation: NavItem[] = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "About",
    href: "/about",
  },
  {
    title: "Services",
    children: [
      {
        title: "Career Branding",
        href: "/services/career-branding",
      },
      {
        title: "Business Solutions",
        href: "/services/business-solutions",
      },
    ],
  },
  {
    title: "Portfolio",
    href: "/portfolio",
  },
  {
    title: "Pricing",
    href: "/pricing",
  },
  {
    title: "Blog",
    href: "/blog",
  },
  {
    title: "Contact",
    href: "/contact",
  },
];