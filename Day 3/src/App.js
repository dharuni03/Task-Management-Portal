import Login from './Login.jsx';
import Slide from './Slide.jsx';
import Homepage from './Homepage.jsx';
import {BrowserRouter,Routes,Route} from "react-router-dom";

function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <Routes>
      <Route path='' element={<Slide/>}></Route>
      <Route path='Slide' element={<Slide/>}></Route>
      <Route path='Login' element={<Login/>}></Route>
      <Route path='Homepage' element={<Homepage/>}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;