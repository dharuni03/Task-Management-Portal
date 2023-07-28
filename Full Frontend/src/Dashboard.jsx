import React from 'react';
import './Dashboard.css';
import { Link } from 'react-router-dom';


function Dashboard() {
  return (
    <div className="xbody">
                  <Link to="/HomePage" className="arrow-top-left">&#8592;</Link>

    <div className="xtask-manager">
     
      <div className="xleft-bar">
        <div className="xupper-part">
          <div className="xactions">
            <div className="xcircle"></div>
            <div className="xcircle-2"></div>
          </div>
        </div>
        <div className="xleft-content">
          <ul className="xaction-list">
            <li className="xitem">
              <img className="good" src="https://img.icons8.com/?size=2x&id=DeDuNMIJOMb2&format=png" alt="" />
              <span>Inbox</span>
            </li>
            <br></br>
            <li className="xitem">
              <img className="bad" src="https://img.icons8.com/?size=2x&id=60716&format=png" alt="" />
              <span>Today</span>
            </li>
            <br></br>
            <li className="xitem">
              <img className="goo1" src="https://img.icons8.com/?size=2x&id=A9xqAkgkFIW9&format=png" alt="" />
              <span>Upcoming</span>
            </li>
            <br></br>
            <li className="xitem">
              <img className="go" src="https://img.icons8.com/?size=2x&id=SgM7EWqVef85&format=png" alt="" />
              <span>Important</span>
            </li>
            <br></br>
            <li className="xitem">
              <img className="meet" src="https://img.icons8.com/?size=2x&id=69567&format=png" alt="" />
              <span>Meetings</span>
            </li>
            <br></br>
            <li className="xitem">
              <img className="trash" src="https://img.icons8.com/?size=2x&id=68064&format=png" alt="" />
              <span>Trash</span>
            </li>
          </ul>
          <br></br><br></br>
          <br></br><br></br>
          <ul className="xcategory-list">
            <li className="xitem">
              <img className="users" src="https://img.icons8.com/?size=2x&id=8902&format=png" alt="" />
              <span>Family</span>
            </li>
            <br></br>
            <li className="xitem">
              <img className="sun" src="https://img.icons8.com/?size=2x&id=31914&format=png" alt="" />
              <span>Vacation</span>
            </li><br></br>
            <li className="xitem">
              <img className="up" src="https://img.icons8.com/?size=2x&id=SCXPsjoqmzAp&format=png" alt="" />
              <span>Festival</span>
            </li><br></br>
            <li className="xitem">
              <img className="zap" src="https://img.icons8.com/?size=2x&id=avmwUUynnLlv&format=png" alt="" />
              <span>Concerts</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="xpage-content">
        <div className="xheader">Today Tasks</div>
        <div className="xcontent-categories">
          <div className="xlabel-wrapper">
            <input className="xnav-item" name="nav" type="radio" id="opt-1" />
            <label className="xcategory" htmlFor="opt-1">All</label>
          </div>
          <div className="xlabel-wrapper">
            <input className="xnav-item" name="nav" type="radio" id="opt-2" checked />
            <label className="xcategory" htmlFor="opt-2">Important</label>
          </div>
          <div className="xlabel-wrapper">
            <input className="xnav-item" name="nav" type="radio" id="opt-3" />
            <label className="xcategory" htmlFor="opt-3">Notes</label>
          </div>
          <div className="xlabel-wrapper">
            <input className="xnav-item" name="nav" type="radio" id="opt-4" />
            <label className="xcategory" htmlFor="opt-4">Links</label>
          </div>
        </div>
        <div className="xtasks-wrapper">
          <div className="xtask">
            <input className="xtask-item" name="task" type="checkbox" id="item-1" checked />
            <label htmlFor="xitem-1">
              <span className="xlabel-text">Buy groceries</span>
            </label>
            <span className="xtag approved">Approved</span>
          </div>
          <div className="xtask">
            <input className="xtask-item" name="task" type="checkbox" id="item-2" checked />
            <label htmlFor="xitem-2">
              <span className="xlabel-text">Pay bills</span>
            </label>
            <span className="xtag progress">In Progress</span>
          </div>
          <div className="xtask">
            <input className="xtask-item" name="task" type="checkbox" id="item-3" />
            <label htmlFor="xitem-3">
              <span className="xlabel-text">Exercise</span>
            </label>
            <span className="xtag review">In Review</span>
          </div>
          <div className="xtask">
            <input className="xtask-item" name="task" type="checkbox" id="item-4" />
            <label htmlFor="xitem-4">
              <span className="xlabel-text">Read a book</span>
            </label>
            <span className="xtag progress">In Progress</span>
          </div>
          <div className="xtask">
            <input className="xtask-item" name="task" type="checkbox" id="item-5" />
            <label htmlFor="xitem-5">
              <span className="xlabel-text">Laundry</span>
            </label>
            <span className="xtag approved">Approved</span>
          </div>
          <div className="xtask">
            <input className="xtask-item" name="task" type="checkbox" id="item-6" />
            <label htmlFor="xitem-6">
              <span className="xlabel-text">Clean the house</span>
            </label>
            <span className="xtag review">In Review</span>
          </div>
          <div className="xheader upcoming">Upcoming Tasks</div><br></br>
          <div className="xtask">
            <input className="xtask-item" name="task" type="checkbox" id="item-7" />
            <label htmlFor="xitem-7">
              <span className="xlabel-text">Plan meals</span>
            </label>
            <span className="xtag waiting">Waiting</span>
          </div>
          <div className="xtask">
            <input className="xtask-item" name="task" type="checkbox" id="item-8" />
            <label htmlFor="xitem-8">
              <span className="xlabel-text">Check emails</span>
            </label>
            <span className="xtag waiting">Waiting</span>
          </div>
          <div className="xtask">
            <input className="xtask-item" name="task" type="checkbox" id="item-9" />
            <label htmlFor="xitem-9">
              <span className="xlabel-text">Attend meetings</span>
            </label>
            <span className="xtag waiting">Waiting</span>
          </div>
          <div className="xtask">
            <input className="xtask-item" name="task" type="checkbox" id="item-10" />
            <label htmlFor="xitem-10">
              <span className="xlabel-text">Relaxation</span>
            </label>
            <span className="xtag waiting">Waiting</span>
          </div>
        </div>
      </div>

      
      <div className="xright-bar">
        <div className="xtop-part">
          <img className="xf" src="https://img.icons8.com/?size=2x&id=x8H7d7I1Z4yK&format=png" alt="" />
         
        </div>
        <div className="xheader">Schedule</div>
        <div className="xright-content">
          <div className="xtask-box yellow">
            <div className="xdescription-task">
              <div className="xtime">05:00 - 08:00 PM</div>
              <div className="xtask-name">Study Plan</div>
            </div>
            <div className="xmore-button"></div>
            <div className="xmembers">
              <img src="https://images.pexels.com/photos/3796217/pexels-photo-3796217.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="member" />
              <img src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=600" alt="member-2" />
              <img src="https://images.pexels.com/photos/4420634/pexels-photo-4420634.jpeg?auto=compress&cs=tinysrgb&w=600" alt="member-3" />
              <img src="https://images.pexels.com/photos/4307869/pexels-photo-4307869.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="member-4" />
            </div>
          </div>
          <div className="xtask-box blue">
            <div className="xdescription-task">
              <div className="xtime">10:00 - 11:00 AM</div>
              <div className="xtask-name">Health</div>
            </div>
            <div className="xmore-button"></div>
            <div className="xmembers">
              <img src="https://images.pexels.com/photos/943084/pexels-photo-943084.jpeg?auto=compress&cs=tinysrgb&w=600" alt="member" />
              <img src="https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg?auto=compress&cs=tinysrgb&w=600" alt="member-2" />
              <img src="https://images.pexels.com/photos/2726111/pexels-photo-2726111.jpeg?auto=compress&cs=tinysrgb&w=600" alt="member-3" />
            </div>
          </div>
          <div className="xtask-box red">
            <div className="xdescription-task">
              <div className="xtime">01:00 - 02:00 PM</div>
              <div className="xtask-name">Make Appointment</div>
            </div>
            <div className="xmore-button"></div>
            <div className="xmembers">
              <img src="https://images.pexels.com/photos/1239288/pexels-photo-1239288.jpeg?auto=compress&cs=tinysrgb&w=600" alt="member" />
              <img src="https://images.pexels.com/photos/2613260/pexels-photo-2613260.jpeg?auto=compress&cs=tinysrgb&w=600" alt="member-2" />
              <img src="https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=600" alt="member-3" />
              <img src="https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=600" alt="member-4" />
            </div>
          </div>
          <div className="xtask-box green">
            <div className="xdescription-task">
              <div className="xtime">03:00 - 04:00 PM</div>
              <div className="xtask-name">PayBills</div>
            </div>
            <div className="xmore-button"></div>
            <div className="xmembers">
              <img src="https://images.pexels.com/photos/874158/pexels-photo-874158.jpeg?auto=compress&cs=tinysrgb&w=600" alt="member" />
              <img src="https://images.pexels.com/photos/1624229/pexels-photo-1624229.jpeg?auto=compress&cs=tinysrgb&w=600" alt="member-2" />
              <img src="https://images.pexels.com/photos/1855582/pexels-photo-1855582.jpeg?auto=compress&cs=tinysrgb&w=600" alt="member-3" />
              <img src="https://images.pexels.com/photos/247322/pexels-photo-247322.jpeg?auto=compress&cs=tinysrgb&w=600" alt="member-4" />
              <img src="https://images.pexels.com/photos/997489/pexels-photo-997489.jpeg?auto=compress&cs=tinysrgb&w=600" alt="member-5" />
            </div>
          </div>
          <div className="xtask-box blue">
            <div className="xdescription-task">
              <div className="xtime">08:00 - 09:00 PM</div>
              <div className="xtask-name">Entertainment</div>
            </div>
            <div className="xmore-button"></div>
            <div className="xmembers">
              <img src="https://images.pexels.com/photos/2691608/pexels-photo-2691608.jpeg?auto=compress&cs=tinysrgb&w=600" alt="member" />
              <img src="https://images.pexels.com/photos/3778603/pexels-photo-3778603.jpeg?auto=compress&cs=tinysrgb&w=600" alt="member-2" />
              <img src="https://images.pexels.com/photos/2811087/pexels-photo-2811087.jpeg?auto=compress&cs=tinysrgb&w=600" alt="member-3" />
              <img src="https://images.pexels.com/photos/7243094/pexels-photo-7243094.jpeg?auto=compress&cs=tinysrgb&w=600" alt="member-4" />
              <img src="https://images.pexels.com/photos/1852083/pexels-photo-1852083.jpeg?auto=compress&cs=tinysrgb&w=600" alt="member-5" />
            </div>
          </div>
          <div className="xtask-box yellow">
            <div className="xdescription-task">
              <div className="xtime">5:00 - 6:00 AM</div>
              <div className="xtask-name">Fitness</div>
            </div>
            <div className="xmore-button"></div>
            <div className="xmembers">
              <img src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=600" alt="member" />
              <img src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=600" alt="member-2" />
              <img src="https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg?auto=compress&cs=tinysrgb&w=600" alt="member-3" />
              <img src="https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=600" alt="member-4" />
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}

export default Dashboard;
