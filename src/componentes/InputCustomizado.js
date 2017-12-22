import React, { Component } from 'react';
import PubSub from 'pubsub-js';

export default class InputCustomizado extends Component{

    constructor(){
        super();
        this.state = {msgErro : ''};
    }

    componentDidMount() {
        PubSub.subscribe("erro-validacao",function(topico,erro){
            this.setState({msgErro:erro.defaultMessage});
        }.bind(this));
    }

    render() {

        return (

            <div className="pure-control-group">
                <label htmlFor={this.props.id}>{this.props.label}</label>
                <input type={this.props.type} id={this.props.id} name={this.props.name} value={this.props.value} onChange={this.props.onChange}/>
                <span className="erro">{this.state.msgErro}</span>
            </div>

        );

    }

}