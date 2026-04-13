import { Switch, Route } from 'wouter';
import HomeSignalDriven from "./pages/HomeSignalDriven";
import TheResonantBuilders from "./pages/TheResonantBuilders";
import Post from "./pages/Post";
import AboutPaul from "./pages/AboutPaul";

function App() {
  return (
    <Switch>
      <Route path="/" component={HomeSignalDriven} />
      <Route path="/about" component={AboutPaul} />
      <Route path="/theresonantbuilders" component={TheResonantBuilders} />
      <Route path="/theresonantbuilders/:slug" component={Post} />
    </Switch>
  );
}

export default App;
