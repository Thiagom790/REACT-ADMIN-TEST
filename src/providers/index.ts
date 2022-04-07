import { extendedProvider } from "./extendedProvider";
import { sheetsProvider } from "./sheetsProvider";
import { authProvider } from "./authProvider";

const defaultDataProvider = new Proxy(extendedProvider, {
  get: (target, prop) => {
    return function (resource: string, params: any) {
      if (typeof prop === "symbol" || prop === "then") {
        return;
      }

      if (resource === "sheets") {
        return sheetsProvider[prop](resource, params);
      }

      return target[prop](resource, params);
    };
  },
});

export { defaultDataProvider, authProvider, sheetsProvider, extendedProvider };
