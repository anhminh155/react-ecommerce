import { API_URL } from "./contants";

// function createHeaders(headers) {
//   const token = Utils.getValueLocalStorage("token");
//   const newHeaders = {
//     Authorization: token ? `Bearer ${token}` : "",
//     Accept: "application/json",
//     "Content-Type": "application/json",
//     ...headers,
//   };
//   return newHeaders;
// }
// export default class Http {
//   static get(url, headers) {
//     const newHeaders = createHeaders(headers);
//     return fetch("https://fakestoreapi.com/products/7", {});
//   }
// }

export default function callApi(endpoint, method, body) {
  return fetch(`${API_URL}${endpoint}`, {
    method: method,
    body: JSON.stringify(body),
    //   headers: authHeader(),
  })
    .then((res) => res.json())
    .catch((error) => {
      console.log(error);
    });
}
