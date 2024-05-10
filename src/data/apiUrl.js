const proudctionUrl =
  "https://superhuman-factory-507648598f76.herokuapp.com/api";
const developmentUrl = "http://localhost:8080/api";

export const apiUrl =
  process.env.NODE_ENV === "development" ? developmentUrl : proudctionUrl;
