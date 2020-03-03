import React, {Component} from 'react';

class Application extends Component {
    constructor(props){
        super(props)
    }
componentWillMount(props, state){

}

componentDidMount(props, state){
    console.log('mounted with',props,state);
}

componentWillReceiveProps(props){

}

componentWillUpdate(props,state){
    id(this.props.name!==props.name){
        //do something
    }
}

componentDidUpdate(props,state){

}
 
    render(){
        let name = "nick";
        return (
            <div>
                <h1>hello {name}</h1>
                <span>this</span>
            </div>);
    }
}

export default Application;