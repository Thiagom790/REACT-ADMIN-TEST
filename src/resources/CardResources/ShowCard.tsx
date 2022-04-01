import {
  DateField,
  ReferenceField,
  Show,
  ShowProps,
  SimpleShowLayout,
  TextField,
} from "react-admin";

export function ShowCard(props: ShowProps) {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" />
        <TextField source="updatedAt" />
        <TextField source="status" />
        <TextField source="id" />
        <ReferenceField source="user_id" reference="users">
          <TextField source="id" />
        </ReferenceField>
        <TextField source="metadatas.name" />
      </SimpleShowLayout>
    </Show>
  );
}
