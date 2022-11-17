export const getItem = (key: string): any => {
  return JSON.parse(localStorage.getItem(key)!);
};

export const setItem = (key: string, data: any) => {
  return localStorage.setItem(key, JSON.stringify(data));
};
