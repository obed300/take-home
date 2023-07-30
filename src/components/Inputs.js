

import React from 'react';
import { Field, ErrorMessage } from 'formik';
import PropTypes from 'prop-types';
import TextError from './TextError';

const Inputs = ({ label, name, ...rest }) => (
  <div className="form-control">
    <label htmlFor={name}>{label}</label>
    <Field id={name} name={name} {...rest} />
    {' '}
    <ErrorMessage name={name} component={TextError} />
  </div>
);

Inputs.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default Inputs;
