import jsonServerProvider from "ra-data-json-server";
import { fetchUtils } from "react-admin";
import { serverUrl } from "./serverUrl";

const provider = jsonServerProvider(serverUrl);
const httpClient = fetchUtils.fetchJson;

export const extendedProvider = {
  ...provider,
  create: async (resource: string, params: any): Promise<any> => {
    const url = `${serverUrl}/${resource}`;

    const response = await httpClient(url, {
      method: "POST",
      body: JSON.stringify(params.data),
    });

    const data = JSON.parse(response.body);

    return { data };
  },
  update: async (resource: string, params: any): Promise<any> => {
    if (resource === "cards") {
      const { data: card, previousData: previusCard } = params;

      card.updatedAt = new Date();

      const audit = {
        createdAt: new Date(),
        type: "card-status-change",
        requestedBy: 11112,
        before: previusCard,
        after: card,
      };

      await provider.create("audits", { data: audit });

      params.data = card;
    }

    return await provider.update(resource, { ...params });
  },
};
