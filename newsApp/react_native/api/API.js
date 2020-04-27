export const PROTOCOL = 'http://';
export const HOST = 'newsapi.org/v2/';
export const API_TOKEN = 'ff5291c616384faaa7f707deffc1a04e'
export const PAGE_SIZE = '20'

export const NEWS = `${PROTOCOL}${HOST}top-headlines?country=us&apiKey=${API_TOKEN}&pageSize=${PAGE_SIZE}`;
export const CATEGORY_NEWS = `${PROTOCOL}${HOST}sources?country=us&apiKey=${API_TOKEN}`;



