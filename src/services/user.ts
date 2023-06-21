import http from 'config';
import { type Gist, type RepoResponse, type UserResponse } from 'types';

export const fetchProfile = async (username: string) => {
  const response = await http.get<UserResponse>(`/users/${username}`);
  return response.data;
};

export const fetchRepositories = async (username: string) => {
  const response = await http.get<RepoResponse[]>(`/users/${username}/repos`);
  return response.data;
};

export const fetchGists = async (username: string) => {
  const response = await http.get<Gist[]>(`/users/${username}/gists`);
  return response.data;
};

export const fetchFollowers = async (username: string) => {
  const response = await http.get<UserResponse[]>(
    `/users/${username}/followers`,
  );
  return response.data;
};

export const fetchFollowing = async (username: string) => {
  const response = await http.get<UserResponse[]>(
    `/users/${username}/following`,
  );
  return response.data;
};
