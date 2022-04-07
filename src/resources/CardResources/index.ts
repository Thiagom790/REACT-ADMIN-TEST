import CardIcon from "@material-ui/icons/CreditCard";
import { ResourceProps } from "../interfaces";
import { CreateCard } from "./CreateCard";
import { EditCard } from "./EditCard";
import { ListCards } from "./ListCards";
import { ShowCard } from "./ShowCard";

export const cardResourceProps: ResourceProps = {
  name: "cards",
  key: "cards",
  icon: CardIcon,
  list: ListCards,
  show: ShowCard,
  edit: EditCard,
  create: CreateCard,
};
