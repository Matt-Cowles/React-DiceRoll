import React, { Component } from 'react';
import './Die.css'

class Die extends Component {
    render() {
        const { num, isRolling } = this.props

        return (
            <div className={`Die ${isRolling ? 'shaking' : ''}`}>
                <i className={`bi bi-dice-${num}`} id="Die-img" />
            </div>
        );
    }
}

export default Die;