import { SelectInput, useRecordContext } from "react-admin";

interface choiceInterface {
  id: string;
  text: string;
}

export function SelectStatus() {
  const record = useRecordContext();
  const status = record["status"];

  const choicesStatus: choiceInterface[] = [
    {
      id: "requested",
      text: "Solicitado",
    },
    {
      id: "approved",
      text: "Aprovar",
    },
    {
      id: "rejected",
      text: "Rejeitar",
    },
  ];

  const validateChoices = (choice: choiceInterface) => {
    if (choice.id === "requested") {
      return {
        status: "Os status válidos são apenas Aprovar/Reijeita",
      };
    }
  };

  return (
    <SelectInput
      disabled={status !== "requested"}
      source="status"
      choices={choicesStatus}
      optionText="text"
      optionValue="id"
      validate={validateChoices}
    />
  );
}
