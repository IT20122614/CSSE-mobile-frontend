import http from "./http";

const endpoint = "/message";

export async function sendMessage(data) {
  return await http.post(endpoint + "/addMessage", data);
}
