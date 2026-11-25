import { useCharacters } from "./hooks/useCharacters";

function App() {
  const { characters } = useCharacters();

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
