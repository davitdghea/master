import './App.css';
import { BrowserRouter as Router,  Routes, Route} from "react-router-dom"
import {Favourites,Home,Public,Trending} from './pages/Index'
import path from './ultils/path';


function App() {
  return (
    <Router>
    <div className="App">
      <Routes>
        <Route path={path.PUBLIC} element={<Public/>}>
            <Route path={path.HOME} element={<Home allFilm={nhanMove} />}></Route>
          <Route path={path.Favourites} element={<Favourites/>}></Route>
          <Route path={path.Trending} element={<Trending/>}></Route>
        </Route>
      </Routes>
    </div>
    </Router>
  );
}

export default App;
