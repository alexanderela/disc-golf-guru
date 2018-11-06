export const fetchData = async url => {
  const response = await fetch(url);
  const responseJson = await response.json();
  return responseJson;
};
