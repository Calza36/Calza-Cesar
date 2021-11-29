import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import AllMeetuopsPage from "./pages/AllMeetuops";
import NewMeetupPage from "./pages/NewMeetup";
import FavoritesPage from "./pages/Favorites";
import Layout from "./components/layout/Layout";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" exact element={<AllMeetuopsPage />} />
        <Route path="/new-meetup" exact element={<NewMeetupPage />} />
        <Route path="/favorites" exact element={<FavoritesPage />} />
      </Routes>
    </Layout>
  );
}

export default App;
