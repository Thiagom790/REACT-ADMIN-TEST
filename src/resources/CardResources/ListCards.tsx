import {
  Datagrid,
  EditButton,
  List,
  ListProps,
  ReferenceField,
  ReferenceInput,
  SelectInput,
  ShowButton,
  TextField,
  TextInput,
} from "react-admin";

const ListCardsFilter = [
  <TextInput source="q" label="Search" alwaysOn />,
  <ReferenceInput source="user_id" label="owner" reference="users" allowEmpty>
    <SelectInput optionText="name" />
  </ReferenceInput>,
];

export function ListCards(props: ListProps) {
  return (
    <List {...props} filters={ListCardsFilter}>
      <Datagrid>
        <TextField source="id" />
        <ReferenceField label="owner" source="user_id" reference="users">
          <TextField source="name" />
        </ReferenceField>
        <TextField source="status" />
        <TextField source="metadatas.digits" />
        <TextField source="metadatas.limit" />
        <ShowButton />
        <EditButton />
      </Datagrid>
    </List>
  );
}
