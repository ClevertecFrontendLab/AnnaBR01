export const getCode = (search: string) => {
  const codeArray = search.split('?code=');

  return codeArray[1];
};
