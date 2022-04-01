import { Admin } from "react-admin";
import { extendedProvider } from "./providers/extendedProvider";
import { authProvider } from "./providers/authProvider";
import { DashboardResoucers } from "./resources/DashboardResources";
import { Resources } from "./resources";

export default function App() {
  return (
    <Admin
      authProvider={authProvider}
      dataProvider={extendedProvider}
      dashboard={DashboardResoucers}
    >
      {Resources}
    </Admin>
  );
}
