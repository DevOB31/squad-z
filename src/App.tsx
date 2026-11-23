import { useEffect } from "react";
import { getCharacters } from "./api/dragonBall";

function App() {
  useEffect(() => {
    const cargarPersonajes = async () => {
      const data = await getCharacters(1, 5);
      console.log(data);
    };
    cargarPersonajes();
  }, []);

  return (
    <>
      <h1>Squad Z</h1>
    </>
  );
}

export default App;
