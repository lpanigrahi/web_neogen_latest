export interface Role {
  slug: string;
  title: string;
  headline: string;
  subhead: string;
  outcomes: string[];
  cta: { label: string; href: string };
}

export const roles: Role[] = [];
