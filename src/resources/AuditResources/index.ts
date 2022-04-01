import { ListAudits } from "./ListAudits";
import AuditIcon from "@material-ui/icons/History";
import { ShowAudits } from "./ShowAudits";
import { ResourceProps } from "../interfaces";
import { Roles } from "../../models/Analysts";

export const auditResourceProps: ResourceProps = {
  name: "audits",
  key: "audits",
  roles: [Roles.n2],
  icon: AuditIcon,
  list: ListAudits,
  show: ShowAudits,
};
