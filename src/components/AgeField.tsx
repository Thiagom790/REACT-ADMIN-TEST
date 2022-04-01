import { useRecordContext, Labeled } from "react-admin";
import { getAge } from "../utils/date";

interface AgeFieldProps {
  source: string;
  showLabel?: boolean;
}

export function AgeField({ source, showLabel = false }: AgeFieldProps) {
  const record = useRecordContext();
  let age = "";
  const ageNumber = getAge(record[source]);
  if (ageNumber <= 1) {
    age = ageNumber + " ano";
  } else {
    age = ageNumber + " anos";
  }

  return showLabel ? (
    <Labeled label="age">
      <span>{age}</span>
    </Labeled>
  ) : (
    <span>{age}</span>
  );
}
