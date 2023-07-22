import React, { useEffect } from 'react';
import './Slide.css';
import { Link } from 'react-router-dom';
import Login from './Login.jsx';

function Slide() {
  useEffect(() => {
    const handleNextClick = () => {
      const slide = document.getElementById('slide');
      const firstItem = slide.querySelector('.item');

      slide.appendChild(firstItem);
    };

    const handlePrevClick = () => {
      const slide = document.getElementById('slide');
      const items = slide.querySelectorAll('.item');
      const lastItem = items[items.length - 1];

      slide.prepend(lastItem);
    };

    const nextButton = document.getElementById('next');
    const prevButton = document.getElementById('prev');

    nextButton.addEventListener('click', handleNextClick);
    prevButton.addEventListener('click', handlePrevClick);

    return () => {
      if (nextButton) {
        nextButton.removeEventListener('click', handleNextClick);
      }
      if (prevButton) {
        prevButton.removeEventListener('click', handlePrevClick);
      }
    };
  }, []);

  return (
    <div>
      <div className="buttons-top">
        <button id="prev">&#8592;</button>
        <button id="next">&#8594;</button>
      </div>

      <div className="container">
        <div id="slide">
          <div className="item" style={{ backgroundImage: `url(https://images.pexels.com/photos/8581118/pexels-photo-8581118.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)` }}>
            <div className="content">
              <div className="name">Synchronize Your Success</div>
              <div className="des">Masterful Planning for a Flourishing Future</div>
            </div>
          </div>
          <div className="item" style={{ backgroundImage: `url(https://images.pexels.com/photos/2180092/pexels-photo-2180092.jpeg?auto=compress&cs=tinysrgb&w=600https://images.pexels.com/photos/2180092/pexels-photo-2180092.jpeg?auto=compress&cs=tinysrgb&w=600)` }}>
            <div className="content">
              <div className="name">Success by Design</div>
              <div className="des">"Unleashing Your Potential through Strategic Planning"</div>
            </div>
          </div>
          <div className="item" style={{ backgroundImage: `url(https://images.squarespace-cdn.com/content/v1/5c70bcfc16b6403c514e5a3f/b45f2185-2c00-481c-b60f-091aacfd5c61/manage+time?format=2500w)` }}>
            <div className="content">
              <div className="name">TIME CRAFT</div>
              <div className="des">"Organize, Prioritize, and Optimize Your Time."</div>
            </div>
          </div>
          <div className="item" style={{ backgroundImage: `url(https://cdn.pixabay.com/photo/2020/05/30/09/53/todo-lists-5238324_1280.jpg)` }}>
            <div className="content"></div>
          </div>
        </div>
      </div>

      <div className="buttons">
        <Link to="/Login">
          <button id="team">team</button>
        </Link>
        <Link to="/Login">
          <button id="user">user</button>
        </Link>
        <Link to="/Adminlog">
          <button id="admin">admin</button>
        </Link>
      </div>
    </div>
  );
}

export default Slide;
