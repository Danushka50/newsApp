export const API_URL = 'http://newsapi.org/v2/';
export const API_KEY = 'ff5291c616384faaa7f707deffc1a04e';

export const NEWS = `${API_URL}top-headlines?country=us&apiKey=${API_KEY}&pageSize=20`;
export const CATEGORY_NEWS = `${API_URL}sources?country=us&apiKey=${API_KEY}`;
