import React, { Component } from 'react';

const PersonCard = props => {
    return (
        <div>
            <h1>{this.props.lastName}, {this.props.firstName}</h1>
            <p>Age: {this.state.age}</p>
            <p>Hair Color: {this.props.haircolor}</p>
            <button onClick={ this.addToAge }>Add to Age</button>
        </div>
    )
}

export default PersonCard