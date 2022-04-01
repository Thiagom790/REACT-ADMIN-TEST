import {
  DateField,
  NumberField,
  Show,
  ShowProps,
  SimpleShowLayout,
  TextField,
} from "react-admin";

export function ShowAudits(props: ShowProps) {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField source="id" />
        <DateField source="createdAt" />
        <TextField source="type" />
        <DateField source="before.createdAt" />
        <DateField source="after.createdAt" />
        <NumberField source="requestedBy" />
      </SimpleShowLayout>
    </Show>
  );
}
