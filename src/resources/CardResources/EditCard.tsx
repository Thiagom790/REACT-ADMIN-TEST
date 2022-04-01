import { useState } from "react";
import {
  DateInput,
  Edit,
  EditProps,
  ReferenceInput,
  SelectInput,
  SimpleForm,
  TextInput,
} from "react-admin";
import {
  DrawerCardMetadata,
  DrawerButton,
} from "../../components/DrawerCardMetada";
import { SelectStatus } from "../../components/SelectStatusCard";

export function EditCard(props: EditProps) {
  const [isOpen, setOpen] = useState(false);

  const togleMetadataDrawer = () => setOpen(!isOpen);

  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput source="id" disabled />
        <ReferenceInput source="user_id" reference="users">
          <SelectInput optionText="name" disabled />
        </ReferenceInput>
        <DateInput source="createdAt" disabled />
        <TextInput source="updatedAt" disabled />
        <SelectStatus />
        <DrawerButton onClick={togleMetadataDrawer} />
        <DrawerCardMetadata isOpen={isOpen} onClose={togleMetadataDrawer} />
      </SimpleForm>
    </Edit>
  );
}
