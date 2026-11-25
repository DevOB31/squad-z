import type { PaginatedResponse } from "../types/api";
import type { Character } from "../types/character";

// 1. Guardo la URL base en una constante

const BASE_URL = import.meta.env.VITE_DRAGONBALL_API_URL;

// 2. Creo una función async que recibe page y limit

export const getCharacters = async (
  page: number,
  limit: number,
): Promise<PaginatedResponse<Character>> => {
  // 3. Armo la URL completa y hago el fetch

  const response = await fetch(
    `${BASE_URL}/characters?page=${page}&limit=${limit}`,
  );

  // 4. Si la respuesta no está ok, lanzo un error

  if (!response.ok) {
    throw new Error("La llamada a la API fallo. Revisa");
  }

  // 5. Convierto la respuesta a JSON y la devuelvo

  const data: PaginatedResponse<Character> = await response.json();

  return data;
};
