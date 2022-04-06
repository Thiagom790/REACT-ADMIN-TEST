import {
  Create,
  CreateProps,
  NumberInput,
  Record,
  ReferenceInput,
  SelectInput,
  SimpleForm,
  TextInput,
} from "react-admin";

export function CreateCard(props: CreateProps) {
  const transform = (data: Record) => ({
    ...data,
    createdAt: new Date(),
    updatedAt: null,
    status: "requested",
  });

  return (
    <Create {...props} transform={transform}>
      <SimpleForm>
        <ReferenceInput label="User" source="user_id" reference="users">
          <SelectInput optionText="name" />
        </ReferenceInput>
        <TextInput source="metadatas.name" label="Card Name" />
        <NumberInput source="metadatas.digits" label="Digits" />
        <NumberInput source="metadatas.limits" label="Limits" />
      </SimpleForm>
    </Create>
  );
}
