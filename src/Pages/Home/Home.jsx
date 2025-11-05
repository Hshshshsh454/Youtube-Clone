import React, { useState } from 'react'; // ✅ FIXED: added useState import
import './Home.css';
import Sidebar from '../../Components/Sidebar/Sidebar';
import Feed from '../../Components/Feed/Feed';

const Home = ({ sidebar }) => {
  // ✅ useState hook for managing selected category
  const [category, setCategory] = useState(0);

  return (
    <>
      {/* ✅ Pass setCategory to Sidebar so it can update the category */}
      <Sidebar sidebar={sidebar} category={category} setcategory={setCategory} />

      {/* Main content area */}
      <div className={`container ${sidebar ? '' : 'large-container'}`}>
        <Feed category={category} />
      </div>
    </>
  );
};

export default Home;
