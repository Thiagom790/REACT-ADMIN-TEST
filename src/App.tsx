import { Admin } from "react-admin";
import { DashboardResoucers } from "./resources/DashboardResources";
import { Resources } from "./resources";
import { defaultDataProvider, authProvider } from "./providers";

export default function App() {
  return (
    <Admin
      authProvider={authProvider}
      dataProvider={defaultDataProvider}
      dashboard={DashboardResoucers}
    >
      {Resources}
    </Admin>
  );
}
