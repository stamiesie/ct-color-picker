import React from 'react';
import PropTypes from 'prop-types';

// const Controls = (params) => {body}
const Controls = ({ 
    bgColor, 
    fgColor, 
    text, 
    onBgColorChange, 
    onFgColorChange,
    onTextChange,
    }) => (
<>
<input type="color" value={bgColor} onChange={onBgColorChange}/>
<input type="color" value={fgColor} onChange={onFgColorChange}/>
<input type="text" value={text} onChange={onTextChange}/>
</>

);

Controls.propTypes = {
bgColor: PropTypes.string.isRequired,
fgColor: PropTypes.string.isRequired,
text: PropTypes.string.isRequired,
onBgColorChange: PropTypes.func.isRequired,
onFgColorChange: PropTypes.func.isRequired,
onTextChange: PropTypes.func.isRequired,
}

export default Controls;