import { Counter } from "./components/Counter";
import { User } from "./components/User";

import { TimerPadre } from "./components/TimerPadre";
import { ContadorRed } from "./components/ContadorRed";

function App() {
  return (
    <>
      <h1>React + TypeScript</h1>
      <hr />

      <h2>UseState:</h2>
      <Counter />
      <User />

      <hr />
      <h2>useEffect - useRef</h2>
      <TimerPadre />

      <hr />
      <h2>UseReducer</h2>
      <ContadorRed />
    </>
  );
}

export default App;
