import { fetchUtils, HttpError } from "react-admin";
import { serverUrl } from "./serverUrl";
import { Analyst } from "../models/Analysts";

interface loginParams {
  username: string;
  password: string;
}

const httpClient = fetchUtils.fetchJson;
const baseUrl = `${serverUrl}/analysts`;

export const authProvider = {
  login: async ({ username, password }: loginParams) => {
    const response = await httpClient(baseUrl);
    const { json: analysts } = response;

    const analyst = analysts.find(
      (analyst: Analyst) =>
        analyst.email === username && analyst.password === password
    );

    if (!analyst) {
      throw new HttpError("Email ou senha incorretor", 404);
    }

    localStorage.setItem("roles", JSON.stringify(analyst.roles));

    return analyst;
  },
  logout: () => {
    localStorage.removeItem("roles");
    return Promise.resolve();
  },
  checkError: ({ status }: { status: number }) => {
    if (status === 401 || status === 403) {
      localStorage.removeItem("roles");
      return Promise.reject();
    }
    return Promise.resolve();
  },
  checkAuth: () => {
    return localStorage.getItem("roles") ? Promise.resolve() : Promise.reject();
  },
  getPermissions: () => {
    const jsonRoles = localStorage.getItem("roles");

    if (!jsonRoles) return Promise.reject();

    const roles = JSON.parse(jsonRoles);

    return Promise.resolve(roles);
  },
};
