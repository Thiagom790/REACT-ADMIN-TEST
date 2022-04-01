import { Roles } from "../models/Analysts";

export interface ResourceProps {
  name: string;
  key: string;
  roles?: Roles[];
  icon?: any;
  list?: (props: any) => JSX.Element;
  show?: (props: any) => JSX.Element;
  edit?: (props: any) => JSX.Element;
}
