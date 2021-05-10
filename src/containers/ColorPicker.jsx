import React, { Component }from 'react';
import Controls from '../components/color/Controls';
import Display from '../components/color/Display';

export default class ColorPicker extends Component {
    state = {
        bgColor: '#FF0000',
        fgColor: '#FFFFFF',
        text: 'Enter text here',
    };

    

    handleBgColorChange = (event) => {
        this.setState({ bgColor: event.target.value })
    };
    
    handleFgColorChange = (event) => {
        this.setState({ fgColor: event.target.value })
    };

    handleTextChange = (event) => {
        this.setState({ text: event.target.value }) 
    };

    render() {
        const { bgColor, fgColor, text } = this.state;
        return (
            <>
            <Controls
             bgColor={bgColor} 
             fgColor={fgColor} 
             text={text}
             onBgColorChange={this.handleBgColorChange}
             onFgColorChange={this.handleBgColorChange}
             onTextChange={this.handleTextChange}
             />
            <Display
            bgColor={bgColor}
            fgColor={fgColor}
            text={text}
            />
            </>
        );
    }
}