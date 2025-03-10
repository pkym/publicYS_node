export const setCache = (key, data) => {
  const cacheData = JSON.stringify(data);
  sessionStorage.setItem(key, cacheData);
};
 
export const getCache = (key) => {
  const data = sessionStorage.getItem(key);
  return data ? JSON.parse(data) : null;
};