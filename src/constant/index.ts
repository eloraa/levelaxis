export interface Link {
  label: string;
  href?: string;
  submenu?: Link[];
}

export const links = [
  {
    label: 'About Us',
    href: '#',
  },
  {
    label: 'Services',
    href: '#',
    submenu: [],
  },
  {
    label: 'Industries',
    href: '#',
    submenu: [],
  },
  {
    label: 'Resources',
    href: '#',
    submenu: [],
  },
  {
    label: 'Contact Us',
    href: '#',
  },
] satisfies Link[];
