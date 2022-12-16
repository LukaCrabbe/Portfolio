import React from 'react';
import PropTypes from 'prop-types';
import './Name.scss';

const Name = () => (
  <div className="Name">
    <div>
      <h1>Luka</h1>
      <h1 className='second'>Crabbe</h1>
      <p>Front-end Developer</p>
    </div>

  </div>
);

Name.propTypes = {};

Name.defaultProps = {};

export default Name;
