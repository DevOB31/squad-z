import { useEffect, useState } from "react";
import { getCharacters } from "./api/dragonBall";
import type { Character } from "./types/character";

function App() {
  // 1. Creo un estado para la lista de personajes (tipo y valor inicial correctos)
  const [characters, setCharacters] = useState<Character[]>([]);

  // 2. En el efecto: try → pido los personajes y GUARDO solo los items en el estado
  //                  catch → console.error del error

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

  // 3. En el JSX: recorro la lista y pinto el nombre de cada personaje en un <li>

  return (
    <>
      <h1>Squad Z</h1>
      <p>Lista de personajes</p>
      <ul>
        {characters.map((character) => (
          <li key={character.id}>
            {character.name}
            <p>{character.description}</p>
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;
