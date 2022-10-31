import http from "./http";

const endpoint = "/payment";



export async function getAllCards(id){
    return await http.get(endpoint + `/getAllCards/${id}`);
}

export async function saveCard(data) {
  return await http.post(endpoint + '/addCard', data);
}

export async function savePayment(data) {
  return await http.post(endpoint + "/savePayment", data);
}
