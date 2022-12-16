import { React, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import './Body.scss';
import Info from '../Info/Info';
import Portfolio from '../Portfolio/Portfolio';
import { NavLink } from 'react-router-dom';

const Body = () => {
  const [activeInfo, setActiveInfo] = useState(true);


  return (
    <div className="Body">
      <div className='navigation'>
        <button style={activeInfo ? { borderBottom: "1px solid black" } : { border: "none" }}
          onClick={() => setActiveInfo(true)}>Info</button>
        <button style={activeInfo ? { border: "none" } : { borderBottom: "1px solid black" }}
          onClick={() => setActiveInfo(false)}>Portfolio</button>
      </div>
      {
        activeInfo ? <Info /> : <Portfolio />
      }

      {/* <Info />
      <Portfolio /> */}
    </div>)
};

Body.propTypes = {};

Body.defaultProps = {};

export default Body;
