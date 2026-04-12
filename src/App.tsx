import { Switch, Route } from 'wouter';
import HomeSignalDriven from "./pages/HomeSignalDriven";
import TheResonantBuilders from "./pages/TheResonantBuilders";

function App() {
  return (
    <Switch>
      <Route path="/" component={HomeSignalDriven} />
      <Route path="/theresonantbuilders" component={TheResonantBuilders} />
    </Switch>
  );
}

export default App;
