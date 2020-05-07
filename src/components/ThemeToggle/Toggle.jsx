import React from 'react';
import PropTypes from 'prop-types';

const Toggle = ({ toggle, value }) => (
  <>
    <input id="toggle" type="checkbox" checked={value} onChange={toggle} />
    <label>Dark</label>
  </>

);

Toggle.propTypes = {
  toggle: PropTypes.func.isRequired,
  value: PropTypes.bool.isRequired
};

export default Toggle;
