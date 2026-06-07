import api from "./API";

export async function searchMusic(searchStr, quantityMusic) {
  try {
    const response = await api.get(
      `/search/${searchStr}?qtd=${quantityMusic}`
    );

    return response.data;
  } catch (err) {
    console.error("Erro ao buscar músicas:", err);
    throw err;
  }
}