import React, { Component } from 'react';
import Ball from './Ball';
import "./Lottery.css";

export default class Lottery extends Component {
    static defaultProps = {
        title: "Lotto",
        numballs: 6,
        maxvalue: 50
    };

    constructor(props) {
        super(props);
        this.state = {
            nums: Array.from({ length: this.props.numballs }, () => null)
        };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        const arr = Array.from({ length: this.props.numballs }, () => 
            Math.floor(Math.random() * this.props.maxvalue) + 1
        );
        this.setState({ nums: arr });
    }

    render() {
        let ballsArr = this.state.nums.map((n, idx) => <Ball key={idx} numvalue={n} />);
        return (
            <div className='Lottery'>
                <h2>{this.props.title}</h2>
                <div>{ballsArr}</div>
                <button onClick={this.handleClick}>Generate Numbers</button>
            </div>
        );
    }
}
