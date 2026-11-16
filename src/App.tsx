import { useEffect } from 'react';
import { Switch, Route, useLocation } from 'wouter';
import Moving from "./pages/Moving";
import TheResonantBuilders from "./pages/TheResonantBuilders";
import Post from "./pages/Post";

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
        {/* i-dig.io is the blog plus a "moving" page until the new site goes live. /movies and /exploring/* are proxied
            by vercel.json rewrites and never reach this router. Any other address shows the moving page. */}
        <Route path="/" component={Moving} />
        <Route path="/theresonantbuilders" component={TheResonantBuilders} />
        <Route path="/theresonantbuilders/:slug" component={Post} />
        <Route component={Moving} />
      </Switch>
    </>
  );
}

export default App;
