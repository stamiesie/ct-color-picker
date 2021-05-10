import React from 'react';
import PropTypes from 'prop-types';

// Presentational Component
const Display = ({ text, bgColor, fgColor }) => (
    // implicit return with the () not {} return
    <div style={{ background: bgColor, color: fgColor }}>{text}</div>
);

Display.propTypes = {
text: PropTypes.string.isRequired,
bgColor: PropTypes.string.isRequired,
fgColor: PropTypes.string.isRequired,
};

export default Display;