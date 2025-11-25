export default (baseUrl, url) => {
  const matchInternal = new RegExp(`^(\/)|(${baseUrl})`, "i");
  if (typeof url == 'undefined' || url == "#") {
    return false
  }
  return !matchInternal.test(url);
};
