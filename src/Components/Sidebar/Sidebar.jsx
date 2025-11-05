// Importing React and required assets
import React from 'react';
import './Sidebar.css';

// Importing sidebar icons and images
import home from '../../assets/home.png';
import game_icon from '../../assets/game_icon.png';
import automobiles from '../../assets/automobiles.png';
import sports from '../../assets/sports.png';
import entertainment from '../../assets/entertainment.png';
import tech from '../../assets/tech.png';
import music from '../../assets/music.png';
import blogs from '../../assets/blogs.png';
import news from '../../assets/news.png';
import jack from '../../assets/profile_icon.png';
import simon from '../../assets/simon.png';
import tom from '../../assets/tom.png';
import megan from '../../assets/megan.png';
import cameron from '../../assets/cameron.png';

// Sidebar component
const Sidebar = ({ sidebar, category, setcategory }) => {
  return (
    <div className={`sidebar ${sidebar ? '' : 'small-sidebar'}`}>
      {/* Shortcut links section */}
      <div className="shortcut-links">
        <div
          className={`side-link ${category === 0 ? 'active' : ''}`}
          onClick={() => setcategory(0)}
        >
          <img src={home} alt="Home" /> <p>Home</p>
        </div>

        <div
          className={`side-link ${category === 20 ? 'active' : ''}`}
          onClick={() => setcategory(20)}
        >
          <img src={game_icon} alt="Gaming" /> <p>Gaming</p>
        </div>

        <div
          className={`side-link ${category === 2 ? 'active' : ''}`}
          onClick={() => setcategory(2)}
        >
          <img src={automobiles} alt="Automobiles" /> <p>Automobiles</p>
        </div>

        <div
          className={`side-link ${category === 17 ? 'active' : ''}`}
          onClick={() => setcategory(17)}
        >
          <img src={sports} alt="Sports" /> <p>Sports</p>
        </div>

        <div
          className={`side-link ${category === 24 ? 'active' : ''}`}
          onClick={() => setcategory(24)}
        >
          <img src={entertainment} alt="Entertainment" /> <p>Entertainment</p>
        </div>

        <div
          className={`side-link ${category === 28 ? 'active' : ''}`}
          onClick={() => setcategory(28)}
        >
          <img src={tech} alt="Tech" /> <p>Tech</p>
        </div>

        <div
          className={`side-link ${category === 10 ? 'active' : ''}`}
          onClick={() => setcategory(10)}
        >
          <img src={music} alt="Music" /> <p>Music</p>
        </div>

        <div
          className={`side-link ${category === 22 ? 'active' : ''}`}
          onClick={() => setcategory(22)}
        >
          <img src={blogs} alt="Blogs" /> <p>Blogs</p>
        </div>

        <div
          className={`side-link ${category === 25 ? 'active' : ''}`}
          onClick={() => setcategory(25)}
        >
          <img src={news} alt="News" /> <p>News</p>
        </div>

        <hr />
      </div>

      {/* Subscribers section */}
      <div className="subscribers-list">
        <h3>Subscribed</h3>
        <div className="side-link">
          <img src={jack} alt="Jack" /> <p>Jack</p>
        </div>
        <div className="side-link">
          <img src={simon} alt="Simon" /> <p>Simon</p>
        </div>
        <div className="side-link">
          <img src={tom} alt="Tom" /> <p>Tom</p>
        </div>
        <div className="side-link">
          <img src={megan} alt="Megan" /> <p>Megan</p>
        </div>
        <div className="side-link">
          <img src={cameron} alt="Cameron" /> <p>Cameron</p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
