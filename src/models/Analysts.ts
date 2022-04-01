export enum Roles {
  n1 = "n1",
  n2 = "n2",
}

export interface Analyst {
  email: string;
  id: number;
  password: string;
  roles: Roles[];
  user_id: number;
}
