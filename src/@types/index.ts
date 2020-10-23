export interface APIUser {
  login: string;
  name: string;
  followers: number;
  following: number;
  public_repos: number;
  blog?: string;
  company?: string;
  email?: string;
  avatar_url: string;
  location?: string;
}

export interface APIRepo {
  name: string;
  id: number;
  owner: {
    login: string;
  };
  stargazers_count: number;
  html_url: string;
  forks: number;
  language?: string;
  description?: string;
}
