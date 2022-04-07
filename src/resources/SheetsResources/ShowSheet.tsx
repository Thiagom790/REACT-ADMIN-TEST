import { Show, ShowProps, SimpleShowLayout, TextField } from "react-admin";

export function ShowSheet(props: ShowProps) {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField source="id" />
        <TextField source="driver" />
        <TextField source="message" />
      </SimpleShowLayout>
    </Show>
  );
}
