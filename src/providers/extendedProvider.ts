import jsonServerProvider from "ra-data-json-server";
import { serverUrl } from "./serverUrl";

const provider = jsonServerProvider(serverUrl);

export const extendedProvider = {
  ...provider,
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
