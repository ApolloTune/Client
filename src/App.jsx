import Header from "./parts/Header"
import Navbar from "./parts/Navbar"
import { Routes, Route, Outlet, Navigate, useLocation } from 'react-router-dom';
import KeywordSearch from "./pages/KeywordSearch"
import NaturalLanguageSearch from "./pages/NaturalLanguageSearch"
import SuggestionSearch from "./pages/SuggestionSearch"
import PlaylistSearch from "./pages/PlaylistSearch"
import Footer from "./parts/Footer";
import FavoriteSongs from "./pages/FavoriteSongs";
import { useAuth } from "./contexts/AuthContext";
function App() {
  const location = useLocation();
  const hideNavbarPaths = ['/favorite-songs']; // Navbar'ın gizleneceği yolları belirleyin

  const shouldShowNavbar = !hideNavbarPaths.includes(location.pathname);
  return (
    <>
    <Header />
    <div className="container mx-auto md:px-14 lg:px-36 bg-black-50">
      {shouldShowNavbar && <Navbar />}
      <Routes>
        <Route path="/" element={<KeywordSearch />} />
        <Route path="/dogal-dil-arama" element={<NaturalLanguageSearch />} />
        <Route path="/begenilen-sarki-oneri" element={<SuggestionSearch />} />
        <Route path="/playlist-fal" element={<PlaylistSearch />} />
        <Route path="/" element={<ProtectedRoutes />}>
          <Route path="/favorite-songs" element={<FavoriteSongs />} />
        </Route>
      </Routes>
    </div>
    <Footer />
  </>
  )
}
const ProtectedRoutes = () => {
  const { loggedIn } = useAuth();
  return loggedIn ? <Outlet /> : <Navigate to="/" />
}
export default App
