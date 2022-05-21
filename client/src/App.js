import {  Routes, Route, Link } from 'react-router-dom'
import {LandingPages} from "./pages/LandingPages";
import ListPage from "./pages/ListPage";
import EditPage from "./pages/EditPage";

function App() {
  return (
    <>
      <Routes>
          <Route path="/" element={<LandingPages />}/>
          <Route path="/list" element={<ListPage />}/>
          <Route path="/edit" element={<EditPage />}/>
      </Routes>
    </>
  );
}

export default App;
