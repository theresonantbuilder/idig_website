import { useEffect } from 'react';
import { Switch, Route, useLocation } from 'wouter';
import HomeSignalDriven from "./pages/HomeSignalDriven";
import TheResonantBuilders from "./pages/TheResonantBuilders";
import Post from "./pages/Post";
import AboutPaul from "./pages/AboutPaul";
import HiringSignals from "./pages/HiringSignals";
import SubjectExplorer from "./pages/SubjectExplorer";

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
        {/* /movies and /movies/* are proxied straight to idig-movies-production-demo.vercel.app
            via a vercel.json rewrite — this app's router never sees those requests. */}
        <Route path="/hiringsignals" component={HiringSignals} />
        <Route path="/subjectexplorer" component={SubjectExplorer} />
        <Route path="/theresonantbuilders" component={TheResonantBuilders} />
        <Route path="/theresonantbuilders/:slug" component={Post} />
      </Switch>
    </>
  );
}

export default App;
