import { ListUsers } from "./ListUsers";
import UserIcon from "@material-ui/icons/Person";
import { ShowUser } from "./ShowUser";
import { ResourceProps } from "../interfaces";

export const userResourceProps: ResourceProps = {
  name: "users",
  key: "users",
  list: ListUsers,
  show: ShowUser,
  icon: UserIcon,
};
