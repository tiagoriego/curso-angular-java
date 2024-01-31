export interface AccessToken {
  accessToken: string;
  user: User;
}

export interface User {
  email: string;
  name: string;
  rules: number[];
  id: number;
}
