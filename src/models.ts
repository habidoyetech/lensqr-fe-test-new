import { IconType } from "react-icons";

export interface SideBarLinkObject {
  id: number;
  logo: HTMLElement & SVGAElement | any;
  linkName: string;
  arrow: boolean;
}

export interface SideBarCategoryObject {
  id: number;
  name: string;
  link: SideBarLinkObject[];
}