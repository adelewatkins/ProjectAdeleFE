import React from 'react';
import penPortrait from './penportrait.JPG'; // Import the image

function AboutMe() {
    return (
        <div>
            <h1>About Me</h1>
            <img style={{ margin: 'auto', width:'70%' }} src={penPortrait} alt="Pen Portrait" /> {/* Use the imported image */}
        </div>
    );
}

export default AboutMe;