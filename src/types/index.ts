export interface NavLink {
  label: string;
  href: string;
}

export interface CounterItem {
  number: number;
  label: string;
}

export interface PropertyFeature {
  title: string;
  value: string;
}

export interface SiteConfig {
  name: string;
  description: string;
  address: string;
  contact: {
    phone: string;
    email: string;
  };
  socials: {
    name: string;
    href: string;
    icon: string;
  }[];
}
