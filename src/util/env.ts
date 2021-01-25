export const getDomain = () => {
  if (process.env.NODE_ENV === "development") {
    return "http://localhost:5000";
  } else {
    return "http://someotherurl.com";
  }
};
