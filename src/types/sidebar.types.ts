import { ReactNode } from "react";

export type TSidebarItem =
  | {
      key: string;
      label: ReactNode;
      children?: TSidebarItem[];
      icon?: ReactNode;
    }
  | undefined;
