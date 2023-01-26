import { EventListener } from "./03 - Event-Listener";
import { PreventDefault } from "./04a - Prevent-Default";
import { StopPropagation } from "./04b - Stop-Propagation";

function App() {
  return (
    <div>
      <header>
        <h2>Event LifeCycle in JavaScript</h2>
      </header>
      {/* <EventListener /> */}
      {/* <PreventDefault /> */}
      <StopPropagation />
    </div>
  );
}

export default App;
