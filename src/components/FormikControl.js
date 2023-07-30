import React from 'react';
import PropTypes from 'prop-types';
import Inputs from './Inputs';

const FormikControl = (props) => {
  const { control, ...rest } = props;
  switch (control) {
    case 'input':
      return <Inputs {...rest} />;
    case 'textarea':
    case 'date':
    default: return null;
  }
};

FormikControl.propTypes = {
  control: PropTypes.oneOf(['input', 'textarea', 'date']).isRequired,
};

export default FormikControl;
