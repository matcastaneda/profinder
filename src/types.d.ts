export type ThemeType = 'light' | 'dark' | 'system';

export interface ThemeItemInterface {
  label: string;
  icon: JSX.Element;
  theme: ThemeType;
}

export type LanguageType = 'en' | 'es';

export interface LanguageList {
  name: string;
  code: LanguageType;
  image: string;
}

export type Profile = Pick<
  UserResponse,
  | 'id'
  | 'login'
  | 'name'
  | 'avatar_url'
  | 'html_url'
  | 'bio'
  | 'public_repos'
  | 'public_gists'
  | 'followers'
  | 'following'
  | 'created_at'
  | 'type'
>;

export type Metrics = Pick<
  Profile,
  'public_repos' | 'public_gists' | 'followers' | 'following'
>;

export type Repo = Pick<
  RepoResponse,
  | 'id'
  | 'name'
  | 'full_name'
  | 'description'
  | 'html_url'
  | 'homepage'
  | 'stargazers_count'
  | 'watchers_count'
  | 'forks_count'
  | 'fork'
  | 'is_template'
  | 'created_at'
  | 'updated_at'
>;

export type RepoType = 'public' | 'fork' | 'template';

export type Gist = Pick<
  GistResponse,
  'id' | 'description' | 'files' | 'html_url' | 'created_at' | 'updated_at'
>;

export interface File {
  filename: string;
}

export type Files = Record<string, File>;

export type User = Pick<
  Profile,
  'id' | 'login' | 'name' | 'avatar_url' | 'html_url' | 'type'
>;

export interface UserResponse {
  login: string;
  id: number;
  node_id: string;
  avatar_url: string;
  gravatar_id: string;
  url: string;
  html_url: string;
  followers_url: string;
  following_url: string;
  gists_url: string;
  starred_url: string;
  subscriptions_url: string;
  organizations_url: string;
  repos_url: string;
  events_url: string;
  received_events_url: string;
  type: string;
  site_admin: boolean;
  name: string;
  company: null;
  blog: string;
  location: string;
  email: null;
  hireable: null;
  bio: string;
  twitter_username: null;
  public_repos: number;
  public_gists: number;
  followers: number;
  following: number;
  created_at: string;
  updated_at: string;
}

export interface RepoResponse {
  id: number;
  node_id: string;
  name: string;
  full_name: string;
  private: boolean;
  owner: User;
  html_url: string;
  description?: string;
  fork: boolean;
  url: string;
  forks_url: string;
  keys_url: string;
  collaborators_url: string;
  teams_url: string;
  hooks_url: string;
  issue_events_url: string;
  events_url: string;
  assignees_url: string;
  branches_url: string;
  tags_url: string;
  blobs_url: string;
  git_tags_url: string;
  git_refs_url: string;
  trees_url: string;
  statuses_url: string;
  homepage?: string;
  is_template: boolean;
  languages_url: string;
  stargazers_count: number;
  watchers_count: number;
  forks_count: number;
  open_issues_count: number;
  forks: number;
  open_issues: number;
  watchers: number;
  default_branch: string;
  permissions: Permissions;
  score: number;
  created_at: string;
  updated_at: string;
}

export interface GistResponse {
  url: string;
  forks_url: string;
  commits_url: string;
  id: string;
  node_id: string;
  git_pull_url: string;
  git_push_url: string;
  html_url: string;
  files: Files;
  public: boolean;
  created_at: string;
  updated_at: string;
  description: string;
  comments: number;
  user?: null;
  comments_url: string;
  owner: Owner;
  truncated: boolean;
}
