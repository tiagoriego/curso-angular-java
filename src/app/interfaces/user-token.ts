export interface AccessToken {
  accessToken: string;
  user: User;
}

export interface User {
  email: string;
  name: string;
  rules: string[];
  id: number;
}
