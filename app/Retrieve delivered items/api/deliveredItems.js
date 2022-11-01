import http from "./http"

const endpoint = "/deliveredItems";

export  async function getAllDeliveredItems() {
  return await http.get(endpoint + "/getAllOrders");
}

export async function saveTestReport(data) {
  return await http.post(endpoint + "/saveReport", data);
}