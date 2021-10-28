/* eslint-disable no-unused-vars */
import React, { Component } from 'react'

class Counter extends Component {
    constructor(props) {
        super(props);
        this.state = { count: 0 };

    }

    handleChange = async (operation) => {
        console.log(operation);
        let newCount = null;
        switch (operation) {
            case "plus":
                newCount = this.state.count + 1;
                break;
            case "moins":
                newCount = this.state.count - 1;
                break;
            case "zero":
                newCount = 0;
                break;
            default:
                newCount = 0;

        }

        await this.setState({ count: newCount });
        this.props.handerPlusApp(this.state.count)
    };




    render() {
        return (
            <>

                <span>{this.state.count}</span> <br /><br />
                <button type="button" className="btn btn-primary" onClick={() => this.handleChange("plus")}> + </button>
                ||  <button type="button" className="btn btn-danger" onClick={() => this.handleChange("moins")}> - </button>
                ||  <button type="button" className="btn btn-orange" onClick={() => this.handleChange("zero")}> Reset</button>

                <br /><br />

            </>
        );
    }
}

export default Counter