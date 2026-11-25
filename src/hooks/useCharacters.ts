import { useEffect, useState } from "react";
import type { Character } from "../types/character";
import { getCharacters } from "../api/dragonBall";

// 1. Exporto una función llamada useCharacters (sin parámetros por ahora)
export const useCharacters = () => {
  const [characters, setCharacters] = useState<Character[]>([]);

  useEffect(() => {
    const cargarPersonajes = async () => {
      try {
        const data = await getCharacters(1, 5);
        setCharacters(data.items);
      } catch (error) {
        console.error("Error al cargar personajes:", error);
      }
    };
    cargarPersonajes();
  }, []);

  // 4. Devuelvo lo que App necesita para pintar

  return { characters }; // Se devuelve un objeto para manejar los estados de error y carga.
};
