export const GITHUB_API_URL = 'https://api.github.com';
export const GITHUB_API_KEY = import.meta.env.VITE_GITHUB_API_KEY;

export const HEADERS = Object.freeze({
  'Content-Type': 'application/json',
  Accept: 'application/vnd.github.v3+json',
  Authorization: `Bearer ${GITHUB_API_KEY}`,
});
