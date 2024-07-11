export interface TokenPayload_i {
  id: number;
  suffix: string | null;
  uuid: string;
  email: string;
  name: string;
  access_token: string;
}

export interface Login_i {
  email: string;
  password: string;
}
