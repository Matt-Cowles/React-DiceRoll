import React, { Component } from 'react';
import Die from './Die'
import './RollDice.css'

class RollDice extends Component {
    constructor(props) {
        super(props);
        this.state = {
            num1: 1,
            num2: 1,
            isRolling: false,
        }
    }

    render() {
        const rollDice = () => {
            const rand1 = Math.floor(Math.random() * 6) + 1;
            const rand2 = Math.floor(Math.random() * 6) + 1;

            this.setState({ num1: rand1, num2: rand2, isRolling: true })

            setTimeout(() => {
                this.setState({ isRolling: false })
            }, 750);
        }

        return (
            <div>
                <div className='RollDice-dice'>
                    <Die num={this.state.num1} isRolling={this.state.isRolling} />
                    <Die num={this.state.num2} isRolling={this.state.isRolling} />
                </div>
                <button onClick={rollDice} className="RollDice-btn" disabled={this.state.isRolling}>
                    {this.state.isRolling ? "Rolling..." : "Roll Dice!"}
                </button>
            </div>
        );
    }
}

export default RollDice;