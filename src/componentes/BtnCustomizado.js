import React, { Component } from 'react';

export default class BtnCustomizado extends Component{

    render() {

        return (

            <div className="pure-control-group">
                <button type={this.props.type} className={this.props.className}>{this.props.name}</button>
            </div>

        );

    }

}




