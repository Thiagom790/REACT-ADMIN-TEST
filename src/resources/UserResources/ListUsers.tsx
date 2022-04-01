import {
  Datagrid,
  EmailField,
  List,
  ListProps,
  ShowButton,
  TextField,
} from "react-admin";
import { AgeField } from "../../components/AgeField";

export function ListUsers(props: ListProps) {
  return (
    <List {...props}>
      <Datagrid rowClick="show">
        <TextField source="id" />
        <TextField source="name" />
        <EmailField source="email" />
        <AgeField source="BirthDate" />
        <TextField source="salaryBase" />
        <ShowButton />
      </Datagrid>
    </List>
  );
}
