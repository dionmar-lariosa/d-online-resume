export interface Login_i {
  email: string;
  password: string;
}

export interface TokenPayload_i {
  id: number;
  uuid: string;
  email: string;
  suffix: string | null;
  name: string;
}
