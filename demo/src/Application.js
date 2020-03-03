import React, {Component} from 'react';

class Application extends Component {
    constructor(props){
        super(props);

        this.state={
            count:0
        }
    }

    handleClick = (bVal) => {
        this.setState({count: this.state.count+bVal})
    }
    render(){
        let {count} = this.state;
        let bVal=2
        return (
            <div>
                <h1>you clicked {count} times</h1>
                <span>
                    <button onClick={() => this.handleClick(bVal)}>{bVal}</button>
                </span>
            </div>
            );
    }
}

export default Application;