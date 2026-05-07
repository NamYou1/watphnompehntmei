// API utility for fetching backend data
const BASE_URL = 'http://localhost:3000/api';

export async function fetchCategories(params = '') {
  return fetch(`${BASE_URL}/categories${params}`).then(r => r.json());
}
export async function fetchAuthors(params = '') {
  return fetch(`${BASE_URL}/authors${params}`).then(r => r.json());
}
export async function fetchMonks(params = '') {
  return fetch(`${BASE_URL}/monks${params}`).then(r => r.json());
}
export async function fetchActivities(params = '') {
  return fetch(`${BASE_URL}/activities${params}`).then(r => r.json());
}
export async function fetchArticles(params = '') {
  return fetch(`${BASE_URL}/articles${params}`).then(r => r.json());
}
export async function fetchTempleHistory(params = '') {
  return fetch(`${BASE_URL}/temple-history${params}`).then(r => r.json());
}
export async function fetchContactInfo() {
  return fetch(`${BASE_URL}/contact-info`).then(r => r.json());
}
export async function fetchFooter() {
  return fetch(`${BASE_URL}/footer`).then(r => r.json());
}
export async function fetchActivityPhotos(params = '') {
  return fetch(`${BASE_URL}/activity-photos${params}`).then(r => r.json());
}
