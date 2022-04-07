import jsonServerProvider from "ra-data-json-server";
import { DataProvider, fetchUtils, Identifier } from "react-admin";

/*
 * Api que permit usar uma planilha do google como banco de dados
 * https://sheetdb.io
 */
const url = "https://sheetdb.io/api/v1/123uemno06r33";

const provider = jsonServerProvider(url);
const httpClient = fetchUtils.fetchJson;

export const sheetsProvider: DataProvider = {
  ...provider,
  getList: async (resource, params) => {
    const response = await httpClient(url);
    const data = JSON.parse(response.body);

    return { data, total: data.length };
  },
  getOne: async (resource, params) => {
    const { id } = params;
    const response = await httpClient(url);

    const data = JSON.parse(response.body);

    const record = data.find((rec: { id: Identifier }) => rec.id === id);

    return { data: record };
  },
};
