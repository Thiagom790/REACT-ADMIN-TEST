import { Datagrid, List, ListProps, TextField } from "react-admin";

export function ListSheets(props: ListProps) {
  return (
    <List {...props}>
      <Datagrid rowClick="show">
        <TextField source="id" />
        <TextField source="driver" />
        <TextField source="message" />
      </Datagrid>
    </List>
  );
}
