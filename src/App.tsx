import { useEffect } from 'react';
import { Switch, Route, useLocation } from 'wouter';
import HomeSignalDriven from "./pages/HomeSignalDriven";
import TheResonantBuilders from "./pages/TheResonantBuilders";
import Post from "./pages/Post";
import AboutPaul from "./pages/AboutPaul";
import HiringSignals from "./pages/HiringSignals";
import IDIGMovies from "./pages/IDIGMovies";
import MentalHealthPathways from "./pages/MentalHealthPathways";

function ScrollToTop() {
  const [location] = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [location]);
  return null;
}

function App() {
  return (
    <>
      <ScrollToTop />
      <Switch>
        <Route path="/" component={HomeSignalDriven} />
        <Route path="/about" component={AboutPaul} />
        <Route path="/idigmovies" component={IDIGMovies} />
        <Route path="/hiringsignals" component={HiringSignals} />
        <Route path="/mentalhealthpathways" component={MentalHealthPathways} />
        <Route path="/theresonantbuilders" component={TheResonantBuilders} />
        <Route path="/theresonantbuilders/:slug" component={Post} />
      </Switch>
    </>
  );
}

export default App;
