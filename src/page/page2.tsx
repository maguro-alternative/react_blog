import React from 'react';
import '../css/wave.css';

class page2 extends React.Component {
    render() {
        return(
            <div className="holder">
                <div className="first"></div>
                <div className="second"></div>
                <div className="third"></div>
                <div className="txt">
                    <h1>Mood Lighting</h1>
                    <p>Using only CSS</p>
                </div>
            </div>
        )
    }
}

export default page2;