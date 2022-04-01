import { Datagrid, List, ListProps, TextField, DateField } from "react-admin";

export function ListAudits(props: ListProps) {
  return (
    <List {...props}>
      <Datagrid rowClick="show">
        <TextField source="id" />
        <TextField source="requestedBy" />
        <TextField source="type" />
        <DateField source="createdAt" />
      </Datagrid>
    </List>
  );
}
