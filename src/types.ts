import type { ReactNode } from "react";

export interface AccordionItemData {
  title: string;
  content: string;
}

export interface AboutItem {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  hasButton: boolean;
  button: string;
  buttonLink : string;
  newWindow : boolean;
  imageUrl: string;
}

