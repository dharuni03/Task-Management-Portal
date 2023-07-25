import Login from './Login.jsx';
import Slide from './Slide.jsx';
import Homepage from './Homepage.jsx';
import Createtask from './Createtask.jsx';
import Calendar from './Calendar.jsx';
import Feedback from './Feedback.jsx';
import Snapadd from './Snapadd.jsx';
import About from './About.jsx';
import Dashboard from './Dashboard.jsx';
import Front from './Front.jsx';
import Edittask from './Edittask.jsx';
import View from './View.jsx';
import Delete from './Delete.jsx';
import Adminlog from './Adminlog.jsx';
import Admin from './Admin.jsx';
import Userdetails from './Userdetails.jsx';
import Deleteuser from './Deleteuser.jsx';
import Feed from './Feed.jsx';


import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Front />} />
          <Route path="/Slide" element={<Slide />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Adminlog" element={<Adminlog/>} />
          <Route path="/Homepage" element={<Homepage />} />
          <Route path="/Createtask" element={<Createtask />} />
          <Route path="/Edittask" element={<Edittask/>} />
          <Route path="/Feedback" element={<Feedback/>} />
          <Route path="/Calendar" element={<Calendar/>} />
          <Route path="/Snapadd" element={<Snapadd/>} />
          <Route path="/About" element={<About/>} />
          <Route path="/Dashboard" element={<Dashboard/>} />
          <Route path="/View" element={<View/>} />
          <Route path="/Delete" element={<Delete/>} />
          <Route path="/Admin" element={<Admin/>} />
          <Route path="/Userdetails" element={<Userdetails/>} />
          <Route path="/Deleteuser" element={<Deleteuser/>} />
          <Route path="/Front" element={<Front/>}/>
          <Route path="/Feed" element={<Feed/>}/>

   



          

        </Routes>
      </Router>
    </div>
  );
}

export default App;
