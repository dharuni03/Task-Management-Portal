import Login from './Login.jsx';
import Slide from './Slide.jsx';
import Homepage from './Homepage.jsx';
import Createtask from './Createtask.jsx';
import Calendar from './Calendar.jsx';
import Feedback from './Feedback.jsx';
import Snapadd from './Snapadd.jsx';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Slide />} />
          <Route path="/Slide" element={<Slide />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Homepage" element={<Homepage />} />
          <Route path="/Createtask" element={<Createtask />} />
          <Route path="/Feedback" element={<Feedback/>} />
          <Route path="/Calendar" element={<Calendar/>} />
          <Route path="/Snapadd" element={<Snapadd/>} />

        </Routes>
      </Router>
    </div>
  );
}

export default App;
