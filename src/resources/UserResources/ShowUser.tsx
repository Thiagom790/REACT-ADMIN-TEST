import {
  BooleanField,
  DateField,
  EmailField,
  NumberField,
  Show,
  ShowProps,
  SimpleShowLayout,
  TextField,
} from "react-admin";
import { AgeField } from "../../components/AgeField";

export function ShowUser(props: ShowProps) {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField source="name" />
        <EmailField source="email" />
        <DateField source="BirthDate" />
        <AgeField source="BirthDate" showLabel={true} />
        <DateField source="createdAt" />
        <TextField source="updatedAt" />
        <TextField source="enabledFeatures" />
        <NumberField source="document" />
        <BooleanField source="metadatas.validDocument" />
        <NumberField source="address.streetNumber" />
        <NumberField source="salaryBase" />
        <TextField source="id" />
      </SimpleShowLayout>
    </Show>
  );
}
