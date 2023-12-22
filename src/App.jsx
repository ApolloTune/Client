import Header from "./parts/Header"
import Navbar from "./parts/Navbar"
import { Routes, Route } from 'react-router-dom';
import KeywordSearch from "./pages/KeywordSearch"
import NaturalLanguageSearch from "./pages/NaturalLanguageSearch"
import SuggestionSearch from "./pages/SuggestionSearch"
import PlaylistSearch from "./pages/PlaylistSearch"
function App() {

  return (
    <>
      <Header />
      <div className="container mx-auto md:px-14 lg:px-36 bg-black-50">
        <Navbar />
        <Routes>
          <Route path="/" element={<KeywordSearch />} />
          <Route path="/dogal-dil-arama" element={<NaturalLanguageSearch />} />
          <Route path="/begenilen-sarki-oneri" element={<SuggestionSearch />} />
          <Route path="/playlist-fal" element={<PlaylistSearch />} />
        </Routes>
      </div>
    </>
  )
}

export default App
