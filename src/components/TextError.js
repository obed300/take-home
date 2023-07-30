import React from 'react';
import PropTypes from 'prop-types';

const TextError = ({ children }) => ( 
  <div className="error">
    {children}
  </div>
);

TextError.propTypes = {
  children: PropTypes.node.isRequired, 
};

export default TextError;
