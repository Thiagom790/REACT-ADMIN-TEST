import {
  Button,
  Card,
  CardContent,
  Drawer,
  Typography,
} from "@material-ui/core";
import { useRecordContext } from "react-admin";

interface DrawerCardMetadataProps {
  isOpen: boolean;
  onClose: () => void;
}

interface DrawerButtonProps {
  onClick: () => void;
}

export function DrawerButton({ onClick }: DrawerButtonProps) {
  return (
    <Button variant="contained" color="primary" onClick={onClick}>
      Abrir Metadados
    </Button>
  );
}

export function DrawerCardMetadata({
  isOpen,
  onClose,
}: DrawerCardMetadataProps) {
  const record = useRecordContext();
  const { name, digits, limit } = record["metadatas"];
  return (
    <Drawer open={isOpen} onClose={onClose} anchor="right">
      <Card style={{ margin: "1rem", padding: "0.5rem 2rem" }}>
        <CardContent>
          <Typography gutterBottom color="textSecondary">
            {name}
          </Typography>
          <Typography variant="h5" component="div">
            {digits}
          </Typography>
          <Typography color="textSecondary">{limit}</Typography>
        </CardContent>
      </Card>
    </Drawer>
  );
}
