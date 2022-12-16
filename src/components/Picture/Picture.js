import React from 'react';
import PropTypes from 'prop-types';
import './Picture.scss';

const Picture = () => (
  <div className="Picture">

    <div className='rectangle'>
      <img src="/assets/pictures/profielfoto.jpg" alt="" />
    </div>

  </div>
);

Picture.propTypes = {};

Picture.defaultProps = {};

export default Picture;
