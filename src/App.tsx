import { useCharacters } from "./hooks/useCharacters";
import { CharacterCard } from "./components/CharacterCard";

function App() {
  const { characters } = useCharacters();

  // 3. En el JSX: recorro la lista y pinto el nombre de cada personaje en un <li>

  return (
    <>
      <h1>Squad Z</h1>
      <p>Lista de personajes</p>
      <ul>
        {characters.map((character) => (
          <CharacterCard
            key={character.id}
            name={character.name}
            description={character.description}
            image={character.image}
          />
        ))}
      </ul>
    </>
  );
}

export default App;
