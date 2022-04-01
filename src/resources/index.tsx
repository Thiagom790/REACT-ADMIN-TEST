import { Resource } from "react-admin";
import { Roles } from "../models/Analysts";
import { auditResourceProps } from "./AuditResources";
import { cardResourceProps } from "./CardResources";
import { userResourceProps } from "./UserResources";

const resourcesProps = [
  auditResourceProps,
  cardResourceProps,
  userResourceProps,
];

export function Resources(permissions: Roles[]) {
  let resources: JSX.Element[] = [];

  resourcesProps.forEach((props) => {
    const roles = props.roles;

    if (!roles || !roles.length) {
      return resources.push(<Resource {...props} />);
    }

    const userHasPermission = roles.some((role) => permissions.includes(role));

    if (!userHasPermission) return;

    resources.push(<Resource {...props} />);
  });

  return resources;
}
