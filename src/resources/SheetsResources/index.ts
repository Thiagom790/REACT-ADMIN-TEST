import SheetIcon from "@material-ui/icons/Description";
import { ResourceProps } from "../interfaces";
import { ListSheets } from "./ListSheets";
import { ShowSheet } from "./ShowSheet";

export const sheetsResourceProps: ResourceProps = {
  name: "sheets",
  key: "sheets",
  list: ListSheets,
  show: ShowSheet,
  icon: SheetIcon,
};
